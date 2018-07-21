import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

import {environment} from '../../environments/environment';

@Injectable()
export class ServiceService {



  constructor(public http:Http) { } 

  getUnit(){
    return this.http.get(environment.api+'getunit',{

    }).map(res=>res.json())
  }


  }

  
     
       



