var arr2 = [10,3,1,2,4,6,2,3,4];

/*if (30 in arr2) {
	alert('true');
}
else {
	alert('FALSE');
}

if (Array.isArray(arr2)) {
	for (var i =0;;) {
	}
}

alert(arr2.join('-'));

arr2.reverse();
arr2.sort(function(a, b) {
	console.log(a + '|' + b);
	return b - a;
});*/

//var arr_res = arr2.concat([10,56,89]);

var arr_res = arr2.slice(-3);

/*alert(arr2.splice(2,0,5,7,9,10));

arr2.push([10,20,30])
alert(arr2.pop());
arr2.unshift([10,20,30]);
arr2.shift();

delete arr2[0];

arr2.forEach(function(v,i,a) {
    a[i] = v + 10 + 'hello';
});

var res = arr2.map(function(x,i,a) {
	return x * x;
});

var res = arr2.filter(function(x, i, a) {
	return x < 3
});

var res = arr2.some(function(x) {
	return x < 5;
});*/


var res = arr2.reduce(function(x,y) {
    return x + y;
}, 0);

/*reduceRight()
indexOf()
lastIndexOf*/

alert(arr2.lastIndexOf(3));

arr2['hello'] = 'world';
for (var key in arr2) {
    document.write(key + '=>' + arr2[key] + '<br />');
}