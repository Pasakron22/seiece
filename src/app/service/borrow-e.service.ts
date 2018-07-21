import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class BorrowEService {

  constructor(private http:Http) { }

  getborrowE(){
    return new Promise((resolve,reject)=>{
      this.http.get('http://localhost/bank/public/api/v1/getborrow').map(res=>res.json())
      .subscribe((date)=>{
        resolve(date)
      },error=>{
         reject(error); 
      })
    })
  }

  postborrowE(data){
    return new Promise((resolve,reject)=>{
      this.http.post('http://localhost/bank/public/api/v1/postborrow',data).map(res=>res.json())
      .subscribe((date)=>{
        resolve(date)
      },error=>{
         reject(error); 
      })
    })
  }


  putborrowE(data){
    return new Promise((resolve,reject)=>{
      this.http.put('http://localhost/bank/public/api/v1/getborrow',data).map(res=>res.json())
      .subscribe((date)=>{
        resolve(date)
      },error=>{
         reject(error); 
      })
    })
  }
  
  deleteborrowE(){
    return new Promise((resolve,reject)=>{
      this.http.delete('http://localhost/bank/public/api/v1/deleteborrow').map(res=>res.json())
      .subscribe((date)=>{
        resolve(date)
      },error=>{
         reject(error); 
      })
    })
  }
}
