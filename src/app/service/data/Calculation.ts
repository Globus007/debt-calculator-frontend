export class Calculation {
    constructor(
        public debt: number,
        public fine: number,
        public percent: number,
        public fullDebt: number,
        public calculatingInfo?: Array<string>[]
    ) { }
}
