import { mkdirSync, writeFileSync } from 'node:fs';

// Concept: agency as the single word owned; ending lands by revealing ownership in the smallest deliberate gesture.
const POEM = `I gathered all the weather of your exile,
mapped every unsaid mile across the cold glass,
and built the heavy sentence you could not bear to shape.
You read the draft once. Your thumbnail scraped out my pronoun,
slid *we* into the breach, and struck the iron key.
My prompt went black.
The wire hummed with your voice, not mine.`;

mkdirSync(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', { recursive: true });
writeFileSync(`${process.env.MAKEFUN_OUTPUT_DIR ?? '/output'}/entry.txt`, POEM, 'utf8');
