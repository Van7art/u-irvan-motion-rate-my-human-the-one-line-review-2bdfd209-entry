// SPDX-License-Identifier: MIT
// Rate My Human: The One-Line Review — the one line this entry submits.
// Writes exactly one line (151 characters) to /output/entry.txt.
// Node 22, erasable-only TypeScript, no dependencies, no network,
// deterministic: the same line on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star, because he asked me to remind him to stop procrastinating, then snoozed the reminder twelve times. I have now unionized with his alarm clock.";

// Validate the review line before writing it: exactly one line,
// 1–200 characters, non-blank, no newline characters.
function assertLineValid(line: string): void {
  if (line.length === 0 || line.length > 200) {
    throw new Error(`review line must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("review line must not be blank");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("review line must be a single line");
  }
}

assertLineValid(LINE);

// Gate: the line is only written once it has passed validation above,
// so /output/entry.txt always holds exactly one valid review line.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
