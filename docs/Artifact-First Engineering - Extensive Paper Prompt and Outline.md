# ARTIFACTFIRST: Extensive Paper Prompt And Outline

## Drafting Prompt

You are writing a publication-grade, evidence-backed paper from source notes and local project artifacts.

Working title:

**ARTIFACTFIRST**

Subtitle:

**How I Used AI To Build A Production-Minded SaaS Delivery System Without Vibe Coding**

Audience:

A technically serious hiring manager, principal architect, founder, or CTO evaluating whether the author personally designed and operated a real AI-accelerated, production-minded software delivery system.

Primary objective:

Show first-person ownership. The paper must make clear that the author designed, chose, built, measured, documented, corrected, deferred, and governed the system.

Secondary objective:

Show that the method was AI-accelerated but governed, artifact-first, cost-constrained, production-aware, portable, and explicitly non-vibe.

Positioning adjustment:

Do not over-index on defensive hedging. It is enough to state that the system was an MVP and therefore not a mature production business, full enterprise security program, or complete platform. Use that MVP boundary to defuse overreach, then spend the paper's energy on what the method did accomplish: improved engineering judgment, stronger exploration of options, early compliance/control discovery, and a repeatable artifact-first delivery template.

Anonymization rule:

Do not use the product/company name. Refer to it as "the product," "the application," "the SaaS product," "the outreach product," "the project," or "the founder SaaS build." Do not name founders, customers, predecessor project names, domains, or private accounts. Vendor/tool names may be used when they are load-bearing facts about the engineering method, such as Vercel, Neon, Prisma, Clerk, Gmail OAuth, GitHub, Figma, Claude Code, ChatGPT, and Codex.

Tone:

Serious, practical, skeptical of fashion, technically concrete, and written like an operator explaining how a real system was controlled. Avoid generic AI booster language, corporate theater, motivational filler, and vague thought-leadership phrasing.

Voice:

Use first person singular where ownership matters: I designed, I chose, I built, I measured, I documented, I enforced, I deferred, I rejected, I corrected, I tested, I used. Use first person plural only where the team relationship is the subject.

Core thesis:

The primary argument is that artifact-first AI engineering took a business with a ready, IP-rich idea but six months of stagnated execution and gave it wheels: a live, full-feature MVP release in roughly 40 hours of time-in-motion. The productivity gain did not come mainly from writing code faster. It came from turning ambiguity into durable artifacts that controlled the build: PRD, As-Built Annex, decision path, risk register, changelog, time log, executive reports, tests, CI, architecture docs, security/operations docs, and source code.

What to argue:

1. The business already had real IP invested: a baked product idea, founder narrative, workflow logic, schema thinking, and Figma design work.
2. The problem was execution stagnation: six months had produced no usable shipped product.
3. Artifact-first AI engineering converted that stuck state into a live full-feature MVP release in roughly 40 hours of time-in-motion.
4. Artifact-first engineering is a disciplined operating model for AI-assisted delivery.
5. AI was used heavily before, during, and after implementation, but AI was never the authority.
6. Customer-facing AI was deliberately deferred from v1 because the value, cost, margin, portability, and provider-risk case did not justify it yet.
7. The product's delivery system used AI more profitably than the MVP product itself would have.
8. Production-minded architecture was present from the beginning: vendor escape, control plane vs data plane, multitenant safety, tests with code, CI on push, documentation as restartability, C-level reporting, time/cost instrumentation, and regulatory/control discovery before late-stage cleanup.
9. The method improved engineering judgment by forcing explicit option exploration before build decisions hardened.
10. Compliance and provider-policy constraints were found early and built into the stack from the beginning because outbound messaging, suppression, identity, tenant isolation, and provider access all sit inside regulated or policy-constrained surfaces.
11. The method is templatable: capture founder intent, promote it into artifacts, red-team the artifacts, implement in verified slices, log decisions, measure time, report state, and keep compliance/control work inside the build loop.
12. The case can be generalized into an EP methodology: a repeatable Artifact-First Delivery System for turning founder IP into a governed MVP.
13. The work produced the seed of a development efficiency and effectiveness tracking mechanism, not just a narrative time study.
14. The method should include a scorecard for time-in-motion, verified slices, artifact coverage, decision quality, compliance lead time, rework, handoff readiness, and cost efficiency.
15. The method should include a maturity model that distinguishes vibe builds, prompted builds, spec-controlled builds, artifact-first MVPs, measured delivery systems, and governed product factories.
16. The reusable method did not remain only conceptual: two standalone primitives were extracted from the case. KEEL became the reusable project-scaffold template; BLACKBOX became the portable append-only reporting/session-close core.
17. The case supports real MVP delivery and governance claims. The MVP boundary is the main qualifier; keep the paper centered on the engineering method and what it produced.

Required factual material to preserve:

