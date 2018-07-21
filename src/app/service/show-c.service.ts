import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
// import { resolve } from 'path';
import { reject } from 'q';

@Injectable()
export class ShowCService {

  constructor(private http:Http) { }

  getC(){
    return new Promise((resolve,reject)=>{
      this.http.get('http://localhost/bank/public/api/v1/getshowC').map(res=>res.json())
      .subscribe((date)=>{
        resolve(date)
      },error=>{
         reject(error); 
      })
    })
  }

}
