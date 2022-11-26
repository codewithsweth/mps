// //this is my first JS code
// console.log('hello world');




/*//if else
// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 10;
if (hour >= 6 && hour < 12) {
    console.log('Good morning');
}
else if (hour >= 12 && hour < 18) {
    console.log('good afternoon')
}
else {
    console.log('good evening')
}*/




/*//switch case
let role = 'guest';
switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
}
//same as above using if else
if (role === 'guest') console.log('Guest');
else if (role === 'moderator') console.log('Moderator');
else console.log('Unknown User');*/




//for loop
// console.log('hello')
// console.log('hello')
// console.log('hello')
// console.log('hello')
// console.log('hello')
// for (let i = 0; i < 5; i++) {
//     console.log('hello', i);
// }
// for (let i = 0; i <= 5; i++) {
//     if (i % 2 !== 0) console.log(i);
// }





//while loop
// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }


// do-while loop
// let i = 0;
// do {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// } while (i <= 5);



// //for..in loop - properties of elements in array
// const person = {
//     name: 'sweth',
//     age: 22
// };
// for (let key in person) console.log(key, person[key]);

// const colors = ['red', 'greem', 'blue'];
// for (let index in colors) console.log(index, colors[index]);

// //for..of loop - for elements of an array
// for (let color of colors) console.log(color);




// //break and continue - usefull but is a ugly code
// let i = 0;
// while (i <= 10) {
//     if (i === 8) break;
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }



// //max of 2 numbers
// let number = max(5, 3.8);
// console.log(number);
// function max(a, b) {
//     // if (a > b) return a;
//     // return b;
//     return (a > b) ? a : b;
// }


//own but not good
// let type = islandscape(400, 500);
// console.log(type);
// function islandscape(width, height) {
//     return (width > height) ? true : false;
// }




// function islandscape(width, height) {
//     return (width > height);
// }
// console.log(islandscape(500, 600));



//fizzBuzz
//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by both 3 and 5 => FizzBuzz
//Not divisible by 3 or 5 => input
//Not a number =>'Not a number'











