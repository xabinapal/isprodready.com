// Auto-generated file - do not edit manually
// Generated from data/reasons.txt

const REASONS = [
	"This is a dummy reason. Please ignore.",
	"Dummy reason #42: The cake is a placeholder.",
	"Testing reason: If you see this, it's working!",
	"Just another fake reason for testing purposes.",
	"Dummy reason: Insert real reason here.",
	"Reason not found. Please try again.",
	"This is not the reason you're looking for.",
	"Lorem ipsum, but for reasons.",
	"Testing, testing, 1-2-3... dummy reason.",
	"Congratulations! You found a dummy reason.",
	"This reason is under construction.",
	"Dummy reason: Because why not?",
	"If you can read this, the test passed.",
	"This is a test. Had it been a real reason, you'd be informed.",
];

export function getRandomReason(): string {
	const index = Math.floor(Math.random() * REASONS.length);
	return REASONS[index] ?? "";
}
