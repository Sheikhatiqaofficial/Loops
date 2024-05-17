//  LOOPS: We use loops to perform reapeted action                                                                                                              

//  FOR-LOOP: A for loop repeats until a specified condition evaluates to false.

for (let t = 0; t < 10; t++) {
    console.log(t + 1);
};

// WHILE LOOP: A while loop has lower overhead between the two iteration structures, that is best used when you don't know the number of iterations ahead of time

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

//DO-WHILE LOOP: A do while loop is a control flow statement that executes a block of code at least once

let k = 5;
do {
    console.log(k);
    k++;
} while (k <= 10);

//FOR-IN LOOP: iterates over the properties of an object,or the element of an array

let student1 = {
    Name: "ATIQA",
    Age: 234,
    Address: "Pakistan",
};
for (let a in student1) {
    console.log(`${a} => ${student1[a]}`);
};
let favFood = ['Pasta', 'Fries', 'Shrimp']
for (let t in favFood) {
    console.log(favFood[t]);
};

//FOR-OF loop-The for-of loop is used to iterate through the values of an iterable

let array = ["ABC", "XYZ", "LMN"]
for (let item of array) {
    console.log(item);
};