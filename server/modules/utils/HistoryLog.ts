import { Citizen } from "../Citizen";
import moment from 'moment';
const currencyFormatter = require('currency-formatter');


export class HistoryLog {
    private log: string[] = [];

    constructor() { }

    public addNewCitizen(citizen: Citizen): void {
        const salary = currencyFormatter.format(citizen.getAnnualSalary(), { code: 'USD' });
        const timestamp = moment().format('lll');
        this.log.push(`${timestamp} - ${citizen.getFullName()}, Moved to town working as a ${citizen.getOccupation()} making ${salary} and is currently ${citizen.getActivity()}`)
    }

    public killCitizen(citizen: Citizen): void {
        const timestamp = moment().format('lll');
        this.log.push(`${timestamp} - ${citizen.getFullName()}, was killed ${citizen.createDeath()}`) // add optional death type in here from json data
    }

    public citizenActivity(citizen: Citizen): void {
        const timestamp = moment().format('lll');
        this.log.push(`${timestamp} - ${citizen.getFullName()}, is currently ${citizen.getActivity()}`)
    }

    public citizenGoal(citizen: Citizen): void {
        const timestamp = moment().format('lll');
        this.log.push(`${timestamp} - ${citizen.getFullName()}, has decided to ${citizen.getLifeGoal()}`)
    }

    public getAffliction(citizen: Citizen): void {
        const timestamp = moment().format('lll');
        this.log.push(`${timestamp} - ${citizen.getFullName()}, ${citizen.getAffliction()} and checked into Great Hope Hospital`)
    }

    public getVacation(citizen: Citizen): void {
        const timestamp = moment().format('lll');
        this.log.push(`${timestamp} - ${citizen.getFullName()}, is traveling to ${citizen.getVacation()}`)  // later add for vacation .. for business.. for etc.
    }

    public showHistory(): void {
        console.log(this.log);
    }

    public getLog(): string[] {
        return this.log;
    }

}