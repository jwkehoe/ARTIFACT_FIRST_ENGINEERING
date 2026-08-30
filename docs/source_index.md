# ARTIFACTFIRST Citable Source Index

## Purpose

This is the citable-source ledger for the ARTIFACTFIRST master paper. Use it
when drafting a factual claim, adding a footnote, checking a citation, or
testing whether a source can carry the claim being made.

This file is not the internal project retrieval map. See
[`SOURCE_DOCUMENT_INDEX.md`](SOURCE_DOCUMENT_INDEX.md) for local working
documents, authority order, and source-packet lookup.

## Citation Rules

- Cite the case study for the founder SaaS build, its chronology, artifacts,
  controls, tests, and bounded time/cost evidence.
- Cite external policy or research for general legal, provider, security,
  coordination, succession, and startup claims.
- Treat Freedom Roads documents and the Sergey interview as **private,
  interview-derived context**. They may shape anonymous proposed-method
  material, but they are not public citations without an explicit release
  decision.
- A source supports only the scope stated in its row. Do not inflate a study of
  CEO succession into a proven claim about CTO succession, or a policy guide
  into legal advice.
- Add a source here before using it for a new material claim in the master.

## Citation Key Format

- `CASE-*` — local case-study evidence
- `POL-*` — policy, law, provider, or security guidance
- `RES-*` — research or peer-reviewed literature
- `WEB-*` — time-sensitive provider/product documentation
- `CTX-*` — private contextual source; not public-citation ready

## A. Case Evidence

| Key | Citation / Link | Source Type | Supports | Citation Boundary | Master Location |
|---|---|---|---|---|---|
| CASE-01 | [Case Study: AI-Accelerated Development of a B2C Outreach SaaS Product](Case%20Study%20AI-Accelerated%20Development%20of%20a%20B2C%20Outreach%20SaaS%20Product.pdf) | Local anonymized evidence digest | Founder SaaS chronology, artifact trail, documented controls and reversals, test/deployment evidence, time-accounting method, and bounded cost model | Not independent third-party validation; does not prove market fit, enterprise scale, or organization-wide governance | Sections 1-15, 22, 25 |
| CASE-02 | [Canonical Master Integration And Operational-Use Correction](../00_CONTROL/DECISION_PATH.md) | Direct operator confirmation recorded 2026-08-30 | Current use of the deployed MVP as the CEO's daily driver and demonstration system | Does not prove external customer adoption, revenue, usage volume, retention, market fit, enterprise scale, or completed security maturity | Abstract, proof register, Sections 1, 9, 11, 25-26 |

## B. Policy, Provider, And Security Sources

