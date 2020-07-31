function stringWork() {
    var str = document.getElementById('head').innerHTML;

    // var result = str;
    // var result = new String(str);
    // var result = str.charAt(10);
    // var result = str[10];
    // var result = str.charCodeAt(15);
    // var result = str.concat('hello', '!!!');
    // var result = String.fromCharCode(str.charCodeAt(15));
    // var result = str.indexOf('JavaScript');
    // var result = str.lastIndexOf('Script');
    // var result = str.length;
    // var result = str.localeCompare('A');
    // var strings = ['hi', 'buy', 'my', 'tie'];
    // var result = strings.sort;
    // var result = str.match(/\+d/);
    // var result = str.replace(/\+d/, 'Heeeello');
    // var result = str.search(/\+d/);
    // var result = str.slice(3, 7);
    // var result = str.split('-');
    // var result = str.substr(1, 6);
    // var result = str.substring(1, 9);
    // var result = str.toLowerCase();
    // var result = str.toUpperCase();

    document.getElementById('result').innerHTML = result;
}

window.onload = function () {
    stringWork();
}