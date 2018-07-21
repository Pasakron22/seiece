import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { reject } from 'q';

@Injectable()
export class ListService {

  constructor(private http:Http) { }

  getlistE(){
    return new Promise((resolve,reject)=>{
      this.http.get('http://localhost/bank/public/api/v1/getlistE').map(res=>res.json())
      .subscribe((date)=>{
        resolve(date)
      },error=>{
         reject(error); 
      })
    })
  }

}