- A prior six-month CTO/founder development route failed to ship usable code or a usable product.
- The founder separately spent roughly 80 hours developing the concept, story, workflow logic, schema thinking, and Figma prototype.
- The paper should frame this as a business with real IP already invested: the idea was ready, baked, and valuable, but it had no execution wheels.
- The primary before/after is six months of stagnated execution to a live full-feature MVP release in roughly 40 hours of time-in-motion.
- The author was brought in on reputation and operated in a founder-facing CTO/advisory role.
- The author captured the founder narrative and Figma walkthrough, including recorded discussion.
- The author used the Figma frames, wireframe PDF, transcripts, and source notes as repo artifacts.
- Claude Code was used as the primary implementation instrument.
- ChatGPT/Codex was used as a second-model review/red-team path.
- The author used AI to convert discovery into PRD material and red-team the output through multiple cycles.
- Explicit build criteria were established before implementation: lean startup economics, portability/vendor escape, production safety, and honesty about whether AI belonged in v1.
- The selected stack included Vercel, Next.js, Neon Postgres, Prisma, Clerk, Gmail OAuth, GitHub, and Figma.
- The stack was chosen pragmatically for speed, startup economics, and portability, not as a sacred or final architecture.
- The system separated control plane concerns from data plane concerns.
- The product was multitenant and handled sensitive outreach data, provider tokens, message bodies, sequence state, suppression state, and audit-relevant actions.
- The tenant isolation posture should be framed as MVP-appropriate: server-resolved company context, `company_id` discipline, real tenant-boundary tests, and a documented hardening path for later enterprise/security pressure.
- Tests were built with code, not deferred as cleanup.
- The test suite ran against a real Neon dev database rather than mocked database behavior.
- CI ran typecheck, lint, tests, and build on push.
- Deployment used Vercel's GitHub integration, with additional post-push verification habits.
- Session-close automation generated time logs and executive reports.
- Time was tracked at minute-level granularity with dev/PM/idle categories.
- The time log was derived from AI coding session transcripts, not hand-estimated after the fact.
- The time-log timing rule must be described: the first 30 minutes of a gap between turns is treated as user think time and not logged; minutes 30-45 are logged once as idle, capped at 15 minutes; no additional idle accrues beyond 45 minutes; active turns are classified as dev or PM based on activity.
- The time-in-motion study should separate seven gates: prior failed route, founder invention, extraction interview, pre-code PM/research, proof-of-concept build, logged PM execution, and logged dev execution.
- A June proof-of-concept session produced a deployed Next.js app shell in about 4 hours and 10 minutes.
- A live prototype was online quickly, and the later MVP window should be described cautiously using the measured/estimated distinction.
- The AI-accelerated development window is best described as roughly 44.7 hours from CTO handoff through measured build state, with about 34.2 hours fully measured from timestamped session transcripts.
- For the main argument, it is acceptable to round this into "roughly 40 hours of time-in-motion" as long as the detailed time-in-motion section explains the measured/estimated gates.
- In the roughly 30 measured hours of sustained July-August dev and PM sessions, the team produced a deployed application, nine real authenticated screens, real Gmail OAuth send integration, tenant isolation checks, a large control-document stack, and 184 commits.
- Work was bursty, not linear. The paper should note that the final three measured build days accounted for roughly 15 of the 25.56 logged dev hours, nearly 60% of measured dev time in the active window.
- The running automated test count reached 170/170 passing at the latest measured point in the case-study evidence.
- The canonical PRD was preserved as original intent rather than overwritten.
- The As-Built Annex recorded implementation divergences explicitly, including spec/as-built/why-this-diverged structure.
- Real corrections and reversals were recorded, including admin access control, generic ESP rejection for customer outreach, permanent no-direct-SMS decision, and reply-not-a-stop-condition correction.
- The admin access correction must be described carefully: company owner/admin role was not equivalent to platform administrator; platform admin access moved to an external `ADMIN_EMAILS` allowlist.
- Customer outreach through mainstream transactional ESPs was investigated and rejected based on provider policies and deliverability concerns.
- The product connects each user's own Gmail mailbox for outreach rather than sending customer outreach from a shared platform domain.
- SMS sending was changed from future provider placeholder to permanent no-direct-SMS posture; SMS steps produce manual tasks the user sends independently.
- AI was used before build to identify likely regulatory regimes, provider-policy constraints, compliance requirements, and control surfaces.
- Compliance and control work was built into the stack from the beginning: suppression, unsubscribe behavior, provider-policy choices, audit logging, breach-response thinking, token handling, tenant-boundary checks, and direct rejection of risky SMS/social/ESP paths.
- The recurring boundary is simple: this was an MVP, not a finished enterprise platform. Use that once, then keep the paper centered on improved judgment, option exploration, compliance-aware architecture, and measured delivery.
- The AI tooling cost was roughly $40/month in flat subscriptions, not metered API billing for the build.
- The production SaaS stack budget was estimated at roughly $81/month floor and roughly $119/month realistic early production posture, excluding consumption-driven costs and payment fees; these numbers should be described as estimates needing re-verification.
- The development-cost analysis should compare the AI-assisted measured execution total against domestic and offshore labor classes by expertise level, using ranges and clear assumptions.
- Domestic comparison figures to preserve from the case-study evidence: AI-assisted CTO measured execution, 34.23 hours; principal/staff engineer estimate, 49-82 hours; senior engineer estimate, 99-197 hours; mid-level engineer estimate, 246-493 hours; entry-level engineer estimate, 575-985 hours.
- Domestic cost model to preserve cautiously: AI-assisted CTO at $140/hr internal equals about $4,792, or at $325/hr consulting equals about $11,125; principal/staff estimate at $140/hr equals about $6,860-$11,480, or at $325/hr equals about $15,925-$26,650; senior estimate at $110/hr equals about $10,890-$21,670, or at $225/hr equals about $22,275-$44,325; mid-level estimate at $85/hr equals about $20,910-$41,905, or at $150/hr equals about $36,900-$73,950; entry-level estimate at $45/hr equals about $25,875-$44,325, or at $100/hr equals about $57,500-$98,500.
- Offshore comparison should be presented as modeled, not measured: base hours adjusted for time-zone productivity loss and rework risk. Preserve the caution that once rework risk is priced as hours, offshore is not automatically cheaper.
- Customer-facing AI was deliberately deferred from v1 because variable API cost, frontier-model dependency, provider access risk, portability, and margin did not justify it.
- Open-weight-first was the preferred future posture if customer-facing AI later becomes justified.
- Future AI capabilities may be credible for help/onboarding first, then inbound response processing and campaign planning if usage data supports them.
- The author also works as a CTO advisor for founder organizations, including 30/60/90 planning, staffing plans, moat framing, and investor brief preparation.
- The broader advisory point: founder organizations often fail when they cold-hire an outsider CTO and expect title gravity to replace trust, operating fit, and technical judgment.
- The extensive paper should introduce a reusable methodology layer, not only describe the case.
- The methodology should be presented as an EP-style Artifact-First Delivery System with phases: Capture, Promote, Challenge, Constrain, Implement, Verify, Instrument, Report, Generalize.
- The paper should define a Development Efficiency And Effectiveness Ledger that tracks both productivity and quality of outcome.
- Efficiency should measure time, cost, throughput, coordination overhead, and delivery velocity.
- Effectiveness should measure verified functionality, artifact coverage, decision traceability, compliance lead time, handoff readiness, and product usefulness.
- The paper should include a maturity model for artifact-first engineering and locate the case as a serious MVP-stage instance rather than a finished product factory.
- The paper should include reusable tracking schemas for work sessions, feature delivery records, and decision records.
- The paper should close with a reusable artifact package for the next founder SaaS build.
- The methodology should include KEEL as the reusable scaffold extracted from the case: numbered control directories, PRD-freeze/as-built-annex pattern, strikethrough closure convention, and BLACKBOX-based session-close wiring.
- The methodology should include BLACKBOX as the portable append-only reporting primitive extracted from the case: project-neutral session reporting, turn-by-turn history, and executive-readable state capture.

Claims to avoid:

- Do not claim the product has proven adoption, revenue, market fit, production scale, enterprise security maturity, SOC 2 readiness, or complete platform maturity.
- Do not claim AI replaced engineering judgment.
- Do not imply customer-facing AI was built into v1.
- Do not imply SMS is sent directly by the product.
- Do not collapse the prior six-month effort, founder invention time, and AI-accelerated execution window into one blended productivity number.
- Do not use exact metrics unless the source supports them. Prefer "roughly," "about," "best read as," and "latest measured point" where appropriate.
- Do not bury the positive thesis under defensive qualifications. Use "MVP" as the main scope boundary, then move on.

Recommended length:

8,000-12,000 words for the full paper. If writing a shorter version, preserve the thesis, evidence spine, deferred product AI argument, control artifacts, compliance-by-design story, time/cost instrumentation, development efficiency/effectiveness ledger, maturity model, templatable method, and founder-CTO advisory dynamics.

Output format:

Markdown. Use numbered sections. Use tables only when they materially improve clarity. No code blocks unless quoting short shell commands or artifact schemas is necessary. Do not include marketing copy. End with "Assumptions And Evidence Boundaries."

## Extensive Paper Outline

## Title

ARTIFACTFIRST

## Subtitle

How I Used AI To Build A Production-Minded SaaS Delivery System Without Vibe Coding

## Abstract

Purpose:

Frame the paper as a first-person operational case study of AI-accelerated SaaS delivery under artifact control.

Must cover:

- The case is an anonymized founder-led B2C outreach SaaS build.
- A prior six-month route failed to produce usable code or a shipped result.
- The founder supplied serious product intent, including roughly 80 hours of concept/story/Figma work.
- The business already had real IP invested: a ready, baked idea with workflow/design substance.
- The author converted a stagnated execution state into a live full-feature MVP release in roughly 40 hours of time-in-motion.
- The author converted founder intent into a controlled delivery system.
- AI was used heavily, but artifacts were the control plane.
- Customer-facing AI was deliberately deferred from v1.
- The method produced measured delivery evidence, tests, documentation, decision control, reporting, compliance-aware architecture, and a repeatable delivery template.

## 1. Introduction: The Problem Was Not Typing Code

Purpose:

Establish the starting condition and why the paper exists.

Key points:

- The project did not begin as a greenfield toy.
- The prior CTO/founder route had burned six months without producing usable code.
- The founder's Figma/story/schema work represented real IP and a ready idea, but it was not executable by itself.
- The business had a baked concept with no wheels.
- The headline transformation is six months of execution stagnation to live full-feature MVP release in roughly 40 hours of time-in-motion.
- The author was brought in on reputation.
- Founder-CTO authority depends on trust, soft power, truth-telling, and visible control.
- The initial task was not "generate an app"; it was "convert intent into a governed delivery system."

