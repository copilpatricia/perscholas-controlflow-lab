const PI = 3.1415;
const area = PI * 5 * 5;
console.log(area); // 78.53 square meters
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.

let week = 0;
let currentArea = 20 * 0.8;
console.log(currentArea);
if (currentArea < area) {
  currentArea = currentArea * 2;
  week += 1;
  if (currentArea > 0.8 * area) {
    console.log("Pruned", week);
  } else if (currentArea > 0.5 * area && currentArea < 0.8 * area) {
    console.log("Monitored", week);
  } else {
    console.log("Planted", week);
  }
  console.log(currentArea);
} else {
  console.log(week);
}

week = 1;
if (currentArea < area) {
  currentArea = currentArea * 2;
  week += 1;
  if (currentArea > 0.8 * area) {
    console.log("Pruned", week);
  } else if (currentArea > 0.5 * area && currentArea < 0.8 * area) {
    console.log("Monitored", week);
  } else {
    console.log("Planted", week);
  }
  console.log(currentArea);
} else {
  console.log(week);
}

week = 2;
if (currentArea < area) {
  currentArea = currentArea * 2;
  week += 1;
  if (currentArea > 0.8 * area) {
    console.log("Pruned", week);
  } else if (currentArea > 0.5 * area && currentArea < 0.8 * area) {
    console.log("Monitored", week);
  } else {
    console.log("Planted", week);
  }
  console.log(currentArea);
} else {
  console.log(week);
}

currentArea = 100 * 0.8;
try {
  if (currentArea < 0.8 * area) {
    console.log("Pruned", week);
  } else {
    throw "Error - Too many plants.";
  }
} catch (error) {
  console.log(error);
}

let additionalSpace = 80 - 78.53;
console.log(`This is the amount of additional space: ${additionalSpace}`);
let result = (currentArea / PI) ** 0.5;
console.log(`The radius of the expanded garden is ${result}`);
