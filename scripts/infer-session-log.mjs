import { existsSync, readFileSync } from "node:fs";

const SESSION_STATE_PATH = ".session-state.json";

function getArg(flag, fallback = "") {
  const index = process.argv.indexOf(flag);
  if (index === -1) return fallback;
  return process.argv[index + 1] ?? fallback;
}

function loadActiveSession() {
  if (!existsSync(SESSION_STATE_PATH)) return null;
  try {
    return JSON.parse(readFileSync(SESSION_STATE_PATH, "utf8"));
  } catch {
    return null;
  }
}

function inferTag(category, artifact) {
  const lower = artifact.toLowerCase();
  if (category === "research") return "research";
  if (category === "pm") return "planning";
  if (category === "editing") return "edit";
  if (lower.includes("discussion tracker")) return "tracker";
  if (lower.includes("outline")) return "outline";
  return "draft";
}

function inferNotes(category, artifact, activeNotes) {
  if (activeNotes) return activeNotes;
  const file = artifact.split("/").pop() || artifact;

  if (category === "writing") return `Worked on ${file}`;
  if (category === "editing") return `Edited ${file}`;
  if (category === "research") return `Reviewed sources and evidence for ${file}`;
  if (category === "pm") return `Planned and structured work for ${file}`;
  return `Worked on ${file}`;
}

function main() {
  const active = loadActiveSession();
  const category = getArg("--category", active?.category ?? "writing");
  const artifact = getArg("--artifact", active?.artifact ?? "docs/");
  const sessionId = getArg("--session", active?.session_id ?? new Date().toISOString().slice(0, 10));
  const notes = getArg("--notes", inferNotes(category, artifact, active?.notes ?? ""));
  const tag = getArg("--tag", inferTag(category, artifact));

  const result = {
    session_id: sessionId,
    artifact,
    category,
    tag,
    notes,
    started_at: active?.started_at ?? null
  };

  console.log(JSON.stringify(result, null, 2));
}

main();