| Key | Citation / Link | Source Type | Supports | Citation Boundary | Master Location |
|---|---|---|---|---|---|
| POL-01 | [Federal Trade Commission, *CAN-SPAM Act: A Compliance Guide for Business*](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business) | U.S. government compliance guidance | Commercial-email identification, opt-out, and opt-out-handling expectations | Not a complete legal analysis for every jurisdiction or business model | Section 10A |
| POL-02 | [Google, *Email Sender Guidelines*](https://support.google.com/mail/answer/81126?hl=en) | Provider guidance | Sender authentication and operational sender requirements | Applies to Google's current sender requirements; not a universal deliverability guarantee | Section 10A |
| POL-03 | [Federal Communications Commission, *FCC 24-24*](https://docs.fcc.gov/public/attachments/FCC-24-24A1_Rcd.pdf) | U.S. regulatory order | Consent revocation and reasonable-method expectations for robocalls and robotexts | Not a general rule for all channels or a substitute for counsel | Section 10A |
| POL-04 | [UK Information Commissioner's Office, *PECR Electronic Mail Marketing Rules*](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-direct-marketing-using-electronic-mail/how-do-we-comply-with-the-pecr-electronic-mail-marketing-rules/) | UK regulator guidance | Direct-marketing electronic-mail expectations and withdrawal/opt-out treatment | UK guidance; do not generalize to all jurisdictions | Section 10A |
| POL-05 | [OWASP, *Top 10 for Large Language Model Applications*](https://owasp.org/www-project-top-10-for-large-language-model-applications/) | Security guidance | AI/LLM threat categories including prompt injection, insecure output handling, excessive agency, and related control concerns | Guidance, not proof that a given system was tested or secured | Sections 10A, 23 |

## C. Distributed Delivery, Coordination, And Rework Research

| Key | Citation / Link | Source Type | Supports | Citation Boundary | Master Location |
|---|---|---|---|---|---|
| RES-01 | [Herbsleb and Mockus, *An Empirical Study of Speed and Communication in Globally Distributed Software Development*](https://doi.org/10.1109/TSE.2003.1205177) | IEEE Transactions on Software Engineering, 2003 | Coordination-participant count and its relationship to elapsed time in distributed work | Mechanism evidence; not a universal claim about offshore quality or a fixed multiplier | Section 13 |
| RES-02 | [Begel and Nagappan, *Global Software Development: Who Does It?*](https://www.microsoft.com/en-us/research/publication/global-software-development-who-does-it/) | Microsoft Research / IEEE, 2008 | Coordination and communication difficulty across time zones inside large organizations | Survey evidence; not a direct outsourced-delivery cost study | Section 13 |
| RES-03 | [Nordio et al., *How Do Distribution and Time Zones Affect Software Development?*](https://hdl.handle.net/11311/1159178) | IEEE ICGSE case study, 2011 | Distribution and time-zone effects on communication patterns and reply time | Student-project case study; limited commercial generalizability | Section 13 |
| RES-04 | [Damian et al., *Towards an Understanding of the Causes and Effects of Software Requirements Change: Two Case Studies*](https://link.springer.com/article/10.1007/s00766-012-0149-0) | Requirements Engineering, 2012 | Late requirements change, documentation/architecture rework, and the cost mechanism of ambiguity | Not an offshore study; do not cite it as proof of a universal rework percentage | Section 13 |
| RES-05 | [*Understanding Coordination in Global Software Engineering: A Mixed-Methods Study on the Use of Meetings and Slack*](https://doi.org/10.1016/j.jss.2020.110717) | Journal of Systems and Software, 2020 | Coordination cost, meeting/unscheduled communication burden, and collaboration-tool tradeoffs | Supports the coordination mechanism, not a blanket anti-meeting conclusion | Section 13 |

## D. Founder Transition, Succession, And Startup-Failure Research

| Key | Citation / Link | Source Type | Supports | Citation Boundary | Master Location |
|---|---|---|---|---|---|
| RES-06 | [Chen and Thompson, *New Firm Performance and the Replacement of Founder-CEOs*](https://doi.org/10.1002/sej.1203) | Strategic Entrepreneurship Journal, 2015 | Founder replacement, transition context, selection effects, and the need to avoid simplistic causation claims | CEO evidence, not proof that a non-founder CTO causes failure | Section 16 |
| RES-07 | [Honjo and Kato, *Are Founder-CEOs Resilient to Crises? The Impact of Founder-CEO Succession on New Firm Survival*](https://doi.org/10.1177/02662426211050794) | Small Business Economics, 2022 | Founder succession, resilience, and exit-pattern differences in a bounded national/period context | CEO evidence from a specific context; not a universal succession law | Section 16 |
| RES-08 | [*CEO Succession, Strategic Change, and Post-Succession Performance: A Meta-Analysis*](https://doi.org/10.1016/j.leaqua.2017.03.001) | Leadership Quarterly, 2017 | Succession, strategic change, and transition load across 60 samples | CEO meta-analysis; only adjacent support for CTO-handoff design | Section 16 |
| RES-09 | [Barron, Chulkov, and Waddell, *Top Management Team Turnover, CEO Succession Type, and Strategic Change*](https://doi.org/10.1016/j.jbusres.2010.09.004) | Journal of Business Research, 2011 | The role of broader leadership turnover in transition and strategic-change effects | Top-management/CEO evidence; not direct CTO causality evidence | Section 16 |
| RES-10 | [Giardino, Wang, and Abrahamsson, *Why Early-Stage Software Startups Fail: A Behavioral Framework*](https://link.springer.com/chapter/10.1007/978-3-319-08738-2_3) | Springer, 2014 | Mismatch between strategy, learning, product development, and execution in startup failure patterns | Does not isolate a CTO as the causal variable | Section 16 |
| RES-11 | [Klotins et al., *Software Engineering in Start-Up Companies: An Analysis of 88 Experience Reports*](https://link.springer.com/article/10.1007/s10664-018-9620-y) | Empirical Software Engineering, 2019 | Coupling among requirements, design, quality, vision, and strategy in startup work | Experience-report analysis; not a prescriptive universal lifecycle | Section 16 |
| RES-12 | [*Failure of Tech Startups: A Systematic Literature Review*](https://doi.org/10.1007/978-3-031-30592-4_9) | Springer, 2023 | Organizational, technological, and environmental startup-failure factors | General startup-failure context; not evidence for one company or executive | Section 16 |

## E. Model And Provider Documentation

| Key | Citation / Link | Source Type | Supports | Citation Boundary | Used By |
|---|---|---|---|---|---|
| WEB-01 | [OpenAI API Pricing](https://platform.openai.com/pricing?model=contentfilter-alpha-001) | Official provider pricing | Current API input, cached-input, and output pricing by model and context band | Time-sensitive; record retrieval date and pricing mode | Model Routing and Cost Grid |
| WEB-02 | [OpenAI, *GPT-5.6: Frontier Intelligence That Scales With Your Ambition*](https://openai.com/index/gpt-5-6/) | Official product release | GPT-5.6 family positioning, availability, published evaluation tables, and model-tier descriptions | Provider-reported evaluations; do not treat as independent benchmark proof | Model Routing and Cost Grid |
| WEB-03 | [OpenAI API Docs, *GPT-5.6 Terra*](https://developers.openai.com/api/docs/models/gpt-5.6-terra) | Official model documentation | Terra context window, output limit, pricing, and reasoning-effort support | Time-sensitive product documentation | Model Routing and Cost Grid |
| WEB-04 | [OpenAI API Docs, *GPT-5.6 Luna*](https://developers.openai.com/api/docs/models/gpt-5.6-luna) | Official model documentation | Luna context window, output limit, pricing, and reasoning-effort support | Time-sensitive product documentation | Model Routing and Cost Grid |
| WEB-05 | [OpenAI, *Introducing GPT-5.5*](https://openai.com/index/introducing-gpt-5-5/) | Official product release | GPT-5.5 positioning, published context capacity, pricing, and evaluation claims | Historical release data may be superseded by current provider docs | Model Routing and Cost Grid |
| WEB-06 | [OpenAI API Docs, *GPT-5.4*](https://developers.openai.com/api/docs/models/gpt-5.4) | Official model documentation | GPT-5.4 context window, tool support, and pricing | Time-sensitive product documentation | Model Routing and Cost Grid |

## F. Private Context Sources: Not Public-Citation Ready

| Key | Source | Private Use | Public-Use Boundary |
|---|---|---|---|
| CTX-01 | [Freedom Roads Raw PD](</Users/meat/Documents/CAREER_OS_MARK_3/05_PIPELINE/ACTIVE/FreedomRoads_AI_Solutions_Architect_Governance/RAW_PD.md>) | Defines the role requirements that informed the enterprise overlay | Do not name the employer or use the PD as a public citation without release permission |
| CTX-02 | [Sergey Sergeyev Interview Transcript](</Users/meat/Documents/CAREER_OS_MARK_3/02_INTERVIEW/TRANSCRIPTS/CampingWorld%20-Kennedy/AI%20Enterprise%20Solution%20Architect%20Sergey%20Sergeye/Sergey%20Sergeyev%20AI%20Enterprise%20Solutions%20Architect%20Interview_transcript.txt>) | Captures operating language: evidence pack, invisible architecture, delivery velocity, agent/automation distinction, and ex post facto repair | Use only as anonymized interview-derived context unless explicitly released |
| CTX-03 | [Freedom Roads PD Analysis](</Users/meat/Documents/CAREER_OS_MARK_3/05_PIPELINE/ACTIVE/FreedomRoads_AI_Solutions_Architect_Governance/PD_Analysis.md>) | Maps requirements to evidence and identifies honest gaps | Derived analysis, not an independent source or public citation |
| CTX-04 | [Freedom Roads Resume](</Users/meat/Documents/CAREER_OS_MARK_3/05_PIPELINE/ACTIVE/FreedomRoads_AI_Solutions_Architect_Governance/FreedomRoads_Resume_Kehoe_v1.md>) | First-person evidence inventory and interview-positioning language | Validate a material factual claim against underlying artifacts before public use |

## Citation Coverage And Open Needs

| Claim Area | Current Coverage | Open Need |
|---|---|---|
| Founder SaaS delivery, artifact control, and current internal use | CASE-01 and CASE-02 | More anonymized before/after artifact fragments and quantified usage evidence for book-level proof density |
| Outbound blast-radius controls | POL-01 through POL-05 | Controlled pilot evidence if claiming operational effectiveness at scale |
| Offshore coordination and rework mechanism | RES-01 through RES-05 | Organization-specific data before claiming a local cost multiplier |
| Cold-start CTO and founder-transition risk | RES-06 through RES-12 | Direct CTO-focused studies or multiple documented CTO-transition cases |
| Enterprise AI governance and high-velocity repair | CTX-01 through CTX-04 plus proposed method | A measured multi-initiative pilot; current argument remains proposed/interview-derived |
| Model routing and AI cost | WEB-01 through WEB-06 | Dated provider snapshot and ARTIFACTFIRST telemetry for completed-task cost |

---

**Status:** Citable-source ledger. Revalidate `POL-*` and `WEB-*` sources when
the paper is prepared for publication because policy and provider facts change.

**Recorded:** 2026-08-30
