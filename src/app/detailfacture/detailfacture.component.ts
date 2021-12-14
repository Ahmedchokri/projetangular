import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailfactureService } from 'app/detailfacture.service';
import { FactureService } from 'app/facture.service';
import { Detailfacture } from 'app/modals/detailfacture';
import { Facture } from 'app/modals/facture';
@Component({
  selector: 'app-detailfacture',
  templateUrl: './detailfacture.component.html',
  styleUrls: ['./detailfacture.component.css']
})
export class DetailfactureComponent implements OnInit {
 id:any;
  @Input() iddetailfacture:any;
  @Input() detailfacture:Facture;
  list : Detailfacture [] ;
  DetailFacture : Detailfacture;  
  myForm : FormGroup;
 
  @Output() detailFacture= new EventEmitter<Detailfacture>();
  constructor(private ps:DetailfactureService, private routers : Router ,private ac : ActivatedRoute,private sf:FactureService) { }
  
  submitted = false; 

  ngOnInit(): void {
    this.myForm=new FormGroup({
      
    })
    this.getDetailFactureById();
  }
 
 
  
  getDetailFactureById()
  {this.ps.getDetailFactureById(this.iddetailfacture).subscribe(
    (res) => {
      console.log(res);
      this.DetailFacture = res;
    }
  );

  }

}
