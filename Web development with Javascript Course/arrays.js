var fruits = ["apples", "bananas","pears","grapes","kiwi"];

fruits.push("plum"); // this adds plum to the end of the array 

fruits[7] = "lemon"; // adds a new element to fruits
console.log(fruits[6]) // this would be undefinded since we have left a gap in our array due to setting lemon to 7

console.log(fruits[0]);
fruits[0] = "Mango"; // this will replace element at index 0 in the fruits array (it will overwrite apples as mango)
console.log(fruits[0]);

console.log(fruits);
fruits.pop(); //removes the last element
console.log(fruits);