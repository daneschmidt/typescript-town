import { Citizen } from "./Citizen";
import { Occupation } from "../enums/Occupation";

export class Town {
    private timer: Object = {};
    private timerCount: number;
    private citizens: Citizen[];

    constructor() {
        this.timerCount = 0;
        this.citizens = [];
    }

    public init(): void {
        console.log("Welcome to TypeScript Town!");
        // .bind allows me to avoid maintain THIS in the scope correctly for the onTimerInterval - changes context
        this.timer = setInterval(this.onTimerInterval.bind(this), 1000);
        this.createCitizen();

        while (this.citizens.length < 10) {
            this.createCitizen();
        }

        console.log(this.citizens);
    }

    private onTimerInterval(): void {
        console.log("Its a CRAZY Town!");
        this.timerCount++;
        this.randomEvent();
        console.log(this.timerCount);
    }

    private randomEvent(): void {
        //some random event happens here
    }

    private createCitizen(): Citizen {
        const newCitizen = new Citizen("dane", "schmidt", Occupation.PROGRAMMER , 10000000, "hack the planet");
        this.citizens.push(newCitizen);
        return newCitizen;
    }
}
