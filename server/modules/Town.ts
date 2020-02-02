export class Town {
    timer: Object = {};
    timerCount: number = 0;

    constructor() { }

    init() {
        console.log("Welcome to TypeScript Town!");
            // .bind allows me to avoid maintan THIS in the scope correctly for the onTimerInterval
        this.timer = setInterval(this.onTimerInterval.bind(this), 1000);
    }

    onTimerInterval() {
        console.log("Its a CRAZY Town!");
        this.timerCount++;
        console.log(this.timerCount);
    }
}
