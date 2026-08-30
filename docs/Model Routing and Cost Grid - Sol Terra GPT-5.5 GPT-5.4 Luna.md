# Model Routing and Cost Grid

## Scope

This document records the working comparison of GPT-5.6 Sol, GPT-5.6 Terra, GPT-5.5, GPT-5.4, and GPT-5.6 Luna for the ARTIFACTFIRST master paper and related writing workflow.

The ranking is operational rather than purely benchmark-based. It considers reasoning quality, long-form synthesis, evidence discipline, speed, cost, and likely human correction burden.

"Katie 5.4" refers to the Kate/Katie collaboration pattern running on GPT-5.4. Katie is the collaboration persona and operating method, not a separate underlying model tier.

## Model Operating Grid

Pricing below is standard API pricing per 1 million tokens. Input cost is the cost of supplying the prompt and source context. Generation cost is the cost of model output, including reasoning and generated text.

| Rank | Model | Input Cost / 1M | Generation Cost / 1M | Context Length | Primary Use In ARTIFACTFIRST |
|---:|---|---:|---:|---:|---|
| 1 | **GPT-5.6 Sol** | **$5.00** | **$30.00** | **1.05M tokens API** | Final adversarial review, thesis testing, evidence-boundary checks, high-consequence architecture, and resolving disagreements |
| 2 | **GPT-5.6 Terra** | **$2.00** | **$12.00** | **1.05M tokens API** | Default model for writing, synthesis, research integration, section architecture, editing, and maintaining the master-paper through-line |
| 3 | **GPT-5.5** | **$5.00** | **$30.00** | **1.05M tokens API; 400K in Codex** | Independent second opinion, long-context comparison, difficult drafting, alternate argument construction, and benchmark/control work |
| 4 | **GPT-5.4 / "Katie 5.4"** | **$2.50** | **$15.00** | **1.05M tokens API; approximately 400K in Codex** | Reliable prior-generation worker, tool use, coding, document work, drafting, and baseline comparison |
| 5 | **GPT-5.6 Luna** | **$1.00** | **$6.00** | **1.05M tokens API** | High-volume bounded work: extraction, copy editing, summaries, tables, citation normalization, tagging, formatting, and mechanical expansion |

The GPT-5.6 model pages list a 1.05 million-token context window for Sol, Terra, and Luna. GPT-5.5 and GPT-5.4 also have 1.05 million-token API context windows, although their Codex availability is described separately with a smaller working context. Product surfaces can impose different practical limits than the API.

## Relative Cost

Using Luna generation cost as 1.0x, the relative output-generation cost is:

| Model | Input Cost Relative To Luna | Generation Cost Relative To Luna | Practical Meaning |
|---|---:|---:|---|
| **Luna** | 1.0x | 1.0x | Cheapest production line |
| **Terra** | 2.0x | 2.0x | Best cost/intelligence center |
| **GPT-5.4** | 2.5x | 2.5x | Older frontier baseline |
| **Sol** | 5.0x | 5.0x | Premium judgment and quality gate |
| **GPT-5.5** | 5.0x | 5.0x | Premium prior-generation alternative |

This is token price, not total task cost. A more expensive model can be cheaper for the completed job if it uses fewer tokens, needs fewer corrections, avoids rework, or reaches a sound answer in fewer turns. A cheap model can become expensive if it produces unsupported prose that must be repaired by a stronger model or by the human author.

## Recommended Routing

| Work Stage | Default Model | Escalate To |
|---|---|---|
| Source extraction and claim inventory | **Luna** | Terra if the source is ambiguous |
| Copy editing and formatting | **Luna** | Terra for voice or argument changes |
| Drafting ordinary paper sections | **Terra** | Sol when the section changes the thesis |
| Cross-domain synthesis | **Terra** | Sol for conflict resolution |
| Evidence and citation review | **Terra** | **Sol** for final challenge |
| Sergey/interview alignment | **Terra** | **Sol** as hostile reader |
| New methodology design | **Terra** | **Sol** for failure-mode analysis |
| Final master-paper review | **Sol** | Human author decision |
| Repetitive transformations across the manuscript | **Luna** | Terra sampling and quality check |
| Independent comparison run | **GPT-5.5** | Sol if the outputs materially disagree |
| Baseline or regression check | **GPT-5.4** | Terra or Sol if quality falls below threshold |

The operating rule is:

> **Terra writes the paper. Sol challenges the paper. Luna moves the paper. GPT-5.5 and GPT-5.4 provide comparison and fallback conditions.**

## Initial Routing Hypothesis

For the current master document, an initial allocation could be:

- **60% Terra** for normal writing and synthesis
- **20% Luna** for bounded mechanical work
- **10% Sol** for challenge, review, and high-consequence reasoning
- **5% GPT-5.5** for independent comparison
- **5% GPT-5.4** for baseline, fallback, and regression testing

These percentages are a starting hypothesis, not a measured result. The paper's telemetry should record actual input tokens, output tokens, elapsed time, accepted text, rejected text, correction rounds, and the model responsible for each artifact. That will show whether Terra is genuinely the economic center or whether a different routing mix produces less total human rework.

## Cost Caveats

- API prices are per 1 million tokens and can change. Recheck the current pricing page before using this grid for a budget or commercial commitment.
- Long-context requests above the provider threshold can receive different rates. A 1.05M context window does not mean that filling the entire window is economically neutral.
- ChatGPT and Codex subscription usage is not identical to direct API billing. Credits, quotas, reasoning effort, tool calls, and product-specific limits affect actual consumption.
- Generation cost is not the same as task cost. Tool calls, retries, context resubmission, cache behavior, elapsed time, and human correction must be included in telemetry.
- The ranking is a routing hypothesis for this paper. It must be validated against the paper's own acceptance rate, correction burden, elapsed time, and evidence-quality checks.

## Sources

- [OpenAI API pricing](https://platform.openai.com/pricing?model=contentfilter-alpha-001)
- [GPT-5.6: Frontier intelligence that scales with your ambition](https://openai.com/index/gpt-5-6/)
- [GPT-5.6 Terra model documentation](https://developers.openai.com/api/docs/models/gpt-5.6-terra)
- [GPT-5.6 Luna model documentation](https://developers.openai.com/api/docs/models/gpt-5.6-luna)
- [Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)
- [GPT-5.4 model documentation](https://developers.openai.com/api/docs/models/gpt-5.4)

---

**Status:** Working routing hypothesis for ARTIFACTFIRST; not yet a measured production evaluation.

**Recorded:** 2026-08-24
