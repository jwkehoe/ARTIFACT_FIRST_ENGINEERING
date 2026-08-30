# ARTIFACTFIRST Vocabulary

## Purpose

This glossary preserves the operating language that gives ARTIFACTFIRST its
meaning. It is not a keyword bank. Each term is a shorthand for a decision,
control, failure mode, or way of working.

### Source Labels

- **[Sergey]** Direct language or a tightly bounded paraphrase from Sergey
  Sergeyev's interview.
- **[ARTIFACTFIRST]** Term defined by this project and its master paper.
- **[Shared]** Language that connects the interview, the source case, and the
  proposed enterprise method.
- **[Project]** Useful project shorthand; do not present it as external
  industry terminology.

## Sergey Sergeyev Operating Vocabulary

### Architecture Evidence Pack [Sergey] [Shared]

A compact, living packet that makes a moving AI solution reviewable without
turning documentation into a separate pre-delivery ceremony. At minimum it
carries the problem and business owner, architecture, data and identity flows,
authorization and entitlements, model and platform choice, cost hypothesis,
failure modes, release criteria, telemetry, rollback or disablement path, and
open decisions with owners.

**Use:** "Build the minimum architecture evidence pack alongside delivery; do
not wait for a perfect diagram before work starts."

### Architecture Is Invisible [Sergey]

Architecture, security, cost, and control concerns should be embedded into the
business conversation, skills, templates, prompts, defaults, implementation,
and release path. It should redirect delivery velocity rather than announce
itself as a separate approval bureaucracy.

**Not:** architecture absent from the work.

### Catch Half A Sentence [Sergey]

The expected pace of a solutions architect in a high-velocity environment:
recognize the likely problem, options, dependencies, and first safe actions
before the business requester has completed a fully formed specification.

**Control:** early action remains reversible until consequence, authority, or
external impact requires stronger evidence.

### Curate The Portfolio [Sergey]

Own the architectural handling of many simultaneous AI initiatives rather than
treating each as a disconnected project. Curation includes classification,
shared-pattern reuse, exception handling, ownership, lifecycle state, and the
decision to promote, constrain, merge, archive, or kill work.

### Delivery Is Number One [Sergey]

The organization values production movement. Architecture must improve the
quality, safety, and recoverability of delivery without becoming a reason for
teams to route around it.

**Implication:** evidence must travel with the work and be proportional to its
consequence.

### Find, Fix, Own [Sergey] [Shared]

The practical role of the architect in a fast-moving, under-governed AI estate:
find the actual state, fix or contain the highest-consequence defect, and own
the resulting decision, evidence, and recovery path. There may be no separate
team that will discover or resolve the architectural problem.

### Moving Car With No Rails [Sergey]

Interview metaphor for delivery already moving quickly toward production while
architecture, governance, and operational controls are incomplete. The term
describes a condition, not an excuse for accepting it.

**Response:** apply ex post facto due diligence, containment, repair, and
evidence capture without assuming a full stop is available.

### Not An Executive Guideline [Sergey]

Agent-versus-automation, model, architecture, and control choices cannot be
solved only by a high-level policy. Architects need to make the determination
in the actual business and technical context.

### Skills Files [Sergey]

Reusable, context-specific instructions and control defaults supplied near the
work. In this setting, skills are a mechanism for making architecture intent
available to developers and business users who are building with AI.

### Traditional Automation Versus AI Agent [Sergey]

An architectural choice, not an executive slogan. Use deterministic automation
when the workflow, rules, inputs, and failure behavior are sufficiently known.
Use an AI agent only when model-based interpretation or planning materially
improves the business outcome and its authority can be bounded, observed, and
reversed.

## ARTIFACTFIRST Core Vocabulary

### Artifact-First Engineering [ARTIFACTFIRST]

A delivery model in which durable, reviewable artifacts control intent,
architecture, decisions, verification, reporting, recovery, and handoff. The
artifact is useful only if it changes a decision, control, or operating action.

### Blast Radius [ARTIFACTFIRST]

The number and consequence of recipients, records, accounts, systems,
permissions, dollars, or reputational surfaces affected by an automated action.
It is not merely an email-volume concept.

### Control Plane [ARTIFACTFIRST]

The set of artifacts and gates that makes intent, authority, risk, verification,
cost, and operating state visible and actionable. It is not a stack of files
for its own sake.

### Design Packet And Roll Forward [ARTIFACTFIRST]

Start a new initiative with the smallest design packet that makes the first
slice buildable: business problem, owner, intended user, first slice, data and
authority boundaries, dependencies, acceptance tests, and explicit non-goals.
Then roll it forward through decisions, as-built changes, tests, releases,
telemetry, risks, and session records. The packet is a living operating record,
not a static upfront specification.

### Eliminate The Scut Work [ARTIFACTFIRST]

