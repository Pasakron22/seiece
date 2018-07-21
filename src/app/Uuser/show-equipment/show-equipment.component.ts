import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowEService } from '../../service/show-e.service';


@Component({
  selector: 'app-show-equipment',
  templateUrl: './show-equipment.component.html',
  styleUrls: ['./show-equipment.component.css']
})
export class ShowEquipmentComponent implements OnInit {

  data=[]
  

  constructor(public showService:ShowEService) { 
    for(let i=1;i<=20;i++){
      this.data.push({
        index:i
      });
    }

    
    
  }
  
  showEq:any
  showE(){
    this.showService.getUnit().then((u:any)=>{
       this.showEq=u
       console.log(u,'dataShowE')
    })
  }


  ngOnInit() {

    this.showE()
  }

}
