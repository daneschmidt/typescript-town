import { Occupation } from "./enums/Occupation";

export class Citizen {
    private firstName: string;
    private lastName: string;
    private occupation: Occupation;
    private annualSalary: number;
    private lifeGoal: string;

    constructor(firstName: string, lastName: string, occupation: Occupation, annualSalary: number, lifeGoal: string,) {
        this.firstName =  firstName;
        this.lastName = lastName;
        this.occupation = Occupation.PROGRAMMER; // "Value from enum"
        this.annualSalary = annualSalary;
        this.lifeGoal = lifeGoal;
    }
}