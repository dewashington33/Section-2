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
prices = [9.99, 1.50, 19.99, 49.99, 30.50]
const totalPrice = prices.reduce((total, price) => {
    return total + price
})
console.log(`The total price of the entire array is ${totalPrice}`)

// Find the minimum price in the array
const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})

console.log(minPrice)

