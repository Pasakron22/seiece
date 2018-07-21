import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
// import { resolve } from 'path';


@Injectable()
export class UnitService {

  constructor(private http:Http) { }

  getUnit(){
    return new Promise((resolve,reject)=>{
      this.http.get('http://localhost/bank/public/api/v1/getunit').map(res=>res.json())
      .subscribe((date)=>{
        resolve(date)
      },error=>{
         reject(error); 
      })
    })
  }

  getAdviser(){
    return new Promise((resolve,reject)=>{
      this.http.get('http://localhost/bank/public/api/v1/getadviser').map(res=>res.json())
      .subscribe((date)=>{
        resolve(date)
      },error=>{
         reject(error); 
      })
    })
  }

}
