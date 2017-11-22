import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from './../appointments.service';
import { Router } from '@angular/router';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  appointment = new Appointment();
  user;
  apts;

  constructor(private _service: AppointmentsService, private _router:Router) { this.user = this._service.user; }

  ngOnInit() {
  }

  onSubmit(){
    this.appointment.patient = this.user;
    this._service.create(this.appointment, (res) => {
      this._router.navigateByUrl("/dash");
    });
  }

  home(){
    this._router.navigateByUrl("/dash");
  }

  logOut(){
    this._service.user = null;
    this._router.navigateByUrl("/")
  }

}
