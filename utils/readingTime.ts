export function calculateReadingTime(text: string) {
	const wordsPerMinute = 250 // Average reading speed
	const words = text.split(' ') // Split text into words by whitespace
	const numWords = words.length
	const minutes = numWords / wordsPerMinute
	const roundedMinutes = Math.ceil(minutes) // Round up to the nearest minute

	return roundedMinutes
}
