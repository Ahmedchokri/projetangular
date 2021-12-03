import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddrayonComponent } from 'app/addrayon/addrayon.component';
import { Rayon } from 'app/modals/rayon';
import { RayonService } from 'app/rayon.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rayon',
  templateUrl: './rayon.component.html',
  styleUrls: ['./rayon.component.css']
})
export class RayonComponent implements OnInit {

  terms: Boolean = false;
  listrayon:Rayon[];
  libelle:any;
  p:number=1;
  //rayon:Rayon;
  constructor(private rs:RayonService, private ac:ActivatedRoute, private route:Router ,private dialogRef:MatDialog) { }
 

  ngOnInit():void{
    this.rs.getAllRayon().subscribe(res=>{this.listrayon=res;this.ac.paramMap.subscribe(
      res=>{
        return Rayon;
      }
    );});

  }

  deleteFournisseur(idrayon){
  
    this.rs.deleteRayon(idrayon).subscribe(res=>this.route.navigate(["/icons"]));
    }

    Search(){
      if(this.libelle == ""){
        this.ngOnInit();
      }
      else{
        this.listrayon = this.listrayon.filter(res =>{
          // toLocaleLowerCase
          return res.libellefournisseur.toLocaleString().match(this.libelle.toLocaleString());
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
      console.log(this.terms);
    }
  
  }  

