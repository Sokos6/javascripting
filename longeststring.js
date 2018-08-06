function findLongestWord(str) {
	var words = str.split(' ');
	var maxLength = 0;
	for (var i = 0; i < words.length; i++) {
		if (words[i].length > maxLength) {
			maxLength = words[i].length;
		}
	}
	return maxLength;
}
console.log(findLongestWord("You will  most likely Shoot your eye out kid"));
console.log(findLongestWord("Going to be real hard if you use something tooooooooooooooooo long"));