import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from './../appointments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  user;
  appointments;

  constructor(private _service:AppointmentsService, private _router:Router){
    this.user = this._service.user;
  }

  ngOnInit() {
    this._service.all(res =>{
      this.appointments = res;
    });
  }

  logOut(){
    this._service.user = null;
    this._router.navigateByUrl("/");
  }

  add(){
    this._router.navigateByUrl("/new");
  }

  delete(id){
    this._service.destroy(id, (res) => {})
    alert("Appointment has been deleted!");
    this._router.navigateByUrl("/dash");
  }

}
