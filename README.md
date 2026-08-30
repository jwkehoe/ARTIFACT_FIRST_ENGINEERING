# ARTIFACTFIRST

Paper workspace for the `ARTIFACTFIRST` writing package.

This repo uses a lean `KEELPAPER` scaffold: a paper-adapted version of the
`KEEL` + `BLACKBOX` pattern. The goal is not product-build ceremony. The goal
is controlled writing: visible decisions, visible risks, append-only session
reports, and a durable time log for paper work.

## Working Surfaces

- `docs/` — draft and supporting paper materials
- `00_CONTROL/` — decisions, risks, time-log schema, project index
- `.Executive_Correspondence/` — append-only session reports
- `scripts/` — writing-session logging and session-close reporting helpers
- `skills/` — Claude-style Start Session and End Session wrappers

## Time Tracking

Use the `time_log.csv` ledger plus the helper scripts:

- `node scripts/start-session.mjs --session ... --artifact ...`
- `node scripts/infer-session-log.mjs`
- `node scripts/log-writing-session.mjs --start ... --end ... --category writing --tag draft --notes "..."`
- `node scripts/session-close.mjs --title "..." --summary "..." --next "..." --decisions "..." --risks "..."`

This is a manual-friendly adaptation of `BLACKBOX`. The original pattern was
Claude-skill oriented and transcript-derived. `KEELPAPER` keeps the control
discipline while making the workflow usable in this paper workspace directly.

## Session Workflow

Use one stable session id for one writing block, for example
`2026-08-23-artifactfirst-paper`.

### Start a session

At the beginning of the block, decide:

- session id
- target artifact
- dominant category: `writing`, `editing`, `research`, or `pm`

Example:

```bash
node scripts/start-session.mjs \
  --session 2026-08-23-artifactfirst-paper \
  --artifact "docs/Artifact-First Engineering.md" \
  --category writing \
  --notes "Drafting the next section"
```

This writes `.session-state.json`, which `End Session` can reuse automatically.

### Stop a session

At the end of the block, first log the elapsed time, then append the
BLACKBOX-style session report.

```bash
node scripts/log-writing-session.mjs \
  --start 2026-08-23T09:00:00-05:00 \
  --end 2026-08-23T10:30:00-05:00 \
  --category writing \
  --tag draft \
  --session 2026-08-23-artifactfirst-paper \
  --artifact "docs/Artifact-First Engineering.md" \
  --notes "Drafted introduction and abstract"
```

```bash
node scripts/session-close.mjs \
  --title "Morning writing block" \
  --summary "Drafted introduction and abstract." \
  --next "Continue section 2 and tighten claims." \
  --decisions "Record the naming or packaging decisions that mattered this session." \
  --risks "Record the main risk still active at the end of the block."
```

### Rule of use

- One writing block can have one or many logged rows.
- Close the session after the last row for that block.
- Reuse the same `--session` value across those rows so the report totals line up.
- If `.session-state.json` exists, `session-close.mjs` will use it as the default active session.

## Inference

If you want a suggested log payload instead of filling fields manually, run:

```bash
node scripts/infer-session-log.mjs
```

It will infer `session_id`, `artifact`, `category`, `tag`, and `notes` from the
active session state. You can override any field with flags like
`--category editing` or `--notes "Tightened section 3"`.
