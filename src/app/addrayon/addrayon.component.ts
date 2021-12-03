import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Rayon } from 'app/modals/rayon';
import { RayonService } from 'app/rayon.service';

@Component({
  selector: 'app-addrayon',
  templateUrl: './addrayon.component.html',
  styleUrls: ['./addrayon.component.css']
})
export class AddrayonComponent implements OnInit {

  listrayon: Rayon[];
  rayon : Rayon;
  constructor(private rayonService : RayonService , private router:Router) { }

  ngOnInit(): void {
    this.rayon= new Rayon();
  }
  save(){
    this.rayonService.addRayon(this.rayon).subscribe(res=>{
      console.log(this.rayon);
      //console.log('fournisseur cree');
      //this.router.navigateByUrl('/rayon');
    });
    
  }
}