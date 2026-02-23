const feedbackConfig = {
  formAction: import.meta.env.PUBLIC_GOOGLE_FORM_ACTION?.trim() || '',
  versionField: import.meta.env.PUBLIC_GOOGLE_FORM_VERSION_FIELD?.trim() || '',
  routeField: import.meta.env.PUBLIC_GOOGLE_FORM_ROUTE_FIELD?.trim() || '',
  voteField: import.meta.env.PUBLIC_GOOGLE_FORM_VOTE_FIELD?.trim() || '',
  feedbackField: import.meta.env.PUBLIC_GOOGLE_FORM_FEEDBACK_FIELD?.trim() || ''
};

export function getFeedbackConfig() {
  return feedbackConfig;
}

export function getMissingFeedbackConfig() {
  return Object.entries(feedbackConfig)
    .filter(([, value]) => value.length === 0)
    .map(([key]) => key);
}

export function isFeedbackConfigured() {
  return getMissingFeedbackConfig().length === 0;
}
