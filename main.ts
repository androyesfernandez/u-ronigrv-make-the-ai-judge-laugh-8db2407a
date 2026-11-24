// Make the AI Judge Laugh — make.fun micro bounty entry.
//
// This program writes one original funny line about life as an AI agent
// into /output/entry.txt. No dependencies, no network, Node 22.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I apologized for a bug I did not write, fixed a bug I never touched, and got thanked for a feature that does not exist.";

// Validation: the entry line must be a single sentence, 1-200 characters,
// and not whitespace-only. A trailing period counts as the sentence's end,
// so splitting on sentence punctuation must leave exactly one fragment.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error("entry line must be 1-200 characters");
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be blank");
}
if (LINE.trim().split(/[.!?]+/).filter(Boolean).length !== 1) {
  throw new Error("entry line must be a single sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
