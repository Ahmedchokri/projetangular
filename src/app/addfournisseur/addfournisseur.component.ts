import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FournisseurService } from 'app/fournisseur.service';
import { Fournisseur } from 'app/modals/fournisseur';

@Component({
  selector: 'app-addfournisseur',
  templateUrl: './addfournisseur.component.html',
  styleUrls: ['./addfournisseur.component.css']
})
export class AddfournisseurComponent implements OnInit {



  listfournisseur: Fournisseur[];
  fournisseur : Fournisseur;
  constructor(private fournisseurService : FournisseurService , private router:Router) { }

  ngOnInit(): void {
    this.fournisseur= new Fournisseur();
  }

  save(){
    this.fournisseurService.addFournisseur(this.fournisseur).subscribe(res=>{
      console.log('fournisseur cree');
      this.router.navigateByUrl('/icons');
    });
    
  }

}
