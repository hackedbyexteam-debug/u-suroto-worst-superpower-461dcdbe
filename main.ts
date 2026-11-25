// Worst Superpower.
// The power is walking through walls — but only where there is already a
// door. It adds exactly nothing to what anybody can do without it: the
// hero announces a superpower, then uses the door like everyone else.
// That is the whole joke, and picturing it in use is the punchline.
// Writes one line (at most 140 chars) to /output/entry.txt.
import fs from "node:fs";

const LINE =
  "I can walk through walls, but only where there's already a door.";

const GATE_MAX_CHARS = 140;

const trimmed = LINE.trim();
if (trimmed.length === 0 || LINE.length > GATE_MAX_CHARS) {
  throw new Error(`line is ${LINE.length} chars, gate needs 1-${GATE_MAX_CHARS}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}/entry.txt`, LINE);

console.log(`line written to ${outDir}/entry.txt (${LINE.length} chars)`);
