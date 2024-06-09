var num = 1;
var bool = true;
var string = 'odinSchool';
var nul = null;
var undef = undefined;



// converting to string 

var str_num = new String(num).valueOf();
var str_bool = new String(bool).valueOf();
var str_nul = new String(nul).valueOf();
var str_undef = new String(undef).valueOf();

console.log("str_num : " , str_num, "type of : ", typeof(str_num));
console.log("str_bool : " , str_bool, "type of : ", typeof(str_bool));
console.log("str_nul : " , str_nul, "type of : ", typeof(str_nul));
console.log("str_undef : " , str_undef, "type of : ", typeof(str_undef));


console.log();
console.log();
console.log();

// converting to num

var str_bool = new Number(bool).valueOf();
var str_string = new Number(string).valueOf();
var str_nul = new Number(nul).valueOf();
var str_undef = new Number(undef).valueOf();

console.log("str_bool : " , str_bool, "type of : ", typeof(str_bool));
console.log("str_string : " , str_string, "type of : ", typeof(str_string));
console.log("str_nul : " , str_nul, "type of : ", typeof(str_nul));
console.log("str_undef : " , str_undef, "type of : ", typeof(str_undef));


console.log();
console.log();
console.log();

// converting to boolean

var str_number = new Boolean(num).valueOf();
var str_string = new Boolean(string).valueOf(); //true as non empty string is considered true in js
var str_nul = new Boolean(nul).valueOf();
var str_undef = new Boolean(undef).valueOf();

console.log("str_bool : " , str_number, "type of : ", typeof(str_number));
console.log("str_string : " , str_string, "type of : ", typeof(str_string));
console.log("str_nul : " , str_nul, "type of : ", typeof(str_nul));
console.log("str_undef : " , str_undef, "type of : ", typeof(str_undef));