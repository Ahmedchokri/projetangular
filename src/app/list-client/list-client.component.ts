import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Client } from 'app/modals/client';
import {ClientService} from 'app/client.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
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
  closeResult = '';
  

  constructor(private cs:ClientService, private router: Router,
    private activatedRoute: ActivatedRoute,private modalService: NgbModal) { }

    ngOnInit(): void {
      this.cs.getClient().subscribe(res=>{this.list=res});

      
    }
    detailsClient(id:number){
      this.router.navigate(['detailsclient',id]);

    }
   /* afficherDetails(){
      this.id = this.activatedRoute.snapshot.params['id'];

    this.client = new Client();
    this.cs.getClientById(this.id).subscribe( data => {
      this.list = data;
    });
  }*/
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
  open(id:number) {
    this.modalService.open(id, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

   

}
