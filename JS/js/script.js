var a = 10;
var b = 20;

// 1, 2, 3 Infinity -Infinity 'string' => TRUE
// 0 -0 null NaN Undefined => FALSE

var c = 0;
/*
if (((a > b && 'hello' != 'string') || !false) && !(a - 10)) {

}

if (a > 0) {
	if (b < 25) {
		if (c == 0) {
			c = b + a;
			alert(c);
		}
	}
}*/

/*if (a) {

	if (a > 10) {
		alert('a > 10');
	}
	else {
		alert('else');
	}

}*/

/*if (a > 10) {
	console.log('a > 10');
}
else if ( a < 10 ) {
	console.log('a < 10');
}
else if ( a == 0) {
	console.log('a == 0');
}
else {
	console.log('else');
}*/


//alert(c);

/*switch (a + b) {

	case 10:
		alert('hello');
		break;

	case 30:
		alert('20');
		break;

	default:
		document.write('default');
		break;
}*/

/*if ((a + b) === 10) {
	alert('hello');
}
else if ((a + b) === 30) {
	alert('20');
}
else {
	document.write('default');
}*/

/*var count = 0;

while (count < 10) {
	console.log(count);
	count++;
}*/

/*var c = 2;
var i = 0;


do {
	c = c*2;
	i++;
}
while (i < 9);
console.log(c)*/;

/*var c = 2;
var i = 0;

for (;i < 10 ; i++) {
	if (i == 5) {
		continue;
	}
	console.log(i);
}*/

var str = '<table border="1px" width="30%">';

for (var i = 1; i < 10; i++) {
    str += '<tr>';

    for (var j = 1; j < 10; j++) {
        str += '<td>';
        str += i*j;
        str += '</td>';
    }

    str += '</tr>';
}
str += '</table>';

var el = document.getElementById('karkas');
el.innerHTML = el.innerHTML + str;