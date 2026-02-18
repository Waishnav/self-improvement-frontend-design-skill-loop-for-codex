import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const commandModes = [
  {
    id: 'blitz',
    headline: 'Ad Blitz Mode',
    copy: 'Generate aggressive campaign variants optimized for click-through testing.',
    signal: '72 outputs / 10 min',
  },
  {
    id: 'lab',
    headline: 'Product Lab Mode',
    copy: 'Focus on controlled material detail, shadows, and e-commerce consistency.',
    signal: '48 outputs / 10 min',
  },
  {
    id: 'story',
    headline: 'Narrative Mode',
    copy: 'Build scene continuity for story-led promos and cinematic beats.',
    signal: '30 outputs / 10 min',
  },
]

const throttleProfiles = [
  {
    id: 'rush',
    name: 'Rush',
    speed: 96,
    quality: 74,
    note: 'Best for high-volume ideation passes.',
  },
  {
    id: 'core',
    name: 'Core',
    speed: 86,
    quality: 87,
    note: 'Balanced profile for everyday production.',
  },
  {
    id: 'fidelity',
    name: 'Fidelity',
    speed: 71,
    quality: 94,
    note: 'Optimized for high-finish hero visuals.',
  },
]

const modules = [
  'Prompt linting',
  'Multi-model parallel queue',
  'Region-aware edit masks',
  'Brand style lock',
  'Batch export manager',
  'Comment approvals',
]

const plans = [
  {
    id: 'solo',
    title: 'Operator',
    price: '$69',
    benefit: 'Best for solo creators and freelancers.',
  },
  {
    id: 'team',
    title: 'Squad',
    price: '$99',
    benefit: 'Collaboration lanes and role permissions included.',
  },
  {
    id: 'org',
    title: 'Studio',
    price: '$149',
    benefit: 'Enterprise controls, audit trails, and SSO.',
  },
]

