import { Debtor } from './Debtor';
import { Contract } from './Contract';
import { Bill } from './Bill';
import { Payment } from './Payment';

export class TransferData {
    constructor(
        public debtor: Debtor,
        public contract: Contract,
        public bills: Array<Bill>,
        public payments: Array<Payment>,
        public calculationDate: Date,
        public totalBalance?: number
    ) { }
}
