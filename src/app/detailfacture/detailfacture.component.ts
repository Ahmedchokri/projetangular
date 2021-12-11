import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailfactureService } from 'app/detailfacture.service';
import { detailfacture } from 'app/modals/detailfacture';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-detailfacture',
  templateUrl: './detailfacture.component.html',
  styleUrls: ['./detailfacture.component.css']
})
export class DetailfactureComponent implements OnInit {
  detailfacture : detailfacture;
  constructor(private detailfactureService : DetailfactureService , private router:Router) { }

  ngOnInit(): void {
    this.detailfacture= new detailfacture();
  }
  //  save(){
  // this.detailfactureService.addFournisseur(this.detailfacture).subscribe(res=>{
  //     console.log('detailfacture cree');
  //      this.router.navigateByUrl('/icons');
  //    });
    
  // }
}
