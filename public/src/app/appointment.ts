export class Appointment {
    constructor(
        public patient: String = "",
        public complain: String = "",
        public time: String = "",
        public date: Date = new Date();
    ){}
}
