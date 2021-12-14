import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';
import { DetailfactureComponent } from './detailfacture/detailfacture.component';


const routes: Routes =[
  {path:"addfacture",component:AddFactureComponent},
  {path:"detailfacture",component:DetailfactureComponent},
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, 
  {path:"fullcalendar",component:FullCalendarComponent},{
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
