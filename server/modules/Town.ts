import {Citizen} from "./Citizen";

export class Town {
    private timer: Object = {};
    private timerCount: number = 0;

    constructor() { }

    public init() {
        console.log("Welcome to TypeScript Town!");
        // .bind allows me to avoid maintain THIS in the scope correctly for the onTimerInterval
        this.timer = setInterval(this.onTimerInterval.bind(this), 1000);
        const dane = new Citizen("dane", "schmidt", "engineer", 10000000, "hack the planet");  
    }

    private onTimerInterval() {
        console.log("Its a CRAZY Town!");
        this.timerCount++;
        this.randomEvent();
        console.log(this.timerCount);
    }

    private randomEvent() {
        //some random event happens here
    }

}