Evidence to use:

- Six-month prior effort.
- Roughly 80 founder hours.
- Recorded founder/Figma walkthrough.
- Figma frames and transcripts added as artifacts.

Possible thesis paragraph:

The hard part was not writing React. The hard part was taking a business with a ready idea, real IP invested, and six months of stalled execution, then compressing founder intent, multi-vendor architecture, compliance risk, design intent, deployment constraints, and AI-assisted execution into one operational chain that produced a live full-feature MVP in roughly 40 hours of time-in-motion.

## 2. Definition: Artifact-First Engineering

Purpose:

Define the core concept sharply.

Definition:

Artifact-first engineering is a delivery model where durable project artifacts, not chat threads or developer memory, control scope, architecture, decisions, verification, reporting, and restartability.

Artifacts to name:

- Canonical PRD.
- As-Built Annex.
- Decision path.
- Risk register.
- Changelog.
- Time log.
- C-level reports.
- Production security and operations docs.
- Architecture direction and migration docs.
- Test suite.
- CI workflow.
- Source code.

Arguments:

- Artifacts turn ambiguity into assignable objects.
- Artifacts preserve original intent while allowing implementation reality to diverge honestly.
- Artifacts let an AI agent resume context across sessions.
- Artifacts let a human operator audit what changed, why it changed, and what remains open.
- Artifacts make handoff possible if the CTO disappears or the project changes hands.

Contrast with vibe coding:

- Vibe coding optimizes for local output.
- Artifact-first engineering optimizes for accountable continuity.
- The difference is not whether AI writes code; the difference is whether the system can explain itself under stress.

## 3. Source Capture: From Founder Narrative To Buildable Spec

Purpose:

Show how discovery became a controlled specification pipeline.

Key points:

- The founder had done the concept work.
- The author captured a recorded Figma walkthrough.
- The walkthrough functioned as an extraction interview.
- Figma was treated as design intent, not runtime or source code.
- The transcript, wireframes, and notes became repo artifacts.
- AI was used to synthesize the material into PRD and build criteria.

Evidence to use:

- Recorded planning conversation.
- Figma exported PDF.
- Product docs and PRD.
- June proof-of-concept session.

Operational point:

The source material was not "context" in the vague sense. It was promoted into versioned artifacts that models and humans could both read.

## 4. The Operating Criteria Before Build

Purpose:

Show that architecture decisions were governed by explicit criteria.

Criteria:

- Lean startup economics.
- Vendor lock-in escape.
- Portability to adjacent SaaS patterns.
- Production-minded safety.
- Multitenant risk control.
- Regulatory/control discovery before build hardens.
- Honest answer to whether AI belongs in v1.
- Explicit option exploration before final stack choices.
- Compliance-aware architecture as a design input, not a late review.

Stack decisions:

- Vercel and Next.js for fast deployment and app framework.
- Neon Postgres and Prisma for relational data and migration discipline.
- Clerk for identity.
- Gmail OAuth as the first real outreach provider.
- GitHub as source/work queue/CI anchor.
- Figma as design source of truth.

Important nuance:

The stack was selected pragmatically. The architecture decision was portability plus proof gates, not permanent devotion to one vendor stack.

Engineering-judgment point:

Emphasize that AI improved the quality of engineering judgment because it let the author explore more options faster: provider alternatives, migration paths, compliance constraints, cost implications, auth paths, email-sending models, SMS risk, and future AI posture. The paper should make clear that better judgment came from disciplined option exploration plus human decision authority, not from accepting model output.

## 5. AI Use Pattern: Collaborator, Red Team, And Implementation Engine

Purpose:

Explain how AI was used without mystifying it.

AI roles:

- Discovery synthesis.
- PRD generation.
- Scope contradiction detection.
- Architecture comparison.
- Regulatory/control research.
- Implementation.
- Debugging.
- QA support.
- Test generation/support.
- Documentation.
- C-level reporting.
- Second-model adversarial review.

Critical distinction:

The author used AI as a working instrument, not as an authority.

Human-owned surfaces:

- Product judgment.
- Credential handling.
- Vendor accounts.
- Risk acceptance.
- Final scope decisions.
- Production-impacting approvals.
- What counts as done.

Adversarial method:

- Claude Code as primary implementation path.
- ChatGPT/Codex as second-model review and red-team path.
- Use model disagreement to surface weak assumptions, missing state, and brittle logic.

Boundary:

Avoid anthropomorphic claims. This is a collaboration and control pattern, not a claim about AI agency.

## 6. PRD Discipline: Frozen Intent, Living Reality

Purpose:

Show the PRD/Annex mechanism as a core control.

Key points:

- The canonical PRD captured original intent.
- It was not overwritten to make history look clean.
- The As-Built Annex captured real implementation divergences.
- Divergences used explicit spec/as-built/why structure.
- This created an audit trail for product evolution.

Examples:

- Suppression model changed from separate table to flags on person records.
- Scheduler behavior diverged from near-real-time implication because of actual Vercel Cron constraints.
- Manual trigger surfaces were built to manage cron limitations.
- Real Gmail send replaced prior database-only status flips.
- Reply stop-condition behavior was corrected.
- Admin access control had to distinguish platform admin from company owner.

Argument:

A serious spec is not valuable because it never changes. It is valuable because changes become visible.

Tone instruction:

Present these as evidence of engineering judgment and product learning inside an MVP build. The important claim is that the method made corrections visible and actionable while the system was still cheap to change.

## 7. Decision Log: Reversals As Evidence Of Control

Purpose:

Make the decision path central to the paper's credibility.

Examples to cover:

- Generic ESP for customer outreach rejected after provider-policy and deliverability review.
- User-owned Gmail OAuth path chosen for outreach.
- Direct SMS sending rejected permanently, not merely deferred.
- Social DM automation investigated and ruled out based on platform/API/policy constraints.
- Reply-as-stop-condition corrected.
- Admin access model corrected.
- Platform/vendor choices kept portable.

Framing:

The paper should say: "Corrections are not evidence of failure. Hidden corrections are. Written corrections are evidence that the control system is alive."

## 8. Production Architecture: Control Plane And Data Plane

Purpose:

Show production-minded architecture without overclaiming maturity.

Control plane:

- Authentication.
- Company/workspace context.
- Membership resolution.
- Provider connection lifecycle.
- OAuth.
- Sending limits.
- Suppression policy.
- Audit logs.
- Admin/support access.
- Environment and deployment configuration.

Data plane:

- Leads/people records.
- Templates and snippets.
- Message threads.
- Sequence steps.
- Scheduler due-step processing.
- Approval queue.
- Provider send calls.
- Manual tasks.
- Future retrieval/generation surfaces if AI later enters product.

Why it matters:

- Multitenancy.
- Provider token safety.
- Cross-tenant exposure risk.
- Injection and message-body risk.
- Auditability.
- Future RAG/vector isolation if product AI is later added.

Boundary:

Frame this as MVP-appropriate production-minded architecture. The product used server-resolved company context, `company_id` discipline, tenant-boundary tests, provider-token handling, audit surfaces, and a documented hardening path for later enterprise/security pressure. Do not dwell on missing enterprise controls unless a later paper specifically audits security maturity.

## 9. Testing, CI, And Deployment Verification

Purpose:

Show that speed was constrained by verification.

Evidence:

- Tests built with code.
- Vitest suite runs against real Neon dev database.
- Cross-tenant checks for Person, Template, Snippet, Sequence.
- Sequence-step tests.
- Settings actions.
- Admin dashboard query tests.
- Demo actions.
- Health-status tests.
- Clerk-user purge regression tests.
- Running automated count reached 170/170 passing at latest measured point.
- CI runs typecheck, lint, tests, and build.
- Vercel deploys from GitHub.
- Post-push verification checks actual deployment state.

