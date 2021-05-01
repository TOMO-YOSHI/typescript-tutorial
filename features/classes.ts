class Vehicle {
    constructor(public color: string) {}
    // color: string = 'red';

    // constructor(color: string) {
    //     this.color = color;
    // }

    // public drive(): void {
    //     console.log('chugga chugga')
    // }

    protected honk(): void {
        console.log('beep')
    }
}

class CarClass extends Vehicle {
    constructor(public wheels: 4, color: string){
        super(color);
    }
    private drive(): void {
        console.log('vroom');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car_2 = new CarClass(4, 'red');
car_2.startDrivingProcess();
// car_2.honk();

const vehicle = new Vehicle('orange');
// vehicle.honk();
console.log(vehicle.color)