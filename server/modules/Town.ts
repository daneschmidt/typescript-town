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
    private readonly INTERVAL_TICK: number = .15 * 1000;

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
        console.log("tick count", this.timerCount);
        console.log("population", this.citizens.length);
    }

    private randomEvent(): void {
        const randomChance = randomNumber(1, 9);

        switch (randomChance) {
            case 1:
            case 2:
                this.getVacation(true);
                break;
            case 3:
            case 4:
                this.changeGoal(true);
                break;
            case 5:
                this.changeActivity(true);
                break;
            case 6:
                this.getHurt(true);
                break;
            case 7:
                this.removeCitizen(true);
                break;
            case 8:
            case 9:
                this.createCitizen();
                break;
            case 0:
                this.createCitizen();
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

    private changeActivity(newActivity?: boolean): void {
        if (this.citizens.length <= 1) return;

        const citizenObject: CitizenObjectIndex = this.getRandomCitizen();
        const randomCitizen: Citizen = citizenObject.citizen;

        if (newActivity) {
            this.historyLog.citizenActivity(randomCitizen);
        };
    }

    private changeGoal(newGoal?: boolean): void {
        if (this.citizens.length <= 1) return;

        const citizenObject: CitizenObjectIndex = this.getRandomCitizen();
        const randomCitizen: Citizen = citizenObject.citizen;

        if (newGoal) {
            this.historyLog.citizenGoal(randomCitizen);
        };
    }

    private createCitizen(): Citizen {
        const newCitizen = new Citizen();
        this.citizens.push(newCitizen);
        this.historyLog.addNewCitizen(newCitizen);
        return newCitizen;
    }

    private getHurt(sick?: boolean): void {
        if (this.citizens.length <= 1) return;

        const citizenObject: CitizenObjectIndex = this.getRandomCitizen();
        const randomCitizen: Citizen = citizenObject.citizen;

        if (sick) {
            this.historyLog.getAffliction(randomCitizen);
        };
    }

    private getVacation(gone?: boolean): void {
        if (this.citizens.length <= 1) return;

        const citizenObject: CitizenObjectIndex = this.getRandomCitizen();
        const randomCitizen: Citizen = citizenObject.citizen;

        if (gone) {
            this.historyLog.getVacation(randomCitizen);
        };
    }

    public getFullHistory(): string[] {
        return this.historyLog.getLog();
    }

}
