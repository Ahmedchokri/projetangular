import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarOptions } from '@fullcalendar/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from 'app/modals/facture';
import { FactureService } from 'app/facture.service';
//import { title } from 'process';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css']
})
export class FullCalendarComponent implements OnInit {
 
 posts :[];
  Events: any = [];
  list : Date[];

   t:any;
    
  calendarOptions: CalendarOptions = {
      initialView: 'dayGridMonth',
      events: [
        { Date:this.fs.getDateFacture().subscribe(res => {
           this.Date=res;

        }) },
      
     ]
      
  };
  Date: Date[];
  date_events = [];



  constructor(
      private httpClient: HttpClient, private route:Router, private _http:HttpClient ,private fs:FactureService,private ac:ActivatedRoute
  ) { }
  totalLength:any;
  onDateSelect(arg: any) {
    alert('Date clicked: ' + arg.dateStr)
  }


  ngOnInit(){


this.get_date_list();

      setTimeout(() => {
        console.log('77: \n ' + this.list);
        this.date_events = []
        this.list.forEach(element => {
          
          this.date_events.push({  date:element})
        });
        // pour la duplication des events//
        this.date_events = Object.values(this.date_events.reduce((acc,cur)=>Object.assign(acc,{[cur.date]:cur}),{}));

        console.log("90: " + this.date_events);
///////////fin duplication
          this.calendarOptions = {
          initialView: 'dayGridMonth',
          eventColor:'blue',
          eventContent: 'Facture',
          dateClick: this.onDateSelect.bind(this),
           events: this.date_events

         
        
          };
      }, 2500);
  } 
  
  
  get_date_list() {
    this.fs.getDateFacture().subscribe(res => {
      this.list=res;
      console.log(res);
      this.ac.paramMap.subscribe(
         res => {
            return this.Date;
     });
      
    
      
  });
  }


  refreshPage(): void {
    window.location.reload();
  }
}
