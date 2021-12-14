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
//import swal from 'sweetalert2';
import swal from 'sweetalert';
import { CalendarOptions } from '@fullcalendar/angular';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Listener } from 'selenium-webdriver';


@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css'],
  providers: [DatePipe]
})
export class FactureComponent implements OnInit {
  Events: any = [];
    
    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth'
    };
    show:Boolean = false;
    lab:any;
    myRay: any;
  list : Facture[];
  datefacture: any;
terms:Boolean =false;

  constructor(private fs:FactureService, private ac:ActivatedRoute, private route:Router,public datepipe: DatePipe 
    , private _http:HttpClient, private modalService: NgbModal)  { }
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
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  closeModal: string;
  triggerModal(content, i:Facture) {

    //this.myRay=i.idfacture;
    this.myRay=i;
    
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  showDetail(i:Facture){
    // this.show=!this.show;
    this.show=true;
     this.myRay=i;
     //console.log(this.myInvoice);
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

  openSweetalert(idfacture:number){
    swal({
        title: "Êtes-vous sûr?",
        text: "Une fois annulée, vous ne pourrez pas récupérer cette facture!",
        icon: "error",
        buttons: ["Annuler", "Confirmer"],
        dangerMode: true,
       })
       .then((willCancel) => {

        if (willCancel) {

        this.fs.cancelFacture(idfacture).subscribe();
      swal("La facture a été annulée!", {
      icon: "success",
      //timer: 999999999999999,  
      }).then(function(isConfirm) {
        if (isConfirm) {
          location.reload();
        } 
      //  timer: 999999999999999999999999999999999999999, 
      }); 
    
    }
     else {
      swal("La facture est en sécurité!",{
      icon: "info",
    });
     
      }
      
      });





}
 

}
