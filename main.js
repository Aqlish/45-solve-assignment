// lower case ;
var personName = "Aqsa khan";
console.log("lowercase", personName.tolowerCase, {});
// upper case
console.log("uppercase:", personName.tolowerCase, {});
// Title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