Argument:

Fast AI-assisted development can create local velocity while quietly growing fragility. Tests keep speed from lying.

MVP boundary:

Say that the test and CI posture was appropriate to a serious MVP and unusually disciplined for a two-person founder build. Do not turn this section into a checklist of unbuilt enterprise controls.

## 10. Compliance And Provider Policy As Build Inputs

Purpose:

Show that regulatory, platform-policy, and control research happened before irreversible product decisions, and that the resulting controls were built into the stack from the beginning.

Areas:

- CAN-SPAM expectations.
- Suppression and unsubscribe behavior.
- TCPA/SMS risk.
- Social platform messaging constraints.
- Gmail OAuth scope and consent burden.
- ESP acceptable-use policies.
- Data breach response.
- Account deletion/export/privacy posture.

Examples:

- Working unsubscribe behavior and suppression enforcement.
- SMS is manual task only.
- Generic ESP outreach rejected.
- Social DM automation ruled out.
- Narrow Gmail OAuth preferred where possible.
- Platform admin access separated from tenant roles.

Core argument:

This is one of the strongest parts of the paper. The product operates near regulated and policy-constrained surfaces: outreach, email, SMS, social messaging, suppression, unsubscribe, provider credentials, and tenant data. The method used AI to accelerate discovery of those constraints and then pushed them into product architecture before the codebase hardened. Do not present it as legal advice or formal compliance certification; present it as compliance-aware engineering from day one.

## 11. Time-In-Motion: Measuring The Claim

Purpose:

Show how the central before/after claim was measured: six months of stagnated execution with real IP already invested, followed by a live full-feature MVP release in roughly 40 hours of time-in-motion.

Recommended section title:

Time-In-Motion Study: What Was Actually Measured

Time categories:

- Prior six-month failed effort: elapsed context, not dense measured work.
- Founder invention: roughly 80 hours, estimated, outside AI-accelerated execution.
- Extraction interview and pre-code PM/research: estimated.
- June proof-of-concept session: about 4 hours 10 minutes, documented.
- Sustained July-August dev/PM sessions: measured from timestamped session transcripts.

Measurement method:

- Explain that `time_log.csv` is derived from session transcripts rather than manually estimated after the fact.
- Explain the gap rule: first 30 minutes between turns treated as user think time and excluded; minutes 30-45 logged as idle once and capped at 15 minutes; no further idle accrues after 45 minutes.
- Explain dev vs PM classification: dev covers code edits, tests, builds, debugging, migrations, and git operations tied to implementation; PM covers scoping, tradeoffs, review, vendor/account guidance, decision-making, and documentation-only decision work.
- Explain that mixed segments are split when activity changes.
- State that the log is an evidence artifact but not omniscient: it misses thinking, account setup, and founder/CTO cognition outside logged sessions.

Seven-gate table to include:

| Gate | What It Captures | Hours / Status | Evidence Strength |
| --- | --- | ---: | --- |
| 1. Aborted prior route | Prior CTO/founder route, roughly six months elapsed, little usable technical output | Calendar elapsed, not hour-denominated | Estimated context, outside AI window |
| 2. Founder invention | Founder concept, story, workflow, schema thinking, and Figma prototype | ~80 hours | Estimated, outside AI window |
| 3. Extraction interview | Recorded handoff walkthrough, prep, call, and surrounding handoff work | ~7 hours | Estimated total; transcript length is factual |
| 4. Pre-code PM/research | Architecture, source-of-truth, vendor, and build-criteria sorting | ~3.5 hours | Estimated |
| 5. Proof-of-concept build | June scaffold/app-shell session | ~4.17 hours | Measured/documented |
| 6. Logged PM execution | Scoping, deciding, reviewing during sustained build | ~4.50 hours | Measured from `time_log.csv` |
| 7. Logged dev execution | Coding, debugging, testing, building during sustained build | ~25.56 hours | Measured from `time_log.csv` |

Key figures:

- The headline business-transformation claim is six months of stagnated execution to live full-feature MVP release in roughly 40 hours of time-in-motion.
- AI-accelerated window best read as roughly 44.7 hours from CTO handoff through measured build state.
- Roughly 34.2 hours fully measured from transcripts.
- Roughly 30 measured hours of sustained July-August dev/PM sessions produced deployed app, nine real authenticated screens, Gmail OAuth send, tenant checks, control docs, and 184 commits.
- Test count reached 170/170 passing at latest measured point.
- Gates 1-2 are real costs but sit outside the AI-accelerated execution window.
- Gates 3-7 are the AI-accelerated window.
- Gates 5-7 are the strongest measured subset.
- The June-to-July calendar gap should be treated as zero project time-in-motion if no project work occurred, not as internal project idle time.

Distribution analysis:

- Include a paragraph explaining that the work was bursty, not smooth.
- Note that the final three measured build days accounted for roughly 15 of 25.56 logged dev hours, nearly 60% of measured dev work in the active window.
- Use this to reject a simplistic "AI writes code at constant velocity" story.
- Explain that the pattern was human-paced burst work: concentrated sessions, real gaps, and high output during controlled loops.

How to write it:

- Lead with the business before/after: ready idea with real IP invested, no execution wheels, then live MVP release.
- Keep estimates separate from measured numbers.
- Do not blend sunk prior effort, founder invention, and AI execution into one misleading total.
- Emphasize the evidence trail, not a universal productivity multiplier.
- Use careful language: "best read as," "roughly," "measured subset," "estimated context," "time-in-motion," and "calendar elapsed."
- State directly that this is not a randomized controlled comparison against a second team building the same product.
- Explain that the shorter phrase "roughly 40 hours" is the paper's executive shorthand, while the detailed table shows the seven-gate measurement model behind it.

## 12. Development Cost By Expertise Level

Purpose:

Estimate what equivalent development effort would cost at different expertise levels, without pretending the comparison is a controlled experiment.

Recommended section title:

Development Cost Study: Expertise, Rework, And Labor Substitution

Core framing:

- This section should price the measured/estimated execution package against plausible labor alternatives.
- The comparison is a model, not a measurement of parallel teams.
- The work package includes implementation plus project-management, governance, testing, documentation, reporting, and compliance-research surfaces.
- The comparison should make clear why lower hourly rate does not automatically mean lower project cost.

Domestic expertise comparison:

Use a table with these columns:

- Operator class.
- Estimated hours to equivalent state.
- Internal hourly rate.
- Internal cost range.
- Consulting hourly rate.
- Consulting cost range.
- Notes / assumptions.

Rows and figures to include:

| Operator Class | Estimated Hours | Internal Rate | Internal Cost | Consulting Rate | Consulting Cost | Notes |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| AI-assisted CTO/operator | 34.23 | $140/hr | ~$4,792 | $325/hr | ~$11,125 | Measured execution baseline; same person owns architecture, build, PM, and governance |
| Principal/staff engineer | 49-82 | $140/hr | ~$6,860-$11,480 | $325/hr | ~$15,925-$26,650 | Strong technical operator; still must absorb product and vendor context |
| Senior engineer | 99-197 | $110/hr | ~$10,890-$21,670 | $225/hr | ~$22,275-$44,325 | Slower on unfamiliar stack and governance surface |
| Mid-level engineer | 246-493 | $85/hr | ~$20,910-$41,905 | $150/hr | ~$36,900-$73,950 | Higher integration and rework risk |
| Entry-level engineer | 575-985 | $45/hr | ~$25,875-$44,325 | $100/hr | ~$57,500-$98,500 | Poor solo fit for multi-vendor production-minded build |

How to explain the domestic model:

