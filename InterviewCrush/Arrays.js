// RAM is basically an array already.

// Just like with RAM, the elements of an array are numbered. We call that number the index of the
// array element (plural: indices). In this example, each array element's index is the same as its address in RAM.

// But that's not usually true. Suppose another program like Spotify had already stored some information at memory address 2:

// We'd have to start our array below it, for example at memory address 3. So index 0 in our array would be at memory address 3,
// and index 1 would be at memory address 4, etc.:

// Suppose we wanted to get the kombucha count at index 4 in our array.
// How do we figure out what address in memory to go to? Simple math:

// Take the array's starting address (3), add the index we're looking for (4),
// and that's the address of the item we're looking for. 3 + 4 = 7. In general, for getting the nnth item in our array:

// \text{address of nth item in array} =address of nth item in array=
// \text{address of array start} + naddress of array start+n
// This works out nicely because the size of the addressed memory slots and the size of each
// kombucha count are both 1 byte. So a slot in our array corresponds to a slot in RAM.

// But that's not always the case. In fact, it's usually not the case. We usually use 64-bit integers.

// So how do we build an array of 64-bit (8 byte) integers on top of our 8-bit (1 byte) memory slots?

// We simply give each array index 8 address slots instead of 1:

// So we can still use simple math to grab the start of the nthnth item in our array—just gotta throw in some multiplication:

// \text{address of nth item in array} =address of nth item in array=
// \text{address of array start} + (n * \text{size of each item in bytes})address of array start+(n∗size of each item in bytes)
// Don't worry—adding this multiplication doesn't really slow us down. Remember: addition, subtraction, multiplication, and division of
// fixed-width integers takes O(1)O(1) time. So all the math we're using here to get the address of the nnth item in
// the array takes O(1)O(1) time.

// And remember how we said the memory controller has a direct connection to each slot in RAM? That means we can read
//  the stuff at any given memory address in O(1)O(1) time.

// Together, this means looking up the contents of a given array index is O(1)O(1) time.
// This fast lookup capability is the most important property of arrays.

// But the formula we used to get the address of the nnth item in our array only works if:

// Each item in the array is the same size (takes up the same number of bytes).
// The array is uninterrupted (contiguous) in memory. There can't be any gaps in the array...like
// to "skip over" a memory slot Spotify was already using.
// These things make our formula for finding the nnth item work because they make our array predictable.
// We can predict exactly where in memory
// the nnth element of our array will be.

// But they also constrain what kinds of things we can put in an array. Every item has to be the same size.
// And if our array is going to store a lot of stuff, we'll need a bunch of uninterrupted free space in RAM.
// Which gets hard when most of our RAM is already occupied by other programs (like Spotify).

// That's the tradeoff. Arrays have fast lookups (O(1)O(1) time), but each item in the array needs to be the
// same size, and you need a big block of uninterrupted free memory to store the array.

// DYNAMIC ARRAYS
// Let's build a very simple word processor. What data structure should we use to store the text as our user writes it?

// Strings are stored as arrays, right? So we should use an array?

// Here's where that gets tricky: when we allocate an array in a low-level language like C or Java, we have to
//  specify upfront how many indices we want our array to have.

// There's a reason for this—the computer has to reserve space in memory for the array and
// commit to not letting anything else use that space. We can't have some other program overwriting the elements in our array!

// The computer can't reserve all its memory for a single array. So we have to tell it how much to reserve.

// But for our word processor, we don't know ahead of time how long the user's document is going to be! So what can we do?

// Just make an array and program it to resize itself when it runs out of space! This is called a
// dynamic array, and it's built on top of a normal array.

// 1. Make a new, bigger array. Usually twice as big.

// Why not just extend the existing array? Because that memory might already be taken. Say we have Spotify open and it's
// using a handful of memory addresses right after the end of our old array. We'll have to skip that memory and
// reserve the next 20 uninterrupted memory slots for our new array: