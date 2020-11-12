class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;

    }

    Information(){
        console.log(`Make: ${this.make}, model: ${this.model}, year: ${this.year} `);
    }
}

class cars extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;

    }

    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }

}

let myCar = new cars('VW', 'Golf', 2008, 4 );
myCar.Information();