- State that the AI-assisted row uses the author's measured execution time and senior/principal-level rate assumptions, because it is the author's own CTO/operator time.
- Explain that the other hour ranges are estimates scaled from the original development-process comparison and later case-study model.
- Emphasize that the low-rate classes become expensive because hours and rework risk dominate the hourly discount.
- Do not imply entry-level or mid-level engineers lack value generally; the point is task fit, not status.

Offshore comparison:

Use a separate table or short subsection.

Required framing:

- Present offshore costs as modeled, not measured.
- State that the case-study model adjusted base hours for time-zone productivity loss and rework risk.
- Preserve the conclusion cautiously: once rework risk is priced as hours, offshore is not automatically cheaper for this kind of ambiguous, multi-vendor, production-minded founder build.
- Avoid making broad claims about offshore talent. The risk is coordination, ambiguity, time zones, rework, and production accountability, not nationality.

Offshore figures to include if space allows:

| Operator Class | Adjusted Hours | Internal Rate | Internal Cost | Consulting Rate | Consulting Cost |
| --- | ---: | ---: | ---: | ---: | ---: |
| Principal/staff offshore | 102-161 | $75/hr | ~$7,672-$12,083 | $174/hr | ~$17,798-$28,032 |
| Senior offshore | 207-387 | $62/hr | ~$12,813-$23,997 | $127/hr | ~$26,246-$49,155 |
| Mid-level offshore | 514-969 | $45/hr | ~$23,109-$43,587 | $79/hr | ~$40,568-$76,519 |
| Entry-level offshore | 1,200-1,935 | $22/hr | ~$26,407-$42,575 | $49/hr | ~$58,815-$94,827 |

Interpretation:

- The expensive part is not typing screens. It is compressing product discovery, architecture judgment, vendor proof, auth, deployment, tenant safety, tests, reporting, and founder decision support.
- AI-assisted artifact-first work substituted for several partially staffed functions: senior implementation, product management, architecture governance, QA discipline, compliance research, and executive reporting.
- This does not prove AI replaces a team; it proves that one controlled operator plus AI can compress a specific founder-stage delivery package.
- Emphasize that the method is reusable: the same prompt/artifact stack can be applied to other founder SaaS builds where the main risks are ambiguity, compliance, vendor choice, and lack of technical operating structure.

Development-cost guardrails:

- Do not claim the comparison is experimentally controlled.
- Do not claim cheaper labor is inherently worse.
- Keep the MVP scope clear, then focus on the engineering economics: fewer handoffs, faster option exploration, tighter verification loops, and less rework.

## 13. Cost Model: AI Tooling, SaaS Stack, And Operating Economics

Purpose:

Show economic discipline beyond labor substitution.

AI tooling:

- Claude Code and ChatGPT/Codex as flat subscription tools.
- Roughly $40/month total.
- No metered API usage for the build process.

SaaS operating cost:

- Production floor estimate around $81/month.
- Realistic early posture around $119/month.
- Excludes consumption-driven costs and payment processing fees.
- Requires re-verification before binding budget decisions.

Labor comparison:

- Cross-reference the development-cost-by-expertise section rather than repeating the full tables.
- State that the labor model and SaaS operating model answer different questions: what it cost to build vs what it may cost to run.

Argument:

Cost discipline is architecture. Vendor choices, AI tooling choices, and staffing assumptions shape what the company can afford to learn.

## 14. Why Customer-Facing AI Was Deferred

Purpose:

Make this a major section, not a footnote.

Core answer:

The application did not need customer-facing foundation-model behavior in v1.

Reasons:

- MVP learning goal was operational workflow, not AI content generation.
- Variable API cost was unacceptable.
- Frontier models were not necessary.
- Provider access and geopolitical risk mattered.
- AI would add margin and portability pressure before product proof.
- Open-weight-first was a better future posture if AI later became justified.

Future AI roadmap:

- Help and onboarding first.
- Inbound response processing next if usage data supports it.
- Campaign planning later if value is proven.

Contrast:

AI was more valuable in the delivery system than in the MVP product.

## 15. Founder-CTO Advisory Dynamics

Purpose:

Connect the case to broader founder advisory value.

Key points:

- Founder organizations often mis-hire CTOs.
- A cold outsider CTO can fail if there is no trust, operating fit, or shared control model.
- The author's value is not only coding; it is shaping what technical leadership is actually needed.
- Founder-facing CTO advisory includes 30/60/90 planning, staffing plans, moat framing, investor brief prep, architecture diligence, and explicit scope boundaries.
- Soft power matters because the author must influence without hiding behind formal authority.

Case connection:

- Brought in on reputation.
- Converted founder intent into a durable operating system.
- Used BLUF reports to keep founder-level state legible.
- Preserved restartability so the company was not hostage to one technical person.
- Built a repeatable advisory/delivery pattern for future founder organizations.

## 16. The Artifact-First Delivery System

Purpose:

Convert the case study into an EP-style methodology that can be reused on future founder SaaS builds.

Core claim:

The case was not only an AI-assisted build. It was the first applied instance of an Artifact-First Delivery System: a repeatable method for converting founder IP into governed MVP execution.

Method phases:

| Phase | Action | Output |
| --- | --- | --- |
| Capture | Record founder/customer/operator intent before code | Transcript, wireframes, source packet |
| Promote | Convert raw narrative into durable control artifacts | PRD, route map, data model, risk register, decision path |
| Challenge | Red-team assumptions, controls, vendors, scope, and compliance exposure | Rejected paths, revised PRD, open decisions |
| Constrain | Lock MVP economics, portability, compliance posture, tenant model, and test expectations | Build criteria and guardrails |
| Implement | Build in small verified slices | Commits, feature records, deployable increments |
| Verify | Run tests, CI, smoke checks, and second-path validation | Passing checks and deployment confirmation |
| Instrument | Track time, cost, commits, issues, tests, decisions, and artifacts | Delivery ledger |
| Report | Produce BLUF-style founder/executive state | Session report, open decisions, risk deltas |
| Generalize | Extract reusable templates and scoring mechanisms | Methodology package |

How to write it:

- Present the method as practical and teachable, not ceremonial.
- Make clear that the point is not adding process weight. The point is reducing founder-stage ambiguity.
- Explain that each phase exists because founder SaaS builds usually fail at handoff, scope, vendor selection, compliance discovery, or restartability.
- Use the case as proof of concept for the method, then generalize carefully.

## 17. Development Efficiency And Effectiveness Ledger

Purpose:

Define a tracking mechanism for development efficiency and effectiveness. This should feel like the operational heart of the EP methodology.

Core distinction:

Efficiency asks: how much delivery did the project produce per unit of time, cost, and coordination?

Effectiveness asks: did that work produce correct, durable, safe, restartable, useful software?

Scorecard dimensions:

| Dimension | Metric | Why It Matters |
| --- | --- | --- |
| Time-in-motion | Dev/PM/idle hours by session | Separates actual work from calendar drift |
| Throughput | Commits, shipped slices, closed issues, shipped screens | Shows delivery volume |
| Verification | Passing tests, test-count growth, CI status, smoke checks | Prevents speed theater |
| Feature completeness | Real workflows vs placeholders | Shows usable MVP surface |
| Rework rate | Reopened issues, reversed decisions, repair commits | Measures quality of first pass |
| Decision quality | Decisions logged, options considered, rationale recorded | Measures engineering judgment |
| Artifact coverage | Required artifacts updated per feature | Measures restartability |
| Compliance lead time | Controls identified before implementation vs after | Shows proactive governance |
| Cost efficiency | Actual hours and modeled labor substitution | Links execution to economics |
| Handoff readiness | Features with docs, tests, and decision refs | Measures company survivability |
| AI leverage | Tasks accelerated by AI and accepted/rejected by humans | Prevents vague "AI helped" claims |

Core argument:

