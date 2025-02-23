console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
let me = {
  // TODO - add properties here
  firstName: 'Dave',
  lastName: 'Nash',
  hasSiblings: true,
  shoeCount: 14,
  favThreeFoods: ['oysters', 'uni', 'bone marrow']
};
console.log('A little about me:', me);


/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = me.firstName + ' ' + me.lastName; //full name variable defined
console.log(fullName); //log variable
 

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log('first favorite food is:', me.favThreeFoods[0], '& last favorite food is:', me.favThreeFoods[me.favThreeFoods.length-1]);
//Above, simultaneously log both first and last foods in array.

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log('I have ', me.shoeCount, ' pairs of shoes.'); //show shoes
me.shoeCount +=1; //add one to shoes
console.log('I now have ', me.shoeCount, ' pairs of shoes.'); //show new shoes

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'purple'; //adding favorite color to object 'me'
console.log('My favorite color is: ', me.favoriteColor); //logging result

me.favThreeFoods.push('pizza'); //testing expanding food array
console.log('I also really love: ', me.favThreeFoods[me.favThreeFoods.length-1]); //logging result