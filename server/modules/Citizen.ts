import randomNumber from "./utils/randomNumber";
import * as data from "./data/names.json";
import * as occupations from "./data/occupations.json";
import * as activity from "./data/activity.json";

export class Citizen {
    private firstName: string;
    private lastName: string;
    private occupation: string;
    private annualSalary: number;
    private lifeGoal: string;
    private activity: string;

    constructor(
        firstName?: string, 
        lastName?: string, 
        occupation?: string, 
        annualSalary?: number, 
        lifeGoal?: string,
        activity?: string,
        ) {
        this.firstName =  firstName ? firstName : this.createFirstName();
        this.lastName = lastName ? lastName : this.createLastName();
        this.occupation = occupation ? occupation : this.createOccupation();
        this.lifeGoal = lifeGoal ? lifeGoal : "HACK THE PLANET";
        this.annualSalary =  annualSalary ? annualSalary : randomNumber(32000,550000);
        this.activity = activity ? activity : this.createActivity();
    }

    private createFirstName(): string {
        return data.first_names[randomNumber(0, data.first_names.length - 1)];
    }

    private createLastName(): string {
        return data.last_names[randomNumber(0, data.last_names.length - 1)];
    }

    public createOccupation(): string {
        return occupations.occupations[randomNumber(0, occupations.occupations.length - 1)];
    }

    public createActivity(): string {
        return activity.activity[randomNumber(0, activity.activity.length -1)];
    }

}