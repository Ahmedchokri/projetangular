import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FournisseurService } from 'app/fournisseur.service';

import { Fournisseur } from 'app/modals/fournisseur';
import { MatPaginator } from '@angular/material/paginator';
import { UpdatefournisseurComponent } from 'app/updatefournisseur/updatefournisseur.component';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {



 list : Fournisseur[];
 libellefournisseur:any;

  constructor(private fs:FournisseurService, private ac:ActivatedRoute, private route:Router ,private dialogRef:MatDialog)  { }
  totalLength:any;  
  p:number =1;
  ngOnInit(): void {

 this.fs.getAllFournisseurs().subscribe(res=>{this.list=res;this.ac.paramMap.subscribe(
   res => {
     return Fournisseur;
   }
 );
 this.totalLength = res.length;
});
  }

deleteFournisseur(idfournisseur){
  
  this.fs.deleteFournisseur(idfournisseur).subscribe(res=>this.route.navigate(["/icons"]));
  }


  Search(){
    if(this.libellefournisseur == ""){
      this.ngOnInit();
    }
    else{
      this.list = this.list.filter(res =>{
        // toLocaleLowerCase
        return res.libellefournisseur.toLocaleString().match(this.libellefournisseur.toLocaleString());
      })
    }
  }
  key:string='remise';
  reverse:boolean =false;
  sort(key){
    this.key= key;
    this.reverse = !this.reverse;
  
  }

  openSweetalert(){
    Swal.fire({
      title: 'Error!',
      text: 'Are you sure ',
      icon: 'error',
      confirmButtonText: 'Yes'
    })
    this.route.navigate(["/icons"]);
  }

}
