# Risk Register

Last updated: 2026-08-30

Purpose: record the risks most likely to degrade the paper package, its
evidence quality, or its publication credibility.

## Open Risks

| ID | Risk | Why It Matters | Mitigation | Status |
|---|---|---|---|---|
| R-001 | Naming drift across paper surfaces | Mixed titles weaken coherence and create cleanup work later | Keep `ARTIFACTFIRST` as package name and track title decisions in `DECISION_PATH.md` | Open |
| R-002 | Overclaim drift | The paper can accidentally outrun what the evidence supports | Keep claim boundaries explicit; treat MVP limits as real | Open |
| R-003 | Time log underuse | A schema without actual rows becomes theater | Log writing sessions as they happen; use session-close reporting | Open |
| R-004 | Source/path drift | Old project references can survive in links or prose | Periodic `rg` sweeps before publication | Open |
| R-005 | Chat-memory dependence | Decisions can vanish into conversation history | Record meaningful choices in control docs and session reports | Open |
| R-006 | Operational-use claim lacks quantified usage evidence | CEO daily-driver and demonstration use is confirmed, but frequency, duration, workflow coverage, and outcomes are not yet captured in the paper packet | Add an anonymized dated usage record or operator attestation before external publication | Open |
| R-007 | Basin/publication confusion | A 34,000-word authority document can be mistaken for the final reader-facing paper | Keep the basin canonical; derive and separately review the public paper rather than cutting the master in place | Open |
| R-008 | Time-sensitive citation drift | Provider rules, model pricing, and policy guidance can change after drafting | Revalidate `POL-*` and `WEB-*` sources at publication lock | Open |

## Closure Convention

When a risk is no longer active, keep the row and mark the `Status` as
`Closed YYYY-MM-DD` rather than deleting it.
