import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppointmentsService {

  user;

  constructor(private _http:Http) { }

  all(callback){
    this._http.get("/all").subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        console.log(err);
      }
    );
  };

  create(data, callback){
    this._http.post("/appointments", data).subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        console.log(err.json());
      }
    );
  };

  destroy(id, callback){
    this._http.delete("/appointments/"+id, id).subscribe(
      (res) => {
        console.log(id);
        callback(res.json());
      },
      (err) => {
        console.log(err.json());
      }
    );
  };

}
