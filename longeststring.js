function findLongestWord(str) {
	let words = str.split(' ');
	let maxLength = 0;
	for (let i = 0; i < words.length; i++) {
		if (words[i].length > maxLength) {
			maxLength = words[i].length;
		}
	}
	return maxLength;
}
console.log(findLongestWord("You will  most likely Shoot your eye out kid"));
console.log(findLongestWord("Going to be real hard if you use something tooooooooooooooooo long"));