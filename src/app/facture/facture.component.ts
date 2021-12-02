import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FactureService } from 'app/facture.service';
import { Facture } from 'app/modals/facture';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas'
import { MatDialog } from '@angular/material/dialog';
import { HttpClient ,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css'],
  providers: [DatePipe]
})
export class FactureComponent implements OnInit {
  list : Facture[];
  datefacture: any;


  constructor(private fs:FactureService, private ac:ActivatedRoute, private route:Router,public datepipe: DatePipe , private _http:HttpClient)  { }
  totalLength:any;
  page:number = 1;
  ngOnInit(): void {  
 this.fs.getFactureList().subscribe(res=>{
   this.list=res;
   console.log(res);
   this.ac.paramMap.subscribe(
   res => {
     return Facture;
   }
 );
 this.totalLength = res.length;
});

  }

  download(){
    var element = document.getElementById('table')
    html2canvas(element).then((canvas) => {
      console.log(canvas)
      var imgData = canvas.toDataURL('image/png')
      var doc = new jspdf()
      var imgHeight = canvas.height * 208 / canvas.width;
      doc.addImage(imgData, 0, 0, 208, imgHeight)
      doc.save("image.pdf")
    })
  }

Search(){
  if(this.datefacture == ""){
    this.ngOnInit();
  }
  else{
    this.list = this.list.filter(res =>{
    
      return res.datefacture.toLocaleString().match(this.datefacture.toLocaleString());
    })
  }
}
key:string='remise';
reverse:boolean =false;
sort(key){
  this.key= key;
  this.reverse = !this.reverse;
}  


  cancelFacture(id: number) {
    
    this.fs.cancelFacture(id).subscribe();
  }
}



