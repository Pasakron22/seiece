import { Component, OnInit,Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UnitService } from '../../service/unit.service';


@Component({
  selector: 'app-confirm-t',
  templateUrl: './confirm-t.component.html',
  styleUrls: ['./confirm-t.component.css']
})
export class ConfirmTComponent implements OnInit {

  
  @Input() data:any =[]
  @Input() unit_n1:any
  

  constructor(private router:Router,public activityroute:ActivatedRoute,public unitService:UnitService) { 
    for(let i=1;i<=10;i++){
      this.data.push({
        index:i
      });
    }

    
    
  }

  ngOnInit() {
  }

  Edit(e){
    e.preventDefault();
    console.log(e);   
       this.router.navigate(['index-teacher']);
    
  }

}