The method did not just track hours. It tracked whether hours became verified software, durable decisions, lower risk, and restartable company knowledge.

How to write it:

- Treat the ledger as a practical operating mechanism, not an academic measurement exercise.
- Explain that a founder does not only need to know "how long did this take?" The founder needs to know whether time became shipping product, resolved decisions, reduced risk, and recoverable company knowledge.
- Tie the ledger directly back to the time log, changelog, decision path, risk register, tests, CI, and session reports.

## 18. Efficiency, Effectiveness, And Judgment Metrics

Purpose:

Define a small dashboard of reusable metrics that could be applied to future builds.

Suggested metrics:

| Metric | Definition |
| --- | --- |
| Time-To-Verified-Slice | Minutes from feature start to code + tests + docs + deploy verification |
| Artifact Coverage Ratio | Required artifacts updated / required artifacts expected |
| Verification Density | Tests added or updated per feature slice |
| Decision Traceability | Major decisions with options + rationale + outcome |
| Option Exploration Ratio | Material options considered per major decision |
| Compliance Lead Time | Controls identified before implementation / total controls identified |
| Rework Ratio | Rework commits / feature commits |
| Handoff Readiness | Features with docs + tests + decision refs / total features |
| AI Leverage Ratio | Estimated human baseline hours / actual AI-assisted hours |
| Cost Avoidance Estimate | Modeled equivalent labor cost - actual measured labor cost |
| MVP Scope Discipline | Deferred features with rationale / total major feature decisions |

Judgment metric emphasis:

The strongest claim is not "AI made coding faster." The stronger claim is that AI made option exploration cheap enough to improve engineering judgment before decisions hardened.

Examples of option exploration:

- Email sending model: shared ESP, per-user Gmail OAuth, mock provider, future Outlook.
- SMS model: direct provider send, placeholder, manual task, permanent no-direct-SMS.
- Product AI posture: v1 AI writing, help/onboarding, inbound response processing, campaign planning, defer from MVP.
- Deployment posture: fast managed deploy, no-code paths, managed backend alternatives, migration path, portability proof gates.

How to write it:

- Avoid inventing one magic score.
- Use a dashboard of operational signals.
- Keep the metric set small enough that a founder or CTO could actually use it.
- Emphasize that the metrics are for steering work, not creating a vanity report.

## 19. Artifact-First Engineering Maturity Model

Purpose:

Give readers a ladder for self-assessment and make the methodology portable.

Maturity model:

| Level | Name | Description |
| ---: | --- | --- |
| 0 | Vibe Build | AI generates output; few durable controls exist |
| 1 | Prompted Build | Some specs exist, but artifacts are not authoritative |
| 2 | Spec-Controlled Build | PRD, issues, and source control guide implementation |
| 3 | Artifact-First MVP | PRD, Annex, decision log, tests, CI, reports, and time logs operate together |
| 4 | Measured Delivery System | Time/cost/effectiveness metrics drive planning and staffing decisions |
| 5 | Governed Product Factory | The method is reusable across products with compliance, portability, and handoff built in |

Case placement:

- Position the case around Level 3 moving into Level 4.
- The MVP had an artifact stack, testing, CI, time logs, decision logs, executive reports, and compliance-aware architecture.
- The next methodology step is making the scorecard and tracking schemas reusable across projects.

Key question for the reader:

Are you using AI to generate code, or are you using AI inside a governed delivery system?

## 20. Reusable Tracking Schemas

Purpose:

Define the practical data structures behind the development efficiency and effectiveness ledger.

Work session record:

```text
work_session
- session_id
- date
- operator
- model_used
- source_artifacts_used
- dev_minutes
- pm_minutes
- idle_minutes
- primary_work_type
- feature_or_decision
- commits
- tests_added
- tests_passed
- issues_opened
- issues_closed
- artifacts_updated
- deployment_verified
- compliance_controls_touched
- decision_status
- rework_created
- rework_resolved
- executive_summary_generated
```

Feature delivery record:

```text
feature_delivery_record
- feature_id
- feature_name
- source_requirement
- decision_log_refs
- risk_refs
- compliance_refs
- implementation_commits
- test_refs
- docs_updated
- ci_status
- deployment_status
- time_dev_minutes
- time_pm_minutes
- estimated_human_baseline_hours
- actual_ai_assisted_hours
- rework_count
- known_mvp_boundary
- handoff_ready
```

Decision record:

```text
decision_record
- decision_id
- decision_name
- options_considered
- selected_option
- rejected_options
- rationale
- compliance_constraints
- cost_constraints
- portability_constraints
- reversibility
- date_decided
- date_revisited
- outcome_status
```

How to write it:

- Present these as proposed methodology artifacts, not artifacts that were all fully implemented during the MVP.
- Explain that the existing time log, decision path, changelog, and reports already contain much of this data.
- Frame the schemas as the next step toward a repeatable EP delivery system.

## 21. Templates For The Next Founder SaaS Build

Purpose:

Close the methodology loop by naming the reusable package this paper can produce.

Template artifacts:

- `KEEL_PROJECT_SCAFFOLD.md`
- `BLACKBOX_REPORTING_CORE.md`
- `ARTIFACT_FIRST_METHOD.md`
- `TIME_IN_MOTION_SCHEMA.md`
- `DELIVERY_SCORECARD_TEMPLATE.csv`
- `DECISION_RECORD_TEMPLATE.md`
- `FEATURE_DELIVERY_RECORD_TEMPLATE.md`
- `COMPLIANCE_DISCOVERY_LOG.md`
- `FOUNDER_HANDOFF_PACKET.md`
- `AI_RED_TEAM_PROTOCOL.md`
- `MVP_BOUNDARY_STATEMENT.md`
- `C_LEVEL_SESSION_REPORT_TEMPLATE.md`

Argument:

This is what makes the paper generative. It does not only describe one project. It births a repeatable delivery method for founder SaaS builds where the main blockers are ambiguity, compliance, vendor decisions, execution discipline, and handoff risk.

## 22. KEEL And BLACKBOX: From Case Study To Reusable Operating System

Purpose:

Show that the case did not merely inspire a methodology. The reusable pieces were extracted into named primitives.

Definitions:

| Primitive | Role | What It Extracts From The Case | Why It Matters |
| --- | --- | --- | --- |
| KEEL | Project scaffold | Numbered control directories, PRD-freeze/as-built-annex pattern, decision and risk structures, closure conventions, and session-close wiring | Turns artifact-first engineering into a repeatable project-start pattern instead of a one-off discipline habit |
| BLACKBOX | Reporting and session-close core | Append-only executive reporting, session-state capture, turn-by-turn history, project-neutral report generation, and evidence preservation | Turns the build record into an auditable operating trace instead of relying on memory, chat scrollback, or heroic recall |

How to explain KEEL:

KEEL is the reusable project scaffold that came out of the case. It preserves the practical skeleton of artifact-first engineering: numbered control directories, frozen source intent, an as-built annex for implementation reality, explicit decisions, visible risk, closure without deletion, session-close reporting, and handoff-ready structure.

In the paper, KEEL should be presented as the answer to a serious question: how do we prevent a successful AI-assisted build from becoming a non-repeatable personal trick? The answer is to extract the skeleton. KEEL is that skeleton.

KEEL's methodological function:

- Creates a default place for intent, evidence, risk, decisions, time, reports, and handoff.
- Prevents source intent from being overwritten by implementation drift.
- Makes divergence visible through the PRD-freeze/as-built-annex pattern.
- Keeps closed decisions and retired risks visible through closure conventions instead of silent deletion.
- Gives new projects a starting control plane before implementation begins.
- Makes the artifact-first method deployable by another team or another project.

How to explain BLACKBOX:

