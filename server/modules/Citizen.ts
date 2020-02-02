export class Citizen {
    private firstName: string;
    private lastName: string;
    private occupation: string;
    private annualSalary: number;
    private lifeGoal: string;

    constructor(firstName: string, lastName: string, occupation: string, annualSalary: number, lifeGoal: string,) {
        this.firstName =  firstName;
        this.lastName = lastName;
        this.occupation = occupation;
        this.annualSalary = annualSalary;
        this.lifeGoal = lifeGoal;
    }
}