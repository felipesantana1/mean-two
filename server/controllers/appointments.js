var mongoose = require("mongoose");
var Appointment = mongoose.model("Appointment");

module.exports = {
    all: function(req, res){
        Appointment.find({}, function(err, appointments){
            if(err){
                res.json(err);
            } else {
                res.json(appointments);
            }
        });
    },

    create: function(req, res){
        var appointment = new Appointment(req.body);
        appointment.save(function(err, appointment){
            if(err){
                res.json(err);
            } else {
                res.json(appointment);
            }
        });
    },

    destroy: function(req, res){
        Appointment.findOneAndRemove({_id:req.params.id}, function(err){
            if(err){
                res.json(err);
            } else {
                console.log("Appointment Deleted!");
                res.json({Success:true});
            }
        });
    }
}