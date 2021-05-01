interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
};

interface Reportable {
    summary(): string;
};
// Properties other than summary() is optional.

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
};

const drink_2 = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar.`;
    }
}

// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
const printSummary = (item: Reportable): void => {
    console.log(item.summary())
};

printSummary(oldCivic);
printSummary(drink_2);