export class Town {
    constructor() { }

    init() {
        console.log("Welcome to TypeScript Town!");

        setInterval(this.onTimerInterval, 1000);
    }

    onTimerInterval() {
        console.log("Its a CRAZY Town!");
    }
}
