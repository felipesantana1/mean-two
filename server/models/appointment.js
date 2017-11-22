var mongoose = require("mongoose");

var AppointmentSchema = mongoose.Schema({
    patient: {type:String},
    complain: {type:String},
    time: {type: String},
    date: {type: Date}
}, {timestamps:true});

mongoose.model("Appointment", AppointmentSchema);