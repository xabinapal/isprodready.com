import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

function compileReasons() {
	const dataPath = join(process.cwd(), "data", "reasons.txt");
	const content = readFileSync(dataPath, "utf-8");

	return content
		.split("\n")
		.map((line) => line.trim())
		.filter((line) => line.length > 0);
}

function compileFile(): void {
	const reasons = compileReasons();

	const output = `// Auto-generated file - do not edit manually
// Generated from data/reasons.txt

const REASONS = ${JSON.stringify(reasons, null, "\t")};

export function getRandomReason(): string {
	const index = Math.floor(Math.random() * REASONS.length);
	return REASONS[index] ?? "";
}
`;

	const outputPath = join(process.cwd(), "src", "lib", "reasons.ts");
	writeFileSync(outputPath, output, "utf-8");

	console.log(`Compiled ${reasons.length} reasons`);
	console.log(`Output: ${outputPath}`);
}

compileFile();
