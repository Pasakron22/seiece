import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UnitService } from '../../service/unit.service';

@Component({
  selector: 'app-index-teacher',
  templateUrl: './index-teacher.component.html',
  styleUrls: ['./index-teacher.component.css']
})
export class IndexTeacherComponent implements OnInit {

  data=[]
  
  is_confirm:boolean=false
  constructor(private router:Router,public unitService:UnitService) { 
    for(let i=1;i<=10;i++){
      this.data.push({
        index:i
      });
    }

    
    
  }

  showunit:any
  
  showUnit(){
    this.unitService.getUnit().then((u:any)=>{
       this.showunit=u
       console.log(u,'dataunit')
    })
  }

  test(){
    console.log(this.data);
    
  }



  ngOnInit() {

    this.showUnit()
    this.test()
  }
  Teacher(input){
      
    this.is_confirm=input

}
}
