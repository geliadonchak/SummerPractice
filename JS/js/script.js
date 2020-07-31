/*var result = 100;

function func(param1,param2) {
	if (param1 == 40) {
		return;
	}

	var result = param1 * param2;
	return result;
	//alert(result);
}

var a  = 10;
var b  = 50;

//func(a,a*b);
//var res = func(a,a+b);
result = func(a,b);

console.log(result);*/

/*var c = 3;

function func(param1,param2) {

	var result = param1 * param2;

	function func2(a) {
		return result * param2 * a * c;
	}

	result = func2(2);
	return result;
}

document.write(func(10,30));*/

/*(function foo(param1,param2) {
	console.log(param1);
}   (10,20));*/


/*function func(x) {
	if (x <= 1) {
		return 1;
	}

	return  x * func(x-1);
}

console.log(func(3));//1*2*3*/

/*var f = function fact(x) {
	if ( x <= 1) {
		return 1;
	}

	return  x * fact(x-1);
};

document.write(f(4));*/

function func() {
    //var result = param1 * param2;
    var result = arguments[1] * arguments[3];
    return result;
}

alert(func(10,20,63,23,25,34,5467,678));