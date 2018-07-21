import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../provider/service.service'
import {UnitService } from '../../service/unit.service';
import { ListService } from '../../service/listE.service';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators'
import { NgxTypeaheadModule  } from 'ngx-typeahead';
import { moment } from 'ngx-bootstrap/chronos/test/chain';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[ServiceService,NgxTypeaheadModule]


  
})

export class UserComponent implements OnInit {
  
  data=[]
  adviser
  unit_n1
  unit_n2
  unit=[]
  datepicker
  dateborrow
  datereturn
   
  realdata =[]

  is_confirm:boolean=false
  
  public url = 'http://suggestqueries.google.com/complete/search';
  
  listauto 


  minDate: Date;
  maxDate: Date;
 

 

  constructor(public  NgxTypeaheadModule :NgxTypeaheadModule,private router:Router,public provider:ServiceService,public unitService:UnitService,public listE:ListService) { 
    
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() );
    this.maxDate.setDate(this.maxDate.getDate() + 7);
  

    for (let index = 0; index < 10; index++) {
      this.realdata.push({
            id_borrow:0,
            id_user:0,
            id_equipment:0,
            amout:0,
            unit_amout:0,
            borrow_date:'',
            return_day:'',
            date_save:'',
            b_comment_user:'',
            b_comment_teacher:'',
            b_check_status_t:'',
            b_comment_scientist:'',
            b_check_status_s:'',
            sdentist:'',
      })
    }
  
    console.log(this.realdata)
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


  su
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
      this.listE.getlistE().then((data:any)=>{
      
         this.listauto = data
      })
    }
  

  // }


 
  getlistauto(result,index){
    let data = this.data[index]
    data.list = result.name_eng
    data.size = result.size
    this.realdata[index].id_equipment = result.id_equipment

  }

  listchange(index){
     if(this.data[index].list==''){
       this.realdata[index].id_equipment = 0
     }
  }
  
  ngOnInit() {
    this.shownamee()
    this.showUnit()
    this.showAdviser()
    this.getlist()
  }
      
  user(input){
      let date = new Date(this.dateborrow)
      let borrowdate = moment(date).format('DD/MM/YYYY') 
      this.dateborrow = borrowdate

      let returndate = new Date(date)
      returndate.setDate(returndate.getDate()+(7));
      let datereturn = moment(returndate).format('DD/MM/YYYY')
      this.datereturn = datereturn
      console.log(this.datereturn)
      for (let index = 0; index < 0; index++) {
         if(this.realdata[index].id_equipment!=0){
           this.realdata[index].id_user = this.su.StudentCode
           this.realdata[index].amout = this.data[index].amount2
           this.realdata[index].unit_amout = this.data[index].unit_n2
           this.realdata[index].borrow_date = borrowdate
           this.realdata[index].return_day = datereturn 
         }else{
          this.realdata[index]({
            id_borrow:0,
            id_user:0,
            id_equipment:0,
            amout:0,
            unit_amout:0,
            borrow_date:'',
            return_day:'',
            date_save:'',
            b_comment_user:'',
            b_comment_teacher:'',
            b_check_status_t:'',
            b_comment_scientist:'',
            b_check_status_s:'',
            sdentist:'',
           })
         }
        
      }
       this.is_confirm=input
  
  }
    
  }


