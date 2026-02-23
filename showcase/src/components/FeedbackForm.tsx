import type { SyntheticEvent } from 'react';
import { useMemo, useState } from 'react';
import { getFeedbackConfig, getMissingFeedbackConfig, isFeedbackConfigured } from '../config/feedback';

type Vote = 'upvote' | 'downvote' | '';

interface FeedbackFormProps {
  version: string;
  route: string;
}

export default function FeedbackForm({ version, route }: FeedbackFormProps) {
  const config = useMemo(() => getFeedbackConfig(), []);
  const missing = useMemo(() => getMissingFeedbackConfig(), []);
  const [vote, setVote] = useState<Vote>('');
  const [feedback, setFeedback] = useState('');
  const [reviewer, setReviewer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isFeedbackConfigured()) {
      return;
    }

    if (!vote) {
      setStatus('error');
      setErrorMessage('Select upvote or downvote before submitting.');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    const payload = new URLSearchParams();
    payload.set(config.versionField, version);
    payload.set(config.routeField, route);
    payload.set(config.voteField, vote);

    const combinedFeedback = [reviewer ? `Reviewer: ${reviewer}` : '', feedback].filter(Boolean).join('\n');
    payload.set(config.feedbackField, combinedFeedback || 'No additional feedback');

    try {
      await fetch(config.formAction, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: payload.toString()
      });

      setStatus('success');
      setVote('');
      setFeedback('');
      setReviewer('');
    } catch {
      setStatus('error');
      setErrorMessage('Submission failed. Check your network and Google Form action URL.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="feedback-panel" aria-labelledby="feedback-title">
      <div className="feedback-header">
        <p className="eyebrow">Human Review</p>
        <h2 id="feedback-title">Rate This Route Output</h2>
        <p>
          Submission fields: <code>{version}</code> | <code>{route}</code> | vote | reviewer note.
        </p>
      </div>

      {!isFeedbackConfigured() ? (
        <div className="feedback-warning" role="status">
          <p>Google Form environment variables are not configured.</p>
          <p className="small">Missing keys: {missing.join(', ')}</p>
        </div>
      ) : (
        <form className="feedback-form" onSubmit={handleSubmit}>
          <input type="hidden" value={version} />
          <input type="hidden" value={route} />

          <div className="feedback-grid">
            <label>
              <span>Version</span>
              <input type="text" value={version} disabled />
            </label>
            <label>
              <span>Route</span>
              <input type="text" value={route} disabled />
            </label>
          </div>

          <fieldset>
            <legend>Vote</legend>
            <div className="vote-toggle">
              <button
                type="button"
                className={vote === 'upvote' ? 'vote-btn active' : 'vote-btn'}
                onClick={() => setVote('upvote')}
                aria-pressed={vote === 'upvote'}
              >
                Upvote
              </button>
              <button
                type="button"
                className={vote === 'downvote' ? 'vote-btn active' : 'vote-btn'}
                onClick={() => setVote('downvote')}
                aria-pressed={vote === 'downvote'}
              >
                Downvote
              </button>
            </div>
          </fieldset>

          <label>
            <span>Reviewer (optional)</span>
            <input
              type="text"
              value={reviewer}
              onChange={(event) => setReviewer(event.target.value)}
              placeholder="name or handle"
            />
          </label>

          <label>
            <span>Feedback for model output</span>
            <textarea
              value={feedback}
              onChange={(event) => setFeedback(event.target.value)}
              placeholder="What worked, what failed, what should be improved in next skill iteration?"
              rows={5}
            />
          </label>

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit to Google Forms'}
          </button>

          {status === 'success' ? (
            <p className="feedback-success" role="status">
              Submitted. Google Forms accepted the request.
            </p>
          ) : null}

          {status === 'error' ? (
            <p className="feedback-error" role="alert">
              {errorMessage}
            </p>
          ) : null}
        </form>
      )}
    </section>
  );
}
