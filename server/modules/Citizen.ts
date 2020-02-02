import { Occupation } from "./enums/Occupation";
import randomNumber from "./utils/randomNumber";
import * as data from "./data/names.json";

export class Citizen {
    private firstName: string;
    private lastName: string;
    private occupation: Occupation;
    private annualSalary: number;
    private lifeGoal: string;

    constructor(
        firstName?: string, 
        lastName?: string, 
        occupation?: Occupation, 
        annualSalary?: number, 
        lifeGoal?: string,
        ) {
        this.firstName =  firstName ? firstName : this.createFirstName();
        this.lastName = lastName ? lastName : this.createLastName();
        this.occupation = occupation ? occupation : Occupation.PROGRAMMER;
        this.lifeGoal = lifeGoal ? lifeGoal : "HACK THE PLANET";
        this.annualSalary =  annualSalary ? annualSalary : 32000;
    }

    private createFirstName(): string {
        return data.first_names[randomNumber(0, data.first_names.length - 1)];
    }

    private createLastName(): string {
        return data.last_names[randomNumber(0, data.last_names.length - 1)];
    }
}