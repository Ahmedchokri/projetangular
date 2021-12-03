import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FournisseurService } from 'app/fournisseur.service';
import { Fournisseur } from 'app/modals/fournisseur';

@Component({
  selector: 'app-updatefournisseur',
  templateUrl: './updatefournisseur.component.html',
  styleUrls: ['./updatefournisseur.component.css']
})
export class UpdatefournisseurComponent implements OnInit {
  
  idfournisseur:string;
  f : Fournisseur = new Fournisseur();
  constructor(private sf:FournisseurService , private ac:ActivatedRoute)  { }

  ngOnInit( ): void {
    
      

      this.ac.paramMap.subscribe(res=>this.sf.getFournisseurById(Number(res.get(
      'idfournisseur'))).subscribe(res1=>{this.f=res1}), error=>console.log(error));
      

   
  }
  update(){
     this.sf.updateFournisseur(this.f).subscribe();
    
  }

}
