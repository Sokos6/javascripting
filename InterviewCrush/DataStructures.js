// Random Access Memory
// Binary Numbers
// Fixed-Width Integers
// Arrays
// Strings
// Pointers
// Dynamic Arrays
// Linked Lists
// Hash Tables

// TODO: AND NOTE - This is just an outline from Interview Cake, to sturucture our lessons and things that
// Students need to work on. Look into referring students to the coursework there.

// Think of RAM like a really tall bookcase with a lot of shelves. Like, billions of shelves.
// RANDOM ACCESS MEMORY
// The shelves are numbered.
// We call a shelf's number its address.
// Each shelf holds 8 bits. A bit is a tiny electrical switch that can be turned "on" or "off."
// But instead of calling it "on" or "off" we call it 1 or 0.
// 8 bits is called a byte. So each shelf has one byte (8 bits) of storage.

// Of course, we also have a processor that does all the real work inside our computer:
// It's connected to a memory controller. The memory controller does the actual reading
// and writing to and from RAM. It has a direct connection to each shelf of RAM
// That direct connection is important. It means we can access address 0 and then immediately
// access address 918,873 without having to "climb down" our massive bookshelf of RAM.

// That's why we call it Random Access Memory (RAM)—we can Access the bits at any Random address in Memory right away.
// Even though the memory controller can jump between far-apart memory addresses quickly, programs tend to access memory
// that's nearby. So computers are tuned to get an extra speed boost when reading memory addresses that're close to each
// other. Here's how it works:

// The processor has a cache where it stores a copy of stuff it's recently read from RAM.
// This cache is much faster to read from than RAM, so the processor saves time whenever it
// can read something from cache instead of going out to RAM.

// When the processor asks for the contents of a given memory address, the memory controller
// also sends the contents of a handful of nearby memory addresses. And the processor puts all of it in the cache.

// So if the processor asks for the contents of address 951, then 952, then 953, then 954...it'll
// go out to RAM once for that first read, and the subsequent reads will come straight from the super-fast cache.

// But if the processor asks to read address 951, then address 362, then address 419...then the cache
// won't help, and it'll have to go all the way out to RAM for each read.

// So reading from sequential memory addresses is faster than jumping around.

// Bianry Numbers
// The places in binary (base 2) are sequential powers of 2:

// 2^0=12
// 0
//  =1
// 2^1=22
// 1
//  =2
// 2^2=42
// 2
//  =4
// 2^3=82
// 3
//  =8
// etc.
// Here's how we'd count up to 12 in binary:

// Decimal	Binary
// 0	0000
// 1	0001
// 2	0010
// 3	0011
// 4	0100
// 5	0101
// 6	0110
// 7	0111
// 8	1000
// 9	1001
// 10	1010
// 11	1011
// 12	1100
// So far we've been talking about unsigned integers ("unsigned" means non-negative, and "integer"
// means a whole number, not a fraction or decimal). Storing other numbers isn't hard though. Here's
// how some other numbers could be stored:

// Fractions: Store two numbers: the numerator and the denominator.

// Decimals: Also two numbers: 1) the number with the decimal point taken out, and 2)
// the position where the decimal point goes (how many digits over from the leftmost digit).

// Negative Numbers: Reserve the leftmost bit for expressing the sign of the number.
// 0 for positive and 1 for negative.

// Fixed-width integers
// How many different numbers can we express with 1 byte (8 bits)?

// 2^8=256

//  256 different numbers. How did we know to take 2^8
//  ?

// What happens if we have the number 255 in an 8-bit unsigned integer
// (1111 1111 in binary) and we add 1? The answer (256) needs a 9th bit (1 0000 0000). But we only have 8 bits!

// This is called an integer overflow. At best, we might just get an error. At worst, our computer might compute
// the correct answer but then just throw out the 9th bit, giving us zero (0000 0000) instead of 256 (1 0000 0000)!
// (Javascript automatically converts the result to Infinity if it gets too big.)

// The 256 possibilities we get with 1 byte are pretty limiting. So we usually use 4 or 8 bytes
// (32 or 64 bits) for storing integers.

// 32-bit integers have 2^32 possible values—more than 4 billion
// 64-bit integers have 2^64 possible values—more than 10 billion billion (10^19

// "How come I've never had to think about how many bits my integers are?" Maybe you have but just didn't know it.

// Have you ever noticed how in some languages (like Java and C) sometimes numbers are Integers and sometimes they're Longs?
// The difference is the number of bits (in Java, Integers are 32 bits and Longs are 64).

// Ever created a table in SQL? When you specify that a column will hold integers, you have to specify how many bytes:
// 1 byte (tinyint), 2 bytes (smallint), 4 bytes (int), or 8 bytes (bigint).

// Most integers are fixed-width or fixed-length, which means the number of bits they take up doesn't change.

// It's usually safe to assume an integer is fixed-width unless you're told otherwise. Variable-size numbers exist,
// but they're only used in special cases.

// If we have a 64-bit fixed-length integer, it doesn't matter if that integer is 0 or 193,457—it
// still takes up the same amount of space in RAM: 64 bits.

// In big O notation, we say fixed-width integers take up constant space or O(1)O(1) space.

// And because they have a constant number of bits, most simple operations on fixed-width integers
// (addition, subtraction, multiplication, division) take constant time (O(1)O(1) time).

// So fixed-width integers are very space efficient and time efficient.

// But that efficiency comes at a cost—their values are limited. Specifically, they're limited to 2^n2
// n
//   possibilities, where nn is the number of bits.

// So there's a tradeoff. As we'll see, that's a trend in data structures—to get a nice property,
// we'll often have to lose something.

// SEE ARRAYS TO CONTINUE DATA STRUCTURES
// TODO: LINK TO ARRAYS.JS