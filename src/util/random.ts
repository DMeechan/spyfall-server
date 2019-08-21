import wordlist from "./wordlist";

/**
 * Get a random floating point number between `min` and `max` (inclusively)
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random floating point number
 */
export function getRandomFloat(min: number, max: number): number {
    return (Math.random() * (max - min)) + min;
}

/**
 * Get a random integer between `min` and `max` (inclusively)
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random integer
 */
export function getRandomInt(rawMin: number, rawMax: number): number {
    const min = Math.ceil(rawMin);
    const max = Math.floor(rawMax);
    const difference = max - min;
    return Math.floor(Math.random() * (difference + 1)) + min;
}

/**
 * Get a random boolean value.
 *
 * @return {boolean} a random true/false
 */
export function getRandomBool(): boolean {
    return Math.random() >= 0.5;
}

/**
 * Generate a string of random words using the wordslist.
 *
 * @param numWords number of words to include in the phrase
 */
export function getRandomPhrase(numWords: number): string {
    let phrase = "";

    for (let i = 0; i < numWords; i++) {
        const index = getRandomInt(0, wordlist.length - 1);
        const word = wordlist[index];
        phrase += " " + word;
    }

    return phrase;
}