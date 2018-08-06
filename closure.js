function makeAdder(x){
	function add(y) {
		return y + x;
	};

	return add;
}
var plusOne = makeAdder (1);
var plusTen = makeAdder(10);

plusOne(3);
plusOne(41);

plusTen(13);