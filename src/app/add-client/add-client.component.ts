import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'app/client.service';
import { Client } from 'app/modals/client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  list :Client[]=[];
  client : Client = new Client();

  constructor(private cs:ClientService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  addClient(){
    this.client.idClient=this.list.length + 1;
    
    this.list.push(this.client);
    this.client=new Client();
   console.log(this.list);
  }
  saveClient(){
    this.cs.addclient(this.client).subscribe(
      res=>{console.log('client crée !');
      this.router.navigateByUrl('/clients');
    }
    )
  }

}
