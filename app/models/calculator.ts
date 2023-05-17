//modelo
export class Calculator{
    private _day: number;
    private _month: number;
    private _year: number;

    constructor(day: number, month: number, year: number){
        this._day = day;
        this._month = month;
        this._year = year;
    }

    get day(): number {
        return this._day
    }

    get month(): number{
        return this._month
    }

    get year(): number{
        return this._year
    }

}