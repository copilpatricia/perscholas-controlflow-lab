console.log("pati");

// let x = "1";

// switch (x) {
//   case "1":
//     console.log("the value is 1");
//     break; // tell JavaScript to get out of switch statement and not execute the rest

//   case "2":
//     console.log("the value is 2");
//     break;

//   default:
//     console.log("no value was found!");
// }

// let w = 10;

// let a = 1;
// let b = 2;

// try {
//   let c = a + b;
//   if (w > 0) {
//     let isEven = w % 2 == 0 ? true : false;
//     console.log(isEven);
//   } else if (w <= 0) {
//     throw "Error - Value of 0 or below.";
//   }
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log(w);
// }

// count down from 10 to 1

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// Output even number from 1 to 10.
// for (let i = 1; i <= 10; i++) {

//   console.log(`Now checking ${i}`);

//   if (i % 2 == 0) {
//       console.log(`${i} is even!`);
//   } else {
//       console.log(`${i} is odd!`);

//   }
// }

// output multiples of 3, starting at 6 ending at 60

// for (let i = 6; i <= 60; i++ ){
//   if(i % 3 === 0){
//     console.log(`${i} is multiple of 3`)
//   } else {
//     console.log(`${i} is not a multiple of 3`)
//   }
// }

// output an incresing number of # , from 1 to 7

// let symbol = "#";
// for(let i = 1; i <=7; i++) {

//   symbol+= '#';

//   console.log(symbol);
// }

let x = 10;

try {
	if (x < 0) {
		console.log("Negative!");
	} else {
		throw "Error - I don't know what I'm doing.";
	}
} catch (error) {
	console.log(error);
}

console.log("Does this log?");