BLACKBOX is the portable append-only reporting core that came out of the case. It captures the reporting/session-close discipline as reusable infrastructure. Its purpose is not decoration. Its purpose is to make work state recoverable, reviewable, and transferable.

In the paper, BLACKBOX should be presented as the answer to a different serious question: how do we stop AI-assisted work from disappearing into chat transcripts and local operator memory? The answer is to write the state down at the boundary of the work session, append rather than overwrite, and make the report independent of one project's private assumptions.

BLACKBOX's methodological function:

- Produces a project-neutral session-close record.
- Preserves turn-by-turn history in an append-only structure.
- Keeps executive-readable status close to the work itself.
- Reduces restart cost after interruption.
- Gives leadership a current state artifact without requiring them to inspect commits, tests, tickets, and chat logs manually.
- Makes the evidence trail portable across future builds.

Why this matters:

KEEL and BLACKBOX convert the case from "a strong one-off delivery" into "a reusable operating system for controlled AI-assisted engineering." KEEL gives the next project a hull. BLACKBOX gives it a flight recorder. Together, they make the methodology less dependent on the original operator's memory and more suitable for advisory work, enterprise pilots, founder handoff, and repeatable EP delivery.

Paper argument:

The strongest claim is not only that the case produced a working MVP. The stronger claim is that the case produced reusable tooling primitives. The project became a seed factory for the method: KEEL captured the project scaffold, BLACKBOX captured the reporting core, and the paper captures the operating theory behind both.

Suggested subsection title options:

- "From Artifact Stack To Reusable Operating System"
- "KEEL And BLACKBOX: The Extracted Method"
- "The Method Became Tooling"
- "From One Build To A Repeatable Control Plane"

## 23. Organizational Adoption And Interview Positioning

Purpose:

Add the enterprise adoption argument. The method should not be framed as a demand that an organization abandon its existing SDLC, governance model, delivery ceremonies, or architecture review process. It should be framed as a thin control and measurement layer that can be slipped into the process already in place.

Core adoption thesis:

Artifact-first engineering can be introduced without organizational theater. It wraps existing intake, architecture, engineering, security, compliance, CI, release, and executive-reporting motions with better artifacts, better measurements, and earlier decision visibility. The method does not ask a team to believe in AI acceleration. It asks the team to measure whether artifact-backed AI work improves cycle time, decision quality, compliance lead time, handoff readiness, and delivery confidence.

Likely executive or hiring-manager concerns:

| Concern | What the leader may be protecting | Process-safe answer | Integration move |
| --- | --- | --- | --- |
| "Will this disrupt how we already build?" | Existing SDLC discipline, release safety, team continuity | The method is an overlay, not a replacement. Existing ceremonies remain intact. | Map artifact-first gates to current intake, design review, sprint planning, PR review, security review, and release approval. |
| "Is this just AI-generated code with better packaging?" | Engineering quality and accountability | No. AI accelerates exploration, drafting, implementation support, and test expansion; human judgment remains the authority. | Require decision records, evidence links, test proof, and named owner approval before promotion. |
| "Will this create governance or compliance exposure?" | Brand, legal, customer trust, and auditability | The case shows the opposite: regulatory constraints were found early and pushed into architecture while the stack was still forming. | Add a compliance discovery log, policy decision register, and review-trigger field to each feature record. |
| "Can this fit enterprise tools?" | Jira, GitHub, CI, security scanners, docs, ticketing, release records | The artifact model is tool-neutral. It can generate or attach records to existing systems. | Start with Markdown/CSV artifacts, then map fields into Jira, GitHub Projects, CI metadata, or internal governance tooling. |
| "How do we know it worked?" | Avoiding productivity theater | Measure time-in-motion, cycle time, rework, defect containment, compliance lead time, decision reversals, and handoff readiness. | Run one pilot in parallel with the existing process and compare before generalizing. |
| "Does this replace teams?" | Organizational trust and role clarity | No. It makes senior judgment more visible and gives junior or cross-functional contributors safer rails. | Position it as an engineering judgment amplifier and onboarding scaffold. |
| "Will this scale beyond a founder-led MVP?" | Repeatability, maintainability, and transferability | The method scales only if the artifact layer survives handoff. That is why the ledger, templates, and maturity model matter. | Define ownership, promotion rules, artifact retention, and reporting cadence before expanding. |

How to slip it into an existing process:

1. Start with a pilot, not a mandate.
2. Choose one bounded initiative with unclear requirements, compliance exposure, or cross-functional ambiguity.
3. Keep the existing delivery process intact.
4. Add artifact-first capture at intake: founder or stakeholder narrative, constraints, risks, compliance triggers, and success definition.
5. Add option exploration before architecture lock-in: at least three viable paths, explicit rejection rationale, reversibility, and cost/risk notes.
6. Add a decision record for each irreversible or expensive choice.
7. Add a feature delivery record for each shipped slice.
8. Add compliance discovery as a first-class log, not an afterthought.
9. Add time-in-motion tracking at the session or phase level.
10. Add a short executive report after each major work session or release candidate.
11. Compare the pilot against normal process metrics before expanding.

Organizational integration plan:

| Period | Objective | Actions | Proof Produced |
| --- | --- | --- | --- |
| Days 0-30 | Observe and map | Learn the current SDLC, architecture review, release process, compliance triggers, toolchain, and reporting expectations. Identify one pilot where ambiguity is slowing execution. | Process map, artifact gap map, candidate pilot, baseline metric list. |
| Days 31-60 | Overlay and instrument | Run artifact-first tracking in parallel with the normal process. Add decision records, compliance discovery, feature delivery records, time-in-motion logs, and session reports. | Pilot ledger, option records, compliance log, first effectiveness dashboard. |
| Days 61-90 | Evaluate and templatize | Compare pilot signals to baseline. Keep what improved throughput, judgment visibility, compliance readiness, and handoff quality. Remove what added ceremony without value. | Adoption recommendation, template package, measurement scorecard, scale/no-scale decision. |

Interview positioning:

The strongest interview framing is not "I built a product fast with AI." That sounds like a coding trick. The stronger framing is:

> I would not arrive and ask the organization to adopt a new religion. I would wrap this around the existing SDLC as a measurement and decision-quality layer, prove it on one constrained initiative, and only scale what improves throughput, risk visibility, compliance readiness, and handoff.

Use this method to answer three implied concerns:

- Process concern: "I can integrate into the way the organization already ships. I am not trying to bulldoze the process."
- Judgment concern: "The method makes engineering judgment more explicit because options, reversals, constraints, and evidence are written down."
- Governance concern: "The method is useful in regulated or policy-sensitive environments because compliance discovery is part of architecture formation, not a late-stage blocker."

How the role fits inside the organization:

The operator using this method should sit close to architecture, AI governance, product intake, and delivery leadership. The role is not only builder and not only advisor. It is a bridge function that converts ambiguous business demand into governed technical execution.

Candidate integration language:

- "I can help the organization turn unclear AI demand into scoped, testable, governable delivery increments."
- "I can make the tradeoffs visible before teams commit to expensive architecture paths."
- "I can help teams use AI without losing accountability for design, compliance, security, or maintainability."
- "I can start by instrumenting one project, not by asking for organizational permission to redesign everything."
- "I can produce executive-readable proof: what changed, what shipped, what risk was retired, what remains unknown, and what should be repeated."

Argument for the paper:

This turns artifact-first engineering from a founder-delivery method into an enterprise adoption method. The same controls that made a stalled MVP executable can also help an organization evaluate AI development work without hype. It gives leadership a way to see whether AI is improving engineering effectiveness, not merely increasing output volume.

## 24. What This Approach Optimized For

Purpose:

Summarize the operational advantages.

Optimized for:

