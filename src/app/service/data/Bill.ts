import { Payment } from './Payment';

export class Bill {
    constructor(
        public amount?: number,
        public paymentDate?: Date,
        public number?: number,
        public date?: Date,
        public payments?: Array<Payment>
    ) { }
}
