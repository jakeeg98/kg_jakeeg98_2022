var myArgs = process.argv.slice(2);

var pairs = {"0": "Zero", "1" : "One", "2" : "Two", "3" : "Three", "4" : "Four", "5" : "Five", "6" : "Six", "7" : "Seven",
"8" : "Eight", "9" : "Nine"};

myArgs.map(String);

var arrOut = [];

for(var i = 0; i < myArgs.length; i++){
    var str = "";
    for(var j = 0; j < myArgs[i].length; j++){
        str += pairs[myArgs[i][j]];
    }
    arrOut.push(str);
}

console.log(arrOut.toString());





