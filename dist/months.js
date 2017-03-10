"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Month constructor
class Month {
    constructor(name, abbr, ord, days) {
        this.name = name;
        this.abbr = abbr;
        this.ord = ord;
        this.days = days;
    }
}
//  Months array
const months = [
    new Month('January', 'Jan', 1, 31),
    new Month('February', 'Feb', 2, 28),
    new Month('March', 'Mar', 3, 31),
    new Month('April', 'Apr', 4, 30),
    new Month('May', 'May', 5, 31),
    new Month('June', 'Jun', 6, 30),
    new Month('July', 'Jul', 7, 31),
    new Month('August', 'Aug', 8, 31),
    new Month('September', 'Sep', 9, 30),
    new Month('October', 'Oct', 10, 31),
    new Month('November', 'Nov', 11, 30),
    new Month('December', 'Dec', 12, 31)
];
exports.default = months;
