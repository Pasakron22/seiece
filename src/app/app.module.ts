import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './Uuser/user/user.component';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { NgxTypeaheadModule } from 'ngx-typeahead';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';





















import { BarComponent } from './Uuser/bar/bar.component';
import { ShowChemicalComponent } from './Uuser/show-chemical/show-chemical.component';
import { ShowEquipmentComponent } from './Uuser/show-equipment/show-equipment.component';
import { CheckStatusComponent } from './Uuser/check-status/check-status.component';
import { ConfirmComponent } from './Uuser/confirm/confirm.component';
import { IndexTeacherComponent } from './teacher/index-teacher/index-teacher.component';
import { BarTeacherComponent } from './teacher/bar-teacher/bar-teacher.component';
import { StatusTeacherComponent } from './teacher/status-teacher/status-teacher.component';
import { ShowETComponent } from './teacher/show-e-t/show-e-t.component';
import { ShowListComponent } from './teacher/show-list/show-list.component';
import { ConfirmTComponent } from './teacher/confirm-t/confirm-t.component';
import { IndexAuthoritiesComponent } from './authorities/index-authorities/index-authorities.component';
import { BarAuthoritiesComponent } from './authorities/bar-authorities/bar-authorities.component';
import { ShowEAComponent } from './authorities/show-e-a/show-e-a.component';
import { ShowCAComponent } from './authorities/show-c-a/show-c-a.component';
import { ShowRetuerAComponent } from './authorities/show-retuer-a/show-retuer-a.component';
import { ShowCTComponent } from './teacher/show-c-t/show-c-t.component';
import { SummarizeTodayEComponent } from './authorities/summarize-today-e/summarize-today-e.component';
import { SummarizeUserEComponent } from './authorities/summarize-user-e/summarize-user-e.component';
import { SummarizeUserOfEComponent } from './authorities/summarize-user-of-e/summarize-user-of-e.component';
import { SummarizeBottleEComponent } from './authorities/summarize-bottle-e/summarize-bottle-e.component';
import { SummarizeReservationEComponent } from './authorities/summarize-reservation-e/summarize-reservation-e.component';
import { StatusTComponent } from './teacher/status-t/status-t.component';
import { ServiceService } from './provider/service.service';
import { LoginService } from './provider/login/login.service';
import { UnitService } from './service/unit.service';
import { ShowEService } from './service/show-e.service';
import { ListService } from './service/listE.service';
import { FilterPipe } from './filterpipe/filterpipe.component';
import { HomeComponent } from './Uuser/home/home.component';
import { ShowCService } from './service/show-c.service';
import { ListCService } from './service/list-c.service';
import { ConfirmCComponent } from './Uuser/confirm-c/confirm-c.component';
import { ShowDescriptionComponent } from './Uuser/show-description/show-description.component';
import { BorrowEService } from './service/borrow-e.service';




const appRoutes:Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'bar',
    component: BarComponent
  },
  {
    path: 'show-chemical',
    component: ShowChemicalComponent
  },
  {
    path: 'show-equipment',
    component: ShowEquipmentComponent
  },
  {
    path: 'check-status',
    component: CheckStatusComponent
  },
  {
    path: 'index-teacher',
    component: IndexTeacherComponent
  },
  {
    path: 'bar-teacher',
    component: BarTeacherComponent
  },
  {
    path: 'status-teacher',
    component: StatusTeacherComponent
  },
  {
    path: 'show-e-t',
    component: ShowETComponent
  },
  {
    path: 'show-list',
    component: ShowListComponent
  },
  {
    path: 'confirm-t',
    component: ConfirmTComponent
  },
  {
    path: 'bar-authorities',
    component: BarAuthoritiesComponent
  },
  {
    path: 'index-authorities',
    component: IndexAuthoritiesComponent
  },
  {
    path: 'show-e-a',
    component: ShowEAComponent
  },
  {
    path: 'show-c-a',
    component: ShowCAComponent
  },
  {
    path: 'show-retuer-a',
    component: ShowRetuerAComponent
  },
  {
    path: 'show-c-t',
    component: ShowCTComponent
  },
  {
    path: 'summarize-today-e',
    component: SummarizeTodayEComponent
  },
  {
    path: 'summarize-bottle-e',
    component: SummarizeBottleEComponent
  },
  {
    path: 'summarize-reservation-e',
    component: SummarizeReservationEComponent
  },
  {
    path: 'summarize-user-e',
    component: SummarizeUserEComponent
  },
  {
    path: 'summarize-user-of-e',
    component: SummarizeUserOfEComponent
  },
  {
    path: 'status-t',
    component: StatusTComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'confirm-c',
    component: ConfirmCComponent
  },
  {
    path: 'show-description',
    component: ShowDescriptionComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    BarComponent,
    ShowChemicalComponent,
    ShowEquipmentComponent,
    CheckStatusComponent,
    ConfirmComponent,
    IndexTeacherComponent,
    BarTeacherComponent,
    StatusTeacherComponent,
    ShowETComponent,
    ShowListComponent,
    ConfirmTComponent,
    IndexAuthoritiesComponent,
    BarAuthoritiesComponent,
    ShowEAComponent,
    ShowCAComponent,
    ShowRetuerAComponent,
    ShowCTComponent,
    SummarizeTodayEComponent,
    SummarizeUserEComponent,
    SummarizeUserOfEComponent,
    SummarizeBottleEComponent,
    SummarizeReservationEComponent,
    StatusTComponent,
    FilterPipe,
    HomeComponent,
    ConfirmCComponent,
    ShowDescriptionComponent
    
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot(),
     NgxTypeaheadModule
    
    
  
    

  ],
  providers: [ServiceService,LoginService,UnitService,ShowEService,ListService,ShowCService,ListCService,BorrowEService],
  bootstrap: [AppComponent]
})
export class AppModule { }
