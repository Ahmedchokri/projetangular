import { Component, OnInit } from '@angular/core';
import { FactureService } from 'app/facture.service';
import { Facture } from 'app/modals/facture';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
 list:Facture[];
  constructor(private fs:FactureService ,private ac:ActivatedRoute ) { }

  ngOnInit(): void {
    this.fs.getAllFacture().subscribe(res=>{this.list=res;this.ac.paramMap.subscribe(
      res => {
        return Facture;
      }
    );
   });
  }

}
