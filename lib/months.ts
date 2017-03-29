//  Month constructor
export class Month {
    constructor(
        public name : string,
        public abbr : string,
        public ord  : number,
        public days : number
    ) { }
}


//  Months array
export const months : Month[] = [
    new Month(  'January'   , 'Jan', 1, 31),
    new Month(  'February'  , 'Feb', 2, 28),
    new Month(  'March'     , 'Mar', 3, 31),
    new Month(  'April'     , 'Apr', 4, 30),
    new Month(  'May'       , 'May', 5, 31),
    new Month(  'June'      , 'Jun', 6, 30),
    new Month(  'July'      , 'Jul', 7, 31),
    new Month(  'August'    , 'Aug', 8, 31),
    new Month(  'September' , 'Sep', 9, 30),
    new Month(  'October'   , 'Oct', 10, 31),
    new Month(  'November'  , 'Nov', 11, 30),
    new Month(  'December'  , 'Dec', 12, 31)
];
