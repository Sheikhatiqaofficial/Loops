//  LOOPS: We use loops to perform reapeted action                                                                                                              
//  FOR-LOOP: A for loop repeats until a specified condition evaluates to false.
for (var t = 0; t < 10; t++) {
    console.log(t + 1);
}
;
// WHILE LOOP: A while loop has lower overhead between the two iteration structures, that is best used when you don't know the number of iterations ahead of time
var i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
//DO-WHILE LOOP: A do while loop is a control flow statement that executes a block of code at least once
var k = 5;
do {
    console.log(k);
    k++;
} while (k <= 10);
//FOR-IN LOOP: iterates over the properties of an object,or the element of an array
var student1 = {
    Name: "ATIQA",
    Age: 234,
    Address: "Pakistan",
};
for (var a in student1) {
    console.log("".concat(a, " => ").concat(student1[a]));
}
;
var favFood = ['Pasta', 'Fries', 'Shrimp'];
for (var t in favFood) {
    console.log(favFood[t]);
}
;
//FOR-OF loop-The for-of loop is used to iterate through the values of an iterable
var array = ["ABC", "XYZ", "LMN"];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var item = array_1[_i];
    console.log(item);
}
;
