import { Citizen } from "./Citizen";
import randomNumber from "./utils/randomNumber";
import { HistoryLog } from "./utils/HistoryLog";



export class Town {
    private timer: Object = {};
    private timerCount: number;
    private citizens: Citizen[];
    private timerNumber: number;
    private historyLog: HistoryLog = new HistoryLog();

    constructor() {
        this.timerCount = 0;
        this.citizens = [];
        this.timerNumber = randomNumber(500, 1500);
    }

    public init(): void {
        console.log("Welcome to TypeScript Town!");
        this.timer = setInterval(this.onTimerInterval.bind(this), this.timerNumber);
        // .bind allows me to avoid maintain THIS in the scope correctly for the onTimerInterval - changes context
        this.createCitizen();

        while (this.citizens.length < 30) {
            this.createCitizen();
        }

        console.log(this.historyLog.getLog());
    }

    private onTimerInterval(): void {
        this.timerCount++;
        this.randomEvent();
    }

    private randomEvent(): void {
        //some random event happens here
    }

    // FUNCTION BELOW CAN BE PASSED CITIZENS MANUALLY AS PARAMS //
    private createCitizen(): Citizen {
        const newCitizen = new Citizen();
        this.citizens.push(newCitizen);
        this.historyLog.addNewCitizen(newCitizen);
        return newCitizen;
    }
}
