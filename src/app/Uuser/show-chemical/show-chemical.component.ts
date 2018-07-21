import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowCService } from '../../service/show-c.service';


@Component({
  selector: 'app-show-chemical',
  templateUrl: './show-chemical.component.html',
  styleUrls: ['./show-chemical.component.css']
})
export class ShowChemicalComponent implements OnInit {

  data=[]
  

  constructor(public showService:ShowCService) { 
    for(let i=1;i<=20;i++){
      this.data.push({
        index:i
      });
    }

    
    
  }
  
  showc:any
  showC(){
    this.showService.getC().then((u:any)=>{
       this.showc=u
       console.log(u,'dataShowC')
    })
  }


  ngOnInit() {

    this.showC()
  }

}
