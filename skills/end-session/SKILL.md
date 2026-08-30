---
name: end-session
description: End a paper-writing session in a KEELPAPER project by appending the BLACKBOX-style close report for the active session.
---

# End Session

Gives the phrase "end session" real meaning inside a KEELPAPER paper
workspace.

## What to gather first

Before closing, gather:

1. Session close title
2. Short summary of what moved
3. Next action
4. Any meaningful decisions
5. Any still-open risks

If the user does not provide a session id, use the active session from
`.session-state.json` if present.

## What to do when invoked

1. Confirm the current project is a KEELPAPER-style workspace by checking that `scripts/session-close.mjs` exists.
2. Run:

```bash
node scripts/session-close.mjs --title "<TITLE>" --summary "<SUMMARY>" --next "<NEXT>" --decisions "<DECISIONS>" --risks "<RISKS>"
```

Add `--session "<SESSION_ID>"` only if the user explicitly wants to override the active session.

3. Report back the report path that was updated.
4. Remind the user that elapsed work should be logged with `log-writing-session.mjs` before `End Session`, or the totals for that close entry will be stale.

## Guardrails

- Do not fabricate summary, decisions, or risks if the user has not supplied enough to write them credibly.
- Do not delete prior report entries; BLACKBOX is append-only.
- Do not assume time was logged already; mention that dependency plainly if it is uncertain.
