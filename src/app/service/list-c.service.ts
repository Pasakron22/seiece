import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ListCService {

  constructor(private http:Http) { }

  getlistC(){
    return new Promise((resolve,reject)=>{
      this.http.get('http://localhost/bank/public/api/v1/getlistC').map(res=>res.json())
      .subscribe((date)=>{
        resolve(date)
      },error=>{
         reject(error); 
      })
    })
  }

}
