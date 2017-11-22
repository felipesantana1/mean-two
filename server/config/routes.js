var appointment = require("../controllers/appointments.js");
var path = require("path");

module.exports = function(app){

    app.get("/all", function(req, res){
        appointment.all(req, res);
    });

    app.post("/appointments", function(req, res){
        appointment.create(req, res);
    });

    app.delete("/appointments/:id", function(req, res){
        appointment.destroy(req, res);
    });
    
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
}