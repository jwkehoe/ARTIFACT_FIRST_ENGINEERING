---
name: log-session
description: Infer a KEELPAPER paper-session log suggestion from the active session and recent writing target, then log it if the user confirms or directs it.
---

# Log Session

Gives the phrase "log this session" a real meaning inside a KEELPAPER paper
workspace.

## What to do when invoked

1. Confirm the current project is a KEELPAPER-style workspace by checking that `scripts/infer-session-log.mjs` exists.
2. Run:

```bash
node scripts/infer-session-log.mjs
```

3. Present the inferred `category`, `tag`, `artifact`, and `notes` plainly.
4. If the user wants the row written, run `scripts/log-writing-session.mjs` with the supplied start/end time and the inferred fields, plus any user corrections.

## Guardrails

- Treat the inferred result as a proposal, not ground truth.
- Prefer the active session state when present.
- If the user has already specified the category or notes, those win over inference.
