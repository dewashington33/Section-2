// forEach Method ****************************
//const numbers = [1, 2, 3, 4, 5]
// // Old way
// function print(element) {
//     console.log(element);
// }

// numbers.forEach(print)

// // Newer way not involving functions
// for (let element of numbers) {
//     console.log(element);
// }
// // // Common Way
// numbers.forEach(function (element) {
//     console.log(element);
// })

// // Even numbers
// numbers.forEach(function (element) {
//     if (element % 2 === 0) {
//         console.log(element)
//     }
// })

// // Movies Array of objects
// const movies = [
//     {
//         title: 'Amadeaus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ]

// // movies.forEach(function (movie) {
// //     console.log(`${movie.title} - ${movie.score}/100`)
// // })

// //Map method *************************************
// // Upper case everything and return a new array
// const texts = ['rofl', 'lol', 'omg', 'ttyl']
// const caps = texts.map(function (t) {
//     return t.toUpperCase();
// })

// console.log(caps)

// // Double every number in the array
// const numbers = [1, 2, 3, 4, 5]
// const doubled = numbers.map(function (n) {
//     return n * 2
// })

// console.log(doubled)

// const title = movies.map(function (movie) {
//     return movie.title;
// })

// console.log(title);

// const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

// // Write your code here
// const firstNames = fullNames.map(function (fname) {
//     return fname.first;
// })

// console.log(firstNames)

// //Arrow functions ****************************
// const names = ['Hagrid', 'Luna']
// const greet = name => `Hey ${name}!`;
// console.log(greet(names[0]));
// console.log(greet(names[1]));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const filteredNums = numbers.filter(n => {
//     return n < 10
// })

// console.log(filteredNums);




const movies = [
    {
        title: 'Amadeaus',
        score: 99,
        year: 1984
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Parasite',
        score: 69,
        year: 2019
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

// Using the some function test to see if there is at least one or more movies that came 
//out after the year 2000, if so then the some will be true.
// const moviesLaterThanYr2000 = movies.some(movie => movie.year)
// console.log(`Was there any movies later than year 2000 ${moviesLaterThanYr2000}`)

// // Divide score by 10
// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })

// console.log(newMovies)

// Using an Arror function would look like
// const movieRating = movies.map((movie) => {
//     return `${movie.title} - ${movie.score / 10}`
// })

// const goodMovies = movies.filter(movie => {
//     return movie.score > 80
// })

// const goodTitles = goodMovies.map(m => m.title)

// const badMovies = movies.filter(movie => {
//     return movie.score < 70
// })
// // or //
// const badMovies2 = movies.filter(movie => movie.score < 70)

// const recentMovies = movies.filter(m => m.year > 1985)


// console.log(movieRating)
// console.log(goodMovies)

// console.log(badMovies)
// console.log(badMovies2)
// console.log(recentMovies)

// Find the highest rated movie ****************************************

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})

console.log(`The highest rated movie in the list is ${highestRated.title} with a score of ${highestRated.score}`)

// userNames = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']

// function validUserNames(userNames) {
//     const validUserNames = userNames.filter(userName => userName.length < 10);
//     return validUserNames;
// }
// // or
// const validUserNames2 = userNames => userNames.filter(userName => userName.length < 10);

// console.log(validUserNames(userNames));
// console.log(validUserNames2(userNames));

// Some & Every Methods

// const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77, 59]
// // if all passed the test then it will return true
// const allPassedTest = exams.every(score => score >= 70)
// console.log(allPassedTest)


/*Define a function called allEvens that accepts a single array of 
numbers.If the array contains all even numbers, return true.
Otherwise, return false.
Use some or every to help you do this!(only one of them is actually useful here)

allEvens([2, 4, 6, 8]) //true
allEvens([1, 4, 6, 8]) //false
allEvens([1, 2, 3]) //false
*/

//nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//nums = [2, 4, 6, 8]
// const allEvens = nums.every(num => num % 2 === 0)
// console.log(`Is the nums array all even numbers? ${allEvenNumbers}`)

// function allEvens2(numbers) {
//     return numbers.every(number => number % 2 === 0);
// }

// console.log(allEvens2(nums))

// get the total of all the prices in the array
// prices = [9.99, 1.50, 19.99, 49.99, 30.50]
// const totalPrice = prices.reduce((total, price) => {
//     return total + price
// })
// console.log(`The total price of the entire array is ${totalPrice}`)

// // Find the minimum price in the array
// const minPrice = prices.reduce((min, price) => {
//     if (price < min) {
//         return price;
//     }
//     return min;
// })

// console.log(minPrice)

// Default parameters 
// 6 is the default value
// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1
// }

// //All default values should come after the non-default params
// function greet(person, msg = "Hey there") {
//     console.log(`${msg}, ${person}`)
// }

// greet("Joe");

// *** Spread on Objects ***************************
// const feline = {
//     legs: 4,
//     family: 'Felidae'
// }
// const canine = {
//     family: 'Canine',
//     furry: true
// }

// const dog = { ...canine, isPet: true };
// console.log(dog);

// const lion = { ...feline, genus: 'Panthera' }
// console.log(lion);

// const catDog = { ...feline, ...canine }
// console.log(catDog);

// // ******** Rest Parameters *************
// // Sum the values passed in, its called rest so collect the rest of the values
// function sum(...nums) {
//     return nums.reduce((total, el) => total + el)
// }

// const summedValues = sum(1, 2, 3, 4, 5)
// console.log(summedValues)

// function raceResults(gold, silver, ...everyoneElse) {
//     console.log(`GOLD MEDAL GOES TO: ${gold}`);
//     console.log(`SILVER MEDAL GOES TO: ${silver}`);
//     console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
// }

// console.log(raceResults('Tammy', 'Fred', 'John', 'Goober'))

// //***** Destructuring Arrays     */

// const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934]

// const highScore = scores[0];
// const nextHighestScore = scores[1];

// const [gold, silver, bronze, ...everyoneElse] = scores;
// console.log(`Gold: ${gold} Silver: ${nextHighestScore} Bronze: ${bronze} Everyone Else: ${everyoneElse}`)

// ******* Destructuring an Object ******/
const user = {
    email: 'fred@gmail.com',
    password: 'abc123',
    firstName: 'Fred',
    lastName: 'Flintstone',
    born: 899,
    died: 999,
    bio: 'Lead character in the Flintstones',
    city: 'Rockville',
    state: 'GA'
}

const user2 = {
    email: 'wilma@gmail.com',
    firstName: 'Wilma',
    lastName: 'Flintstone',
    born: 901,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// const { email, firstName, lastName, city } = user;
// console.log(`${firstName} ${lastName} email is ${email} and lives in ${city}`)
// // change the name of a variable
// const { born: birthYear } = user;
// console.log(`${firstName} was born ${birthYear}`)

// using a default value for died since there isn't one associated with Wilma
// const { firstName, lastName, died = 'N/A' } = user2;
// console.log(`${firstName} ${lastName} death date is ${died}`)

// Destruturing Params *************************/
// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }

// using destruturing params you would do this ****
// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }

// or this setting a default value for lastName in case there isn't one
// function fullName({ firstName, lastName = 'John' }) {
//     return `${firstName} ${lastName}`
// }

// console.log(fullName(user))

// Filter the movies based on score
const movieFilter = movies.filter((movie) => movie.score >= 90);
console.log(movieFilter)

// or to destructure the previous you can use
const movieFilter2 = movies.filter(({ score }) => score >= 90)
console.log(movieFilter2)

const movieRatings = movies.map(movie => {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`
})

console.log(movieRatings)

// this is what it looks like using desctructuring 
const movieRatingsDesctructured = movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})

console.log(movieRatingsDesctructured)