function DesignThree() {
  const [modeId, setModeId] = useState(commandModes[0].id)
  const [profileId, setProfileId] = useState(throttleProfiles[1].id)
  const [enabledModules, setEnabledModules] = useState<string[]>([modules[0], modules[1], modules[3]])
  const [planId, setPlanId] = useState(plans[1].id)

  const activeMode = useMemo(() => commandModes.find((mode) => mode.id === modeId) ?? commandModes[0], [modeId])
  const activeProfile = useMemo(
    () => throttleProfiles.find((profile) => profile.id === profileId) ?? throttleProfiles[1],
    [profileId],
  )
  const activePlan = useMemo(() => plans.find((plan) => plan.id === planId) ?? plans[1], [planId])

  const toggleModule = (moduleName: string) => {
    setEnabledModules((current) =>
      current.includes(moduleName) ? current.filter((entry) => entry !== moduleName) : [...current, moduleName],
    )
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-[#11100a] px-5 py-8 text-[#f8f5ee] sm:px-8 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <header className="border-4 border-[#f5f22f] bg-[#0f0d07] px-5 py-4 shadow-[10px_10px_0_0_#f5f22f]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#f4ef91]">T4 Canvas</p>
              <h1 className="font-heavy text-4xl leading-none text-[#f5f22f] sm:text-5xl">BRUTALIST OPERATIONS</h1>
            </div>
            <Link
              to="/"
              className="border-2 border-[#f5f22f] bg-[#f5f22f] px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-[#1a1604] transition hover:bg-transparent hover:text-[#f5f22f]"
            >
              Concepts
            </Link>
          </div>
        </header>

        <section className="border-4 border-[#f5f22f] bg-[#14120b] p-6 shadow-[10px_10px_0_0_#f5f22f] lg:p-8">
          <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#ece89b]">Hero Interaction</p>
              <h2 className="mt-3 font-heavy text-5xl leading-[0.86] text-[#fffde4] sm:text-6xl">NO-LIMIT IMAGE PRODUCTION WITH A SINGLE BILL.</h2>
              <p className="mt-4 max-w-xl text-sm text-[#e3ddb5]">
                Stack Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream inside one aggressive studio surface built for high-output teams.
              </p>

              <div className="mt-6 grid gap-2 sm:grid-cols-3">
                {commandModes.map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setModeId(mode.id)}
                    className={`border-2 px-3 py-3 text-left transition ${
                      mode.id === modeId
                        ? 'border-[#f5f22f] bg-[#f5f22f] text-[#191501]'
                        : 'border-[#d4cf6d] bg-transparent text-[#efeaa9] hover:bg-[#2a2716]'
                    }`}
                  >
                    <p className="font-heavy text-lg uppercase">{mode.headline.split(' ')[0]}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.1em]">{mode.signal}</p>
                  </button>
                ))}
              </div>

              <div className="mt-4 border-2 border-[#f0e85f] bg-[#1a170d] p-4">
                <p className="font-heavy text-2xl text-[#fffde4]">{activeMode.headline}</p>
                <p className="mt-2 text-sm text-[#ece5be]">{activeMode.copy}</p>
              </div>
            </div>

            <aside className="border-2 border-[#f0e85f] bg-[#18150c] p-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#ece89b]">Throughput Monitor</p>
              <div className="mt-4 space-y-4 text-sm">
                <div className="border border-[#d9d37a] p-3">
                  <p className="font-mono text-[11px] uppercase text-[#e9e39a]">Queue depth</p>
                  <p className="mt-1 font-heavy text-3xl text-[#fffde6]">247</p>
                </div>
                <div className="border border-[#d9d37a] p-3">
                  <p className="font-mono text-[11px] uppercase text-[#e9e39a]">Render stability</p>
                  <p className="mt-1 font-heavy text-3xl text-[#fffde6]">99.2%</p>
                </div>
                <div className="border border-[#d9d37a] p-3">
                  <p className="font-mono text-[11px] uppercase text-[#e9e39a]">Average completion</p>
                  <p className="mt-1 font-heavy text-3xl text-[#fffde6]">11s</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="border-4 border-[#f5f22f] bg-[#16130b] p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#ece89b]">Throttle Profile</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {throttleProfiles.map((profile) => (
                <button
                  key={profile.id}
                  type="button"
                  onClick={() => setProfileId(profile.id)}
                  className={`border px-3 py-3 text-left transition ${
                    profile.id === profileId
                      ? 'border-[#f5f22f] bg-[#f5f22f] text-[#171300]'
                      : 'border-[#d5cf73] bg-[#19160d] text-[#ebe4a9] hover:bg-[#2b2617]'
                  }`}
                >
                  <p className="font-heavy text-lg uppercase">{profile.name}</p>
                  <p className="mt-1 text-xs">Speed {profile.speed}</p>
                  <p className="text-xs">Quality {profile.quality}</p>
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-[#ebe4b4]">{activeProfile.note}</p>
            <div className="mt-4 space-y-3">
              <div>
                <div className="mb-1 flex justify-between text-xs uppercase tracking-[0.12em] text-[#f2eca2]">
                  <span>Speed</span>
                  <span>{activeProfile.speed}</span>
                </div>
                <div className="h-2 bg-[#383316]">
                  <div className="h-full bg-[#f5f22f]" style={{ width: `${activeProfile.speed}%` }} />
                </div>
              </div>
              <div>
                <div className="mb-1 flex justify-between text-xs uppercase tracking-[0.12em] text-[#f2eca2]">
                  <span>Quality</span>
                  <span>{activeProfile.quality}</span>
                </div>
                <div className="h-2 bg-[#383316]">
                  <div className="h-full bg-[#f5f22f]" style={{ width: `${activeProfile.quality}%` }} />
                </div>
              </div>
            </div>
          </article>

          <article className="border-4 border-[#f5f22f] bg-[#16130b] p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#ece89b]">Stack Inspector</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {modules.map((moduleName) => {
                const active = enabledModules.includes(moduleName)
                return (
                  <button
                    key={moduleName}
                    type="button"
                    onClick={() => toggleModule(moduleName)}
                    className={`border px-3 py-3 text-left text-sm transition ${
                      active
                        ? 'border-[#f5f22f] bg-[#27220d] text-[#fffde6]'
                        : 'border-[#a69f4f] bg-[#1b180d] text-[#d0c991] hover:bg-[#292512]'
                    }`}
                  >
                    <p className="font-semibold uppercase">{moduleName}</p>
                    <p className="mt-1 font-mono text-[10px] tracking-[0.13em]">{active ? 'Enabled' : 'Disabled'}</p>
                  </button>
                )
              })}
            </div>
          </article>
        </section>

        <section className="border-4 border-[#f5f22f] bg-[#131109] p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#ece89b]">Plan Selector</p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {plans.map((plan) => (
              <button
                key={plan.id}
                type="button"
                onClick={() => setPlanId(plan.id)}
                className={`border-2 p-4 text-left transition ${
                  plan.id === planId
                    ? 'border-[#f5f22f] bg-[#f5f22f] text-[#161200]'
                    : 'border-[#afa958] bg-[#1a170e] text-[#e8e2ad] hover:bg-[#2b2617]'
                }`}
              >
                <p className="font-heavy text-2xl uppercase">{plan.title}</p>
                <p className="mt-2 text-3xl font-semibold">{plan.price}</p>
                <p className="mt-2 text-sm">{plan.benefit}</p>
              </button>
            ))}
          </div>

          <div className="mt-5 border-2 border-[#f5f22f] bg-[#0f0d07] p-4">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#ece89b]">Active Plan</p>
            <p className="mt-2 font-heavy text-3xl text-[#f5f22f]">{activePlan.title}</p>
            <p className="mt-1 text-sm text-[#e4ddb2]">{activePlan.benefit}</p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default DesignThree
