import randomNumber from "./utils/randomNumber";
import * as data from "./data/names.json";
import * as occupations from "./data/occupations.json";
import * as activity from "./data/activity.json";
import * as goal from "./data/goals.json";

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
        this.firstName = firstName ? firstName : this.createFirstName();
        this.lastName = lastName ? lastName : this.createLastName();
        this.occupation = occupation ? occupation : this.createOccupation();
        this.lifeGoal = lifeGoal ? lifeGoal : this.createGoal();
        this.annualSalary = annualSalary ? annualSalary : randomNumber(32000, 550000);
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
        return activity.activity[randomNumber(0, activity.activity.length - 1)];
    }

    public createGoal(): string {
        return goal.goals[randomNumber(0, goal.goals.length - 1)];
    }

    /// GETTERS AND SETTERS ///

    public getFullName(): string {
        return this.firstName + " " + this.lastName;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    // public setFirstName(firstName: string): void {
    //     this.firstName = firstName;
    // }

    public getLastName(): string {
        return this.lastName;
    }

    // public setLastName(lastName: string): void {
    //     this.lastName = lastName;
    // }

    public getOccupation(): string {
        return this.occupation;
    }

    // public setOccupation(occupation: string): void {
    //     this.occupation = occupation;
    // }

    public getAnnualSalary(): number {
        return this.annualSalary;
    }

    // public setAnnualSalary(annualSalary: number): void {
    //     this.annualSalary = annualSalary;
    // }

    public getLifeGoal(): string {
        return this.lifeGoal;
    }

    // public setLifeGoal(lifeGoal: string): void {
    //     this.lifeGoal = lifeGoal;
    // }

    public getActivity(): string {
        return this.activity;
    }

    // public setActivity(activity: string): void {
    //     this.activity = activity;
    // }
}