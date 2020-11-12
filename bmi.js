class BMI{
    constructor(height, weight){
        this.height= height;
        this.weight= weight;

    }

    calculateBMI(){

        let bmi = this.weight/(this.height**2);
        return bmi;

    }
}

let myBMI = new BMI(2, 90);
let calculatedBMi = myBMI.calculateBMI();
console.log(calculatedBMi);