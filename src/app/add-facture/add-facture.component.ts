import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { FactureService } from 'app/facture.service';
import { Facture } from 'app/modals/facture';

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css']
})
export class AddFactureComponent implements OnInit {
 
  constructor(private ps:FactureService, private route : Router) { }
  Facture : Facture=new Facture();  
  submitted = false; 
  ngOnInit(): void {
    this.submitted=false;  
  }
  Facturesaveform=new FormGroup({  
     
    idfacture: new FormControl(),
    // , Validators.minLength(2), Validators.maxLength(5), Validators.pattern("[0-9]{4}")
      montantremise: new FormControl("", [Validators.required]),
      datefacture: new FormControl('', [Validators.required]),
      active: new FormControl('', [Validators.required]),
      montantfacture: new FormControl('', [Validators.required]), 
  });  
  

   saveFacture(saveFacture){  
    this.Facture=new Facture();     
    this.Facture.montantremise=this.montantremise.value;  
     this.Facture.datefacture = this.datefacture.value;
     this.Facture.active = this.active.value;
     this.Facture.montantfacture=this.montantfacture.value;
      
   this.submitted = true;  
     this.save();  
     this.route.navigateByUrl('/facture');
  }  
  
    
  
  save() {  
    this.ps.createF(this.Facture)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.Facture = new Facture();  
  }  
  
  get montantremise(){  
    return this.Facturesaveform.get('montantremise');  
  }  
  
  get datefacture(){  
    return this.Facturesaveform.get('datefacture');  
  }  
  get active(){  
    return this.Facturesaveform.get('active');  
  }  
  get montantfacture(){  
    return this.Facturesaveform.get('montantfacture');  
  }  
  
  
  
  addFactureForm(){  
    this.submitted=false;  
    this.Facturesaveform.reset();  
  }  
}