import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'app/client.service';
import { Client } from 'app/modals/client';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  client:Client;
  currentClient = new Client();

  constructor(private cs:ClientService,
    private activatedRoute:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.cs.consulterClient(this.activatedRoute.snapshot.params.id).
    subscribe(cl=>{this.currentClient=cl});
    this.activatedRoute.paramMap.subscribe(next=>this.cs.consulterClient(Number(next.get(
      'id'))).subscribe(res=>{this.client=res}), error=>console.log(error));

  }
  editClient(){
    this.cs.updateClient(this.currentClient).subscribe(res => {
      console.log("modif");
      
      this.router.navigateByUrl('/clients');
     })
      ;
  }

}
