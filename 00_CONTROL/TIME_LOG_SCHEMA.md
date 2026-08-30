# Time Log Schema

Defines `00_CONTROL/time_log.csv`, the structured time ledger for paper work
in this repository.

## Purpose

A timestamped, auditable writing log for paper development: drafting, editing,
research review, restructuring, and administrative/project-management work.

Unlike the original transcript-derived `KEEL` workflow, `KEELPAPER` uses a
manual-friendly ledger so the workspace can track writing time directly.

## Categories

- `writing` — drafting or rewriting substantive paper text
- `editing` — cleanup, tightening, restructuring, or copy-editing existing text
- `research` — reading source material, checking evidence, or comparing references
- `pm` — planning, scoping, packaging, naming, or method decisions
- `idle` — optional gap tracking if you choose to log it explicitly

## Columns

| Column | Description |
|---|---|
| `timestamp_start` | ISO 8601 local or UTC timestamp |
| `timestamp_end` | ISO 8601 local or UTC timestamp |
| `duration_minutes` | Decimal minutes, rounded to nearest 0.1 |
| `category` | `writing`, `editing`, `research`, `pm`, or `idle` |
| `tag` | Short slug such as `draft`, `outline`, `citations`, `naming`, `structure` |
| `session_id` | Optional session identifier; use the date or your own session slug if needed |
| `artifact` | Main file or surface worked on |
| `notes` | Short description of what happened |

## Rules

- Log real start and end times.
- Use `writing` when new prose or substantial rewritten prose is produced.
- Use `editing` when the main work is tightening or reorganizing existing prose.
- Use `research` when the dominant effort is evidence lookup or source review.
- Use `pm` when the work is about naming, packaging, sequencing, or scope rather than draft text.
- Keep `notes` concrete enough that you can reconstruct what the time paid for later.

## Regeneration

This file is primary data for `KEELPAPER`, not a generated artifact. Do not
silently rewrite old rows. Add new rows or correct obvious entry mistakes
explicitly.
