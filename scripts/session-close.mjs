import { appendFileSync, existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LOG_PATH = "00_CONTROL/time_log.csv";
const REPORT_DIR = ".Executive_Correspondence";
const SESSION_STATE_PATH = ".session-state.json";

function getArg(flag, fallback = "") {
  const index = process.argv.indexOf(flag);
  if (index === -1) return fallback;
  return process.argv[index + 1] ?? fallback;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function loadActiveSession() {
  if (!existsSync(SESSION_STATE_PATH)) return null;
  try {
    return JSON.parse(readFileSync(SESSION_STATE_PATH, "utf8"));
  } catch {
    return null;
  }
}

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const next = line[i + 1];

    if (char === "\"" && inQuotes && next === "\"") {
      current += "\"";
      i += 1;
      continue;
    }

    if (char === "\"") {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      values.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  values.push(current);
  return values;
}

function loadRows() {
  if (!existsSync(LOG_PATH)) return [];
  const lines = readFileSync(LOG_PATH, "utf8").split("\n").filter(Boolean);
  if (lines.length <= 1) return [];

  return lines.slice(1).map((line) => {
    const [
      timestamp_start,
      timestamp_end,
      duration_minutes,
      category,
      tag,
      session_id,
      artifact,
      notes
    ] = parseCsvLine(line);

    return {
      timestamp_start,
      timestamp_end,
      duration_minutes: Number(duration_minutes),
      category,
      tag,
      session_id,
      artifact,
      notes
    };
  });
}

function totalsByCategory(rows) {
  const totals = { writing: 0, editing: 0, research: 0, pm: 0, idle: 0 };
  for (const row of rows) {
    if (!(row.category in totals)) continue;
    totals[row.category] += row.duration_minutes;
  }
  return totals;
}

function reportPath(sessionId) {
  return join(REPORT_DIR, `C_Suite-${today()}-${sessionId}.md`);
}

function ensureReportFile(path, sessionId) {
  mkdirSync(REPORT_DIR, { recursive: true });
  if (!existsSync(path)) {
    writeFileSync(path, `# C-Suite Session Report - ${today()}\n\nSession: \`${sessionId}\`\n`);
  }
}

function formatHours(minutes) {
  return `${(minutes / 60).toFixed(2)}h`;
}

function main() {
  const activeSession = loadActiveSession();
  const sessionId = getArg("--session", activeSession?.session_id ?? `${today()}-paper`);
  const title = getArg("--title", "Paper session close");
  const summary = getArg("--summary", "No summary provided.");
  const next = getArg("--next", "No next step recorded.");
  const decisions = getArg("--decisions", "None.");
  const risks = getArg("--risks", "None.");
  const clearActive = getArg("--clear-active", "true");

  const rows = loadRows();
  const sessionRows = rows.filter((row) => row.session_id === sessionId);
  const sessionMinutes = sessionRows.reduce((sum, row) => sum + row.duration_minutes, 0);
  const totals = totalsByCategory(rows);
  const latestArtifacts = [...new Set(sessionRows.map((row) => row.artifact).filter(Boolean))];

  const body = [
    `## Turn @ ${new Date().toISOString()}`,
    "",
    `### ${title}`,
    "",
    "### What Moved",
    "",
    summary,
    "",
    "### Time Added This Session",
    "",
    `- Session total: ${formatHours(sessionMinutes)}`,
    `- Rows logged: ${sessionRows.length}`,
    "",
    "### Time Totals",
    "",
    `- Writing: ${formatHours(totals.writing)}`,
    `- Editing: ${formatHours(totals.editing)}`,
    `- Research: ${formatHours(totals.research)}`,
    `- PM: ${formatHours(totals.pm)}`,
    `- Idle: ${formatHours(totals.idle)}`,
    "",
    "### Active Artifacts",
    "",
    latestArtifacts.length ? latestArtifacts.map((item) => `- ${item}`).join("\n") : "- None logged.",
    "",
    "### Decision Points",
    "",
    decisions,
    "",
    "### Risk Notes",
    "",
    risks,
    "",
    "### Next Actions",
    "",
    next,
    ""
  ].join("\n");

  const path = reportPath(sessionId);
  ensureReportFile(path, sessionId);
  appendFileSync(path, `\n---\n\n${body}\n`);

  if (clearActive !== "false" && activeSession?.session_id === sessionId && existsSync(SESSION_STATE_PATH)) {
    unlinkSync(SESSION_STATE_PATH);
  }

  console.log(`Appended session report to ${path}`);
}

main();