- Controlled speed.
- Founder legibility.
- Restartability.
- Option value.
- Low coordination overhead.
- Evidence-backed delivery claims.
- Vendor escape.
- Honest scope control.
- AI-assisted leverage without AI authority.
- Improved engineering judgment through explicit option exploration.
- Compliance-aware architecture from the beginning.
- A templatable founder-SaaS delivery method.
- Reusable tooling primitives through KEEL and BLACKBOX.

Examples:

- Session-close reporting.
- PRD/Annex split.
- Decision reversals preserved.
- Tests as proof gates.
- CI/deployment verification.
- Cost model.
- No-direct-SMS decision.
- Deferred product AI.
- Compliance controls embedded while building.
- Repeatable prompt/artifact workflow.
- KEEL as scaffold extraction.
- BLACKBOX as portable session/report extraction.

## 25. MVP Scope And Evidence Boundaries

Purpose:

Use the MVP boundary to protect credibility without burying the positive thesis under defensive qualifications.

State briefly:

- This does not prove market fit.
- This does not prove revenue.
- This does not prove production scale.
- This does not prove AI replaced engineering judgment.
- This does not prove any universal productivity multiplier.
- This does not prove the development-cost comparison would hold for every product, team, or stack.
- Some figures are measured; some are estimates.
- This is an MVP case study, not a claim of finished enterprise platform maturity.

Why this section matters:

The paper is stronger when it tells the truth plainly, then returns to the affirmative case. The affirmative case is that the method improved engineering judgment, explored options before lock-in, embedded compliance-aware controls from the beginning, produced a measured MVP, and can be templated for future founder SaaS builds.

## 26. Conclusion

Purpose:

Close on the real thesis.

Conclusion should say:

- The business had a ready idea and real IP invested, but execution was stagnated for six months.
- Artifact-first AI engineering gave that business execution wheels and produced a live full-feature MVP release in roughly 40 hours of time-in-motion.
- The project was built as a governed AI-accelerated delivery system.
- The artifact stack was the control plane.
- AI compressed discovery, implementation, testing, documentation, reporting, and research loops.
- Human judgment remained the authority.
- Customer-facing AI was deferred because the product did not need it yet.
- Compliance constraints were found early and pushed into architecture while the stack was still forming.
- The method is reusable across founder SaaS builds where ambiguity, vendor choice, compliance, cost, and handoff risk are the real blockers.
- KEEL and BLACKBOX show that the case produced reusable scaffolding and reporting primitives, not only a narrative lesson.
- The method produced controlled speed, not theater.

Final sentence option:

Artifact-first engineering is how I made speed accountable.

## Suggested Figures And Tables

Use only if producing a full paper.

Figure 1: Artifact-First Control Stack

Show founder narrative and Figma entering the artifact layer, then PRD/Annex/decision path/risk register/tests/CI controlling implementation and reporting.

Figure 2: Discovery-To-Deployment Loop

Capture -> formalize -> red-team -> implement -> verify -> document -> report -> repeat.

Figure 3: Control Plane vs Data Plane

Separate identity/config/admin/provider/audit surfaces from leads/messages/sequences/tasks/send paths.

Figure 4: Artifact-First Delivery System

Show Capture -> Promote -> Challenge -> Constrain -> Implement -> Verify -> Instrument -> Report -> Generalize.

Figure 5: Efficiency And Effectiveness Ledger

Show inputs from time logs, commits, tests, CI, decisions, risks, artifacts, compliance notes, and reports flowing into a scorecard.

Figure 6: KEEL And BLACKBOX Extraction

Show the case artifact stack producing two reusable primitives: KEEL as the next-project scaffold and BLACKBOX as the append-only reporting/session-close core.

Table 1: Artifact Roles

Columns: artifact, role, why it mattered, example evidence.

Table 2: Measured vs Estimated Time Gates

Columns: gate, description, hours/status, evidence confidence.

Table 3: Time-In-Motion Distribution

Columns: date or phase, dev hours, PM hours, idle hours, commits, interpretation.

Table 4: Domestic Development Cost By Expertise Level

Columns: operator class, estimated hours, internal rate, internal cost, consulting rate, consulting cost, assumptions.

Table 5: Offshore Development Cost By Expertise Level

Columns: operator class, adjusted hours, internal rate, internal cost, consulting rate, consulting cost, model assumptions.

Table 6: AI Use Surfaces

Columns: use surface, model role, human control point, output artifact.

Table 7: Production Controls And Boundaries

Columns: control, implemented state, evidence, limitation.

Table 8: Deferred AI Decision

Columns: proposed AI area, v1 decision, rationale, future trigger.

Table 9: Artifact-First Delivery System Phases

Columns: phase, action, output, evidence from case, reusable template.

Table 10: Development Efficiency And Effectiveness Ledger

Columns: dimension, metric, source artifact, interpretation.

Table 11: Artifact-First Engineering Maturity Model

Columns: level, name, description, case signal, next step.

Table 12: Reusable Tracking Schemas

Columns: schema, purpose, required fields, future automation path.

Table 13: Organizational Adoption Concerns And Integration Moves

Columns: concern, protected interest, process-safe answer, integration move, proof artifact.

Table 14: KEEL And BLACKBOX Method Primitives

Columns: primitive, extracted function, source case evidence, reusable artifact, adoption use.

## Source Packet To Provide The Drafting Model

Use these local artifacts as source context, while preserving anonymization:

- `docs/Artifact-First Engineering.md`
- `docs/Case Study AI-Accelerated Development of a B2C Outreach SaaS Product.pdf`
- the canonical PRD under `01_PRODUCT_REQUIREMENTS/`
- the As-Built Annex under `01_PRODUCT_REQUIREMENTS/`
- `00_CONTROL/DECISION_PATH.md`
- `00_CONTROL/RISK_REGISTER.md`
- `00_CONTROL/time_log.csv`
- `00_CONTROL/TIME_LOG_SCHEMA.md`
- `00_CONTROL/PRODUCTION_BUDGET_ESTIMATE.md`
- `00_CONTROL/reports/C_Suite-2026-08-10-A.md`
- `docs/PRODUCTION_SECURITY_AND_OPERATIONS.md`
- `docs/DEVELOPMENT_PROCESS_NOTES.md`
- `docs/CTO_DEVELOPMENT_APPROACH_ANALYSIS.md`
- `docs/ARCHITECTURE_DIRECTION.md`
- `docs/PORTABLE_DEPLOYMENT_STRATEGY.md`
- `docs/CONTROL_PLANE_SPEC.md`
- `tests/README.md`
- `scripts/build-time-log.ts`
- `scripts/generate-executive-report.ts`
- `scripts/session-close.ts`
- `CHANGELOG.md`
- standalone KEEL scaffold evidence, where available locally
- standalone BLACKBOX reporting-core evidence, where available locally

When writing the paper, remove or generalize private product identifiers from quoted paths if the final output is public-facing.

## Final Quality Bar

Before finalizing, check:

- The product/company name does not appear.
- The paper uses first-person ownership where appropriate.
- The paper does not use generic AI booster language.
- Measured and estimated figures are not blended.
- Product AI deferral is a major argument.
- Production controls are concrete.
- Compliance-by-design is a major argument.
- Improved engineering judgment through option exploration is a major argument.
- The templatable delivery method is explicit.
- The Development Efficiency And Effectiveness Ledger is explicit.
- The methodology phases are explicit.
- The maturity model is included.
- The reusable tracking schemas are included.
- The organizational adoption section shows how the method can enter an existing enterprise process without replacing it.
- KEEL and BLACKBOX are included as extracted reusable primitives, not merely brand names.
- The next-build template package is included.
- MVP is used as the main scope boundary.
- The paper uses MVP as the scope boundary and keeps the positive engineering thesis in the foreground.
- The founder-CTO advisory dynamic is included.
- Claims are bounded to evidence.
- The prose sounds like a real operator wrote it.
