import { existsSync, readFileSync, writeFileSync } from "node:fs";

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

function main() {
  const existing = loadActiveSession();
  const sessionId = getArg("--session", new Date().toISOString().slice(0, 10));
  const artifact = getArg("--artifact", "docs/");
  const category = getArg("--category", "writing");
  const notes = getArg("--notes", "");

  if (existing?.session_id && existing.session_id !== sessionId) {
    console.log(`Replacing active session ${existing.session_id} with ${sessionId}.`);
  }

  const payload = {
    session_id: sessionId,
    artifact,
    category,
    notes,
    started_at: new Date().toISOString()
  };

  writeFileSync(SESSION_STATE_PATH, JSON.stringify(payload, null, 2) + "\n");

  console.log(`Started session ${sessionId}`);
  console.log(`Artifact: ${artifact}`);
  console.log(`Category: ${category}`);
}

main();
