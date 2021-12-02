import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Client } from 'app/modals/client';
import {ClientService} from 'app/client.service'
@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  list:Client[];
  client: Client =new Client();
  categorie:any;
  p:number =1;

  constructor(private cs:ClientService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      this.cs.getClient().subscribe(res=>{this.list=res});
    }
    show(){
      console.log(this.list);
    }
    passAjout(){
      this.router.navigate(['ajoutclient']);
    }
    deleteClient(id){
      console.log(id);
      let conf=confirm("etes_vous sur ?");
      if (conf)
      this.cs.deleteClient(id).subscribe(()=>{
        console.log("client supprimé");
      });
      
     
  
     }
     SearchClient(){
      if(this.categorie==""){
        this.ngOnInit();
      }else{
        this.list =this.list.filter(rep =>{
          return rep.categorieClient.toLocaleUpperCase().match(this.categorie.toLocaleUpperCase());
        });
  
        
      }
  
    }
    key:string='id';
  reverse:boolean=false;
  sortClient(key){
    this.key=key;
    this.reverse= !this.reverse;
  }

   

}
