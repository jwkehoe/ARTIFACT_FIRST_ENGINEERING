---
name: start-session
description: Start a paper-writing session in a KEELPAPER project by setting the active session id, artifact, and dominant category.
---

# Start Session

Gives the phrase "start session" real meaning inside a KEELPAPER paper
workspace.

## What to gather first

Before starting, gather:

1. Session id, for example `2026-08-23-morning-paper`
2. Target artifact, for example `docs/paper.md`
3. Dominant category: `writing`, `editing`, `research`, or `pm`
4. Optional short note

## What to do when invoked

1. Confirm the current project is a KEELPAPER-style workspace by checking that `scripts/start-session.mjs` exists.
2. Run:

```bash
node scripts/start-session.mjs --session "<SESSION_ID>" --artifact "<ARTIFACT>" --category "<CATEGORY>" --notes "<NOTES>"
```

3. Report back the started session id, artifact, and category.
4. Remind the user that time rows can now be logged against that active session and that `End Session` will reuse it automatically.

## Guardrails

- Do not invent a session id if the user already provided one.
- Do not overwrite a missing or broken script with an ad hoc substitute; report the problem plainly.
- This skill starts the active session state. It does not log elapsed time by itself.
