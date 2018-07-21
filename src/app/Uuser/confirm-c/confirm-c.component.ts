import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UnitService } from '../../service/unit.service';

@Component({
  selector: 'app-confirm-c',
  templateUrl: './confirm-c.component.html',
  styleUrls: ['./confirm-c.component.css']
})
export class ConfirmCComponent implements OnInit {

  
  @Input() data:any =[]
  @Input() adviser:any 
  @Input() unit_n1:any
  @Input() unit_n2:any
  constructor(private router:Router,public activityroute:ActivatedRoute,public unitService:UnitService) { 

    for(let i=1;i<=10;i++){
      this.data.push({
        index:i
      });
    }
  }

  
   su:string;
  shownamee(){
    let item = localStorage.getItem('user_profile')
    let obj = JSON.parse(item)
    console.log(obj)
    this.su = obj
  }
  

  // showad:any
  // showAdviser(){
  //   this.unitService.getAdviser().then((u:any)=>{
  //      this.showad=u
  //      console.log(u,'dataadviser')
  //   })
  // }

  
 



  ngOnInit() {
    //  this.showAdviser()
     
    this.shownamee()
    
  }

  Edit(e){
    e.preventDefault();
    console.log(e);   
       this.router.navigate(['user']);
    
  }
}
