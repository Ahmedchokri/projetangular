import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rayon } from 'app/modals/rayon';
import { RayonService } from 'app/rayon.service';

@Component({
  selector: 'app-updaterayon',
  templateUrl: './updaterayon.component.html',
  styleUrls: ['./updaterayon.component.css']
})
export class UpdaterayonComponent implements OnInit {
  idrayon:string;
  rayon :Rayon = new Rayon();
  constructor(private sr:RayonService , private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe(next=>this.sr.getRayonById(Number(next.get(
      'idrayon'))).subscribe(res=>{this.rayon=res}), error=>console.log(error));
  }
  update(){
    
    this.sr.updateRayon(this.rayon).subscribe();
  }

}
