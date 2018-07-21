import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  
  constructor() {
    
   }


  sn:string;
  showname(){
    let item = localStorage.getItem('user_profile')
    let obj = JSON.parse(item)
    console.log(obj)
    this.sn = obj
  }

  ngOnInit() {
    this.showname()
  }

}
