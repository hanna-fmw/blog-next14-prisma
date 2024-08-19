export function calculateReadingTime(text: string) {
	const wordsPerMinute = 250
	const words = text.split(' ')
	const numWords = words.length
	const minutes = numWords / wordsPerMinute
	const roundedMinutes = Math.ceil(minutes)

	return roundedMinutes
}
