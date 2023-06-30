// 100 nilai random 1-50

let arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(Math.floor(Math.random() * 50) + 1);
}
console.log(`Array : ${arr}`);

//pecah 2 array

let ganjil = [];
let genap = [];

for (let i = 0; i < arr.length; i++) {
  if (i % 2 !== 0) {
    ganjil.push(arr[i]);
  } else {
    genap.push(arr[i]);
  }
}

console.log(`Array Ganjil: ${ganjil} \nJumlah Array: ${ganjil.length}`);
console.log(`Array Genap: ${genap} \nJumlah Array: ${genap.length}`);

// function MAX MIN
function arrMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

const ganjilMax = arrMax(ganjil);
const genapMax = arrMax(genap);

function arrMin(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}
const ganjilMin = arrMin(ganjil);
const genapMin = arrMin(genap);

// function Total

// function arrTotal(arr){
//     let total = 0;
//     for(let i = 0; i < arr.length; i++){
//         total += arr[i];
//     }
//     return total
// }
// arrow function + implisit return
arrTotal = (arr) => arr.reduce((acc, cur) => acc + cur);
const ganjilTotal = arrTotal(ganjil);
const genapTotal = arrTotal(genap);

//rata rata
arrAvg = (arr) => {
  const total = arrTotal(arr);
  const avg = total / arr.length;
  return Math.floor(avg);
};
const ganjilAvg = arrAvg(ganjil);
const genapAvg = arrAvg(genap);

console.log(
  `Array Ganjil : \nMax: ${arrMax(ganjil)} \nMin: ${arrMin(
    ganjil
  )} \nTotal: ${arrTotal(ganjil)} \nRata-rata: ${arrAvg(ganjil)}`
);
console.log(
  `Array Genap : \nMax: ${arrMax(genap)} \nMin: ${arrMin(
    genap
  )}  \nTotal: ${arrTotal(genap)} \nRata-rata: ${arrAvg(genap)}`
);

//perbandingan min dan max
if (ganjilMin == genapMin) {
  console.log(`Array memiliki nilai minimum yang sama`);
} else if (ganjilMin > genapMin) {
  console.log(`Min lebih besar array ganjil`);
} else {
  console.log(`Min lebih besar array genap`);
}

//perbandingan total
if (ganjilTotal == genapTotal) {
  console.log(`Array memiliki nilai minimum yang sama`);
} else if (ganjilTotal > genapTotal) {
  console.log(`Total lebih besar array ganjil`);
} else {
  console.log(`Total lebih besar array genap`);
}

//perbandingan rata-rata
if (ganjilAvg == genapAvg) {
  console.log(`Array memiliki nilai minimum yang sama`);
} else if (ganjilAvg > genapAvg) {
  console.log(`Rata-rata lebih besar array ganjil`);
} else {
  console.log(`Rata-rata lebih besar array genap`);
}
