import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../provider/service.service'
import {UnitService } from '../../service/unit.service';
import { ListCService } from '../../service/list-c.service';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators'
import { NgxTypeaheadModule  } from 'ngx-typeahead';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ServiceService,NgxTypeaheadModule]


  
})

export class HomeComponent implements OnInit {
  
  data=[]
  adviser
  unit_n1
  unit_n2
  unit=[]
   
  
  is_confirmc:boolean=false
  
  public url = 'http://suggestqueries.google.com/complete/search';
  
  listauto
  constructor(public  NgxTypeaheadModule :NgxTypeaheadModule,private router:Router,public provider:ServiceService,public unitService:UnitService,public listC:ListCService) { 
    for(let i=1;i<=10;i++){
      this.data.push({

        index:i
      });
    }

    // this.getUnit()

    if(!JSON.parse(localStorage.getItem('user_profile'))){
      this.router.navigate(['/'])
     }
    
  }


  su:string;
  shownamee(){
    let item = localStorage.getItem('user_profile')
    let obj = JSON.parse(item)
    console.log(obj)
    this.su = obj
  }

   showunit:any
  
  showUnit(){
    this.unitService.getUnit().then((u:any)=>{
       this.showunit=u
       console.log(u,'dataunit')
    })
  }

  showadviser:any
  showAdviser(){
    this.unitService.getAdviser().then((a:any)=>{
       this.showadviser=a
       console.log(a,'dataadviser')
    })
  }



  // getUnit(){

  //   this.provider.getUnit().subscribe(unit=>{
  //     this.unit = unit

  //   })
    getlist(){
      this.listC.getlistC().then((data:any)=>{
      
         this.listauto = data
      })
    }
  

  // }


 
  getlistauto(result,index){
    let data = this.data[index]
    data.list = result.name
    data.chem = result.chemical_formula
    data.gread = result.grade
    data.size = result.size
    console.log(result)
  }

  

  ngOnInit() {
    this.shownamee()
    this.showUnit()
    this.showAdviser()
    this.getlist()
  }
      
  user(input){
      
       this.is_confirmc=input
  
  }
    
  }


