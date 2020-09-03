// Strings
// Okay, let's store some words.

// A series of characters (letters, punctuation, etc.) is called a string.

// We already know one way to store a series of things—arrays. But how can an array store characters instead of numbers?

// Easy. Let's define a mapping between numbers and characters. Let's say "A" is 1 (or 0000 0001 in binary), "B" is 2 
// (or 0000 0010 in binary), etc. Bam. Now we have characters.

// This mapping of numbers to characters is called a character encoding. One common character encoding is "ASCII". 
// Here's how the alphabet is encoded in ASCII:

// A: 01000001S: 01010011k: 01101011
// B: 01000010T: 01010100l: 01101100
// C: 01000011U: 01010101m: 01101101
// D: 01000100V: 01010110n: 01111110
// E: 01000101W: 01010111o: 01101111
// F: 01000110X: 01011000p: 01110000
// G: 01000111Y: 01011001q: 01110001
// H: 01001000Z: 01011010r: 01110010
// I: 01001001a: 01100001s: 01110011
// J: 01001010b: 01100010t: 01110100
// K: 01001011c: 01100011u: 01110101
// L: 01001100d: 01100100v: 01110110
// M: 01001101e: 01100101w: 01110111
// N: 01001110f: 01100110x: 01111000
// O: 01001111g: 01100111y: 01111001
// P: 01010000h: 01101000z: 01111010
// Q: 01010001i: 01101001 
// R: 01010010j: 01101010 
// You get the idea. So since we can express characters as 8-bit integers, we can express strings as arrays of 8-bit characters.

// Three illustrations of the string "NICE": one in binary, one in base 10, and one in ASCII.