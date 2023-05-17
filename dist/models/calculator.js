//modelo
export class Calculator {
    constructor(day, month, year) {
        this._day = day;
        this._month = month;
        this._year = year;
    }
    get day() {
        return this._day;
    }
    get month() {
        return this._month;
    }
    get year() {
        return this._year;
    }
}
