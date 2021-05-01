const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

let carByMake_2: string[][] = []; // two dimentional array

// Help with inference with extractiong values
const car_2 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(500);

// Help with 'map'

carMakers.map((car: string): string => {
    return car.toUpperCase();
});


// Flexible types
// const importantDates = [new Date(), '2013-10-10'];
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2013-10-10');
importantDates.push(new Date());
importantDates.push(20210401);