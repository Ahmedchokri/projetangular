import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddrayonComponent } from 'app/addrayon/addrayon.component';
import { Rayon } from 'app/modals/rayon';
import { RayonService } from 'app/rayon.service';
import Swal from 'sweetalert2';
// import { map } from 'rxjs/operators';

import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { TypeScriptEmitter } from '@angular/compiler';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-rayon',
  templateUrl: './rayon.component.html',
  styleUrls: ['./rayon.component.css']
})
export class RayonComponent implements OnInit {
  //items:Rayon[];
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

  deleteRayon(idrayon){
  
    this.rs.deleteRayon(idrayon).subscribe(res=>this.route.navigate(["/rayon"]));
    console.log();
    }

    Search(){
      if(this.libelle == ""){
        this.ngOnInit();
      }
      else{
        this.listrayon = this.listrayon.filter(res =>{
          // toLocaleLowerCase
          return res.libelle.toLocaleString().match(this.libelle.toLocaleString());
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
      this.route.navigate(["/rayon"]);
      console.log(this.terms);
    }

   
  
  }  

