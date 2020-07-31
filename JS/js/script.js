var arr = [];

var arr2 = [['world',2,3],1,2,3,4,5,6,7,8,9,10];

/*var a = 'script';
var arr3 = [1,2,3,4,5,a,7,8,[1,2,3],10];
var arr4 = [a+10,a-5];*/

/*var arr3 = new Array();
var arr4 = new Array(5);
var arr5 = new Array(1,2,3,4,5,6,7,'test',9,10);*/

var i = 5;
arr2[5] = 'hello';

arr2[10] = 11;
arr2[11] = 12;

//arr2[100] = 100;

/*arr2['hello'] = 'world';
arr2['hello2'] = 'world';
arr2['hello3'] = 'world';*/

//alert(arr2);

var k = Object.keys(arr2);

/*for (var i = 0; i < arr2.length; i++) {
	document.write(arr2[i] + '<br />');
}
arr2.length = 50
alert(arr2[0][0]);
for (var i = 0; i < k.length; i++) {
	document.write(k[i] + '=>' + arr2[k[i]] + '<br />');
}*/

var table = new Array(10);
for (var i = 0; i < table.length; i++) {
    table[i] = new Array(10);
}

for (var row = 0; row < table.length; row++) {
    for (var col = 0; col < table[row].length; col++) {
        table[row][col] = row*col;
    }
}

alert(table[5][6]);