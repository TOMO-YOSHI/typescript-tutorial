const add = (a: number, b: number): number => {
    return a + b;
};

const sbtract = (a: number, b: number): number => {
    return a - b;
};

function divide(a: number, b: number): number {
    return a / b;
};

const multiply = function(a: number, b: number): number {
    return a * b;
};

const logger = (message: String): void => {
    console.log(message);
    return null; // void can return null or undefined
};

const throwError_1 = (message: string): never => {
    throw new Error(message);
};

const throwError_2 = (message: string): string => {
    if (!message) {
        throw new Error(message);
    };
    return message;
};

const throwError_3 = (message: string): void => {
    if (!message) {
        throw new Error(message);
    };
};

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

// const logWeather = (forecast: {date: Date, weather: string}): void => {
//     console.log(forecast.date);
//     console.log(forecast.weather);
// };
const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);