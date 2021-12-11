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
import { DetailfactureComponent } from 'app/detailfacture/detailfacture.component';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
  
})
export class FactureComponent implements OnInit {
  list : Facture[];
  datefacture: any;

  //  , private _http:HttpClient, private dialogRef:MatDialog
  constructor(private fs:FactureService, private ac:ActivatedRoute, private route:Router, private _http:HttpClient, private dialogRef:MatDialog)  { }
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
  // myFunction(){
  //   this.date=new Date();
  //   let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
  //  }
  // download(){
  //   var element = document.getElementById('table')
  //   html2canvas(element).then((canvas) => {
  //     console.log(canvas)
  //     var imgData = canvas.toDataURL('image/png')
  //     var doc = new jspdf()
  //     var imgHeight = canvas.height * 208 / canvas.width;
  //     doc.addImage(imgData, 0, 0, 208, imgHeight)
  //     doc.save("image.pdf")
  //   })
  // }
    openDialog(){
    this.dialogRef.open(DetailfactureComponent);
   }
  
Search(){
  if(this.datefacture == ""){
    this.ngOnInit();
  }
  else{
    this.list = this.list.filter(res =>{
      // toLocaleLowerCase
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
// cancelFacture(idfacture){
//   this.fs.cancelFacture(idfacture).subscribe(res=>this.route.navigateByUrl("/detailfacture"));
//   }

  // httpOptions = {
  //   headers: new HttpHeaders({
  //   'Content-Type': 'application/json'
  //   })
  //   }
}
