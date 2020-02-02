import { Citizen } from "./Citizen";
import randomNumber from "./utils/randomNumber";
import { HistoryLog } from "./utils/HistoryLog";

class CitizenObjectIndex {
    public citizen: Citizen;
    public index: number;

    constructor(citizen: Citizen, index: number) {
        this.citizen = citizen;
        this.index = index;
    }
}

export class Town {
    private timer: Object = {};
    private timerCount: number;
    private citizens: Citizen[];
    private historyLog: HistoryLog = new HistoryLog();

    private readonly NUM_OF_STARTING_CITIZENS: number = 5;
    private readonly INTERVAL_TICK: number = .5 * 1000;

    constructor() {
        this.timerCount = 0;
        this.citizens = [];
    }

    public init(): void {
        while (this.citizens.length < this.NUM_OF_STARTING_CITIZENS) {
            this.createCitizen();
        }

        console.log("Welcome to TypeScript Town!");

        this.timer = setInterval(
            this.onTimerInterval.bind(this),
            this.INTERVAL_TICK);

        console.log(this.historyLog.getLog());
    }

    private onTimerInterval(): void {
        this.timerCount++;
        this.randomEvent();
        console.log(this.timerCount);
        console.log(this.citizens.length);
    }

    private randomEvent(): void {
        const randomChance = randomNumber(1, 10);

        switch (randomChance) {
            case 2:
            case 5:
            case 6:
            case 7:
            case 8:
                this.createCitizen();
                break;
            case 1:
                this.removeCitizen(true);
                break;
        }
    }

    private getRandomCitizen(): CitizenObjectIndex {
        const randomNum = randomNumber(0, this.citizens.length - 1);
        return new CitizenObjectIndex(this.citizens[randomNum], randomNum);
    }


    private removeCitizen(killed?: boolean): void {
        if (this.citizens.length <= 1) return;

        const citizenObject: CitizenObjectIndex = this.getRandomCitizen();
        const randomCitizen: Citizen = citizenObject.citizen;
        const randomIndex: number = citizenObject.index;

        if (killed) {
            this.historyLog.killCitizen(randomCitizen);
        }

        this.citizens.splice(randomIndex, 1);
    }

    private createCitizen(): Citizen {
        const newCitizen = new Citizen();
        this.citizens.push(newCitizen);
        this.historyLog.addNewCitizen(newCitizen);
        return newCitizen;
    }

    public getFullHistory(): string[] {
        return this.historyLog.getLog();
    }
}
