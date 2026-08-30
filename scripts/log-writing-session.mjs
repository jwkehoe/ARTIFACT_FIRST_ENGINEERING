import { appendFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "00_CONTROL/time_log.csv";
const HEADER =
  "timestamp_start,timestamp_end,duration_minutes,category,tag,session_id,artifact,notes\n";

function getArg(flag, fallback = "") {
  const index = process.argv.indexOf(flag);
  if (index === -1) return fallback;
  return process.argv[index + 1] ?? fallback;
}

function csvEscape(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll("\"", "\"\"")}"`;
}

function ensureFile() {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  if (!existsSync(OUTPUT_PATH)) writeFileSync(OUTPUT_PATH, HEADER);
}

function main() {
  const start = getArg("--start");
  const end = getArg("--end");
  const category = getArg("--category", "writing");
  const tag = getArg("--tag", "session");
  const sessionId = getArg("--session", new Date().toISOString().slice(0, 10));
  const artifact = getArg("--artifact", "docs/");
  const notes = getArg("--notes", "");

  if (!start || !end) {
    console.error(
      "Usage: node scripts/log-writing-session.mjs --start <iso> --end <iso> [--category writing|editing|research|pm|idle] [--tag slug] [--session id] [--artifact path] [--notes text]"
    );
    process.exit(1);
  }

  const startDate = new Date(start);
  const endDate = new Date(end);

  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
    console.error("Invalid timestamp. Use ISO 8601 values.");
    process.exit(1);
  }

  if (endDate <= startDate) {
    console.error("End time must be after start time.");
    process.exit(1);
  }

  const durationMinutes = ((endDate.getTime() - startDate.getTime()) / 60000).toFixed(1);

  ensureFile();

  const row = [
    start,
    end,
    durationMinutes,
    category,
    tag,
    sessionId,
    artifact,
    notes
  ]
    .map(csvEscape)
    .join(",");

  appendFileSync(OUTPUT_PATH, row + "\n");
  console.log(`Logged ${durationMinutes} minutes to ${OUTPUT_PATH}`);
}

main();