Use AI and tooling to eliminate the clerical reconstruction work that usually
follows delivery: collect artifact candidates, maintain links, summarize
sessions and changes, assemble reports, generate and run test harnesses, and
surface missing evidence. Do not use automation to replace human product
judgment, risk acceptance, release authority, or accountability.

### Evidence Boundary [ARTIFACTFIRST]

The explicit limit on what a source or result can support. A claim may be
implemented and measured, documented, modeled, proposed, or interview-derived;
those categories must not be silently merged.

### Ex Post Facto Governance [Shared]

Governance applied to work that has already begun or reached production-facing
momentum. The task is to reconstruct the real state, identify the consequence,
capture the evidence, apply the minimum effective control, and set a promotion,
containment, or retirement path.

### Find, Fix, Prove, Own, Pay Rent [ARTIFACTFIRST] [Shared]

The master operating sequence:

1. **Find** the actual system state and its highest-consequence unknowns.
2. **Fix** or contain the defect, gap, or wrong assumption.
3. **Prove** what changed with tests, observations, records, or bounded evidence.
4. **Own** the decision, risk, and next action through named authority.
5. **Pay rent** by linking cost and operating burden to business value or a
   conscious subsidy decision.

### Gated Success [ARTIFACTFIRST]

A bounded delivery or transition result in which predeclared, weighted gates
have evidence and all critical gates are either passed or carry an explicit,
owned exception. It is not a probability of company survival or a ticket-close
rate.

### Pay Rent [ARTIFACTFIRST]

An AI application, agent, or workflow pays rent when its measurable contribution
exceeds its full carrying cost and risk burden. The calculation includes model
and platform spend, execution time, human intervention, maintenance, support,
incident recovery, and management attention, tied to a business system,
revenue line, or cost center.

### Right-Sized Routing [ARTIFACTFIRST]

Choosing the model, platform, context size, reasoning effort, and control level
that fit the decision's value, uncertainty, and consequence. It rejects both
token minimization as an ideology and token maximization as theatre.

### Slipstreamed Governance [ARTIFACTFIRST] [Shared]

Small, decision-linked controls inserted into the existing delivery loop where
work already changes state: intake, source capture, architecture choice, data
access, test definition, release, telemetry, and retirement. Governance gets
stronger as real consequence increases.

### Two-Speed Control Model [ARTIFACTFIRST]

Exploration moves rapidly inside reversible, bounded conditions. Promotion into
pilot, operation, and scale requires stronger evidence, authorization,
observability, ownership, and disablement controls. Both speeds share one
evidence trail.

## Portfolio And Management Vocabulary

### Chinese-Restaurant Menu / Tee-Shirt Sizing [Project]

A way to make governance selectable at delivery speed. Teams choose a known
control package, such as XS through XL, and add only the controls required by
data sensitivity, external action, autonomy, revenue impact, or regulatory
exposure.

### Effectiveness Ledger [ARTIFACTFIRST]

A portfolio record that connects lifecycle state with token burn, dollar burn,
execution time, execution cost, success or failure, intervention burden,
incident history, model and platform, business system, revenue line or cost
center, and accountable owner.

### Lifecycle Reconciliation [ARTIFACTFIRST]

The act of reconciling gross release claims with real system states: candidate,
pilot, active, dormant, superseded, abandoned, zombie-counted, archived,
retired, or killed. Gross application counts are not evidence of durable use.

### Management Action Menu [ARTIFACTFIRST]

The permitted response to an observed outlier: accept, watch, shape, simplify,
exit, subsidize, require explanation, constrain, reclassify, replatform, pause,
merge, archive, retire, or kill. A metric without a decision right is only a
report.

### Zombie-Counted Inventory [ARTIFACTFIRST]

An application, agent, or workflow that remains in a portfolio total even
though it lacks meaningful current use, accountable ownership, a valid business
tie, or a deliberate lifecycle decision.

## Translation Rules

- Do not call an **architecture evidence pack** "documentation" when the
  intended meaning is a compact operating and release-control object.
- Do not present **invisible architecture** as hidden decision-making. It means
  controls embedded in delivery, with evidence still inspectable afterward.
- Do not use **governance** to mean committee approval. In this project it
  means controls that change a real decision, release, authority, or recovery
  action.
- Do not call every probabilistic workflow an **agent**. The distinction from
  traditional automation is an architecture decision with authority and
  failure-mode consequences.
- Do not use **pay rent** as a slogan. Tie it to measured or explicitly modeled
  contribution and carrying cost.
- Do not promote an interview description of an enterprise environment into a
  measured ARTIFACTFIRST result. Mark it as interview-derived or proposed.

## Source Notes

- Sergey terms derive from the Freedom Roads/Camping World interview transcript
  and must remain anonymized in public-facing ARTIFACTFIRST work unless the
  user explicitly changes that boundary.
- ARTIFACTFIRST terms derive from `docs/Artifact-First Engineering.md`, the
  discussion tracker, and project control artifacts.
- This glossary is a working semantic control. Add terms only when they carry
  a decision, evidence, or operating consequence.
