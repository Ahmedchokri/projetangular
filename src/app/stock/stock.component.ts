import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Stock } from 'app/modals/stock';
import { StockService } from 'app/stock.service';
import { Chart, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import swal from 'sweetalert';









@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stocks:Stock[];
  list: Stock[];
  show:Boolean = false;
  myRay: Stock;
  libellestock:any;
  lab:any;
  t:any;
  qrInfo:any;
  chart:any =[];
    constructor(private ps:StockService, private ac:ActivatedRoute, private modalService: NgbModal) { }
    totalLength:any;
    page:number = 1;
    ngOnInit(): void {

   this.ps.getStockList().subscribe(res=>{
    this.stocks=res;
   this.lab= res.map((sc:any)=> sc.libellestock);
   this.t= res.map((sc:any)=> sc.quantite );
   
    console.log(res);
    this.chart = new Chart('canvas',{
      type : 'doughnut',
      data: {
        labels:this.lab,
        datasets :[
          {
          data: this.t,
          borderColor: '#3e95cd',
          fill: false,
          label: 'Coin Price',
          backgroundColor: ['rgba(93, 175, 89, 0.1)',
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
          borderWidth: 3,
          },
        ],
      },
    });
    this.ac.paramMap.subscribe(
    res => {
      return Stock;
    }
  );
  this.totalLength = res.length;
  this.qrInfo = JSON.stringify(this.stocks);
 });
 
    }

    // deleteStock(i : number , j : number){
    //   this.ps.deleteStock(i).subscribe();
    //   this.stocks.splice(j,1);
    //   }
         

        showEdit(i:Stock){
          // this.show=!this.show;
          this.show=true;
           this.myRay=i;
           //console.log(this.myInvoice);
         }
         updatestock(i:Stock){
          for (let k in this.list){
            if (this.list[k].idstock == i.idstock){
              this.list[k]=i;
            }
          }
        }

        Search(){
          if(this.libellestock == ""){
            this.ngOnInit();
          }
          else{
            this.stocks = this.stocks.filter(res =>{
              // toLocaleLowerCase
              return res.libellestock.toLocaleLowerCase().match(this.libellestock.toLocaleLowerCase());
            })
          }
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
        triggerModal(content, i:Stock) {
          this.myRay=i;
          this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
            this.closeModal = `Closed with: ${res}`;
          }, (res) => {
            this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
          });
        }
        triggerModal1(content) {
         this.playSound();
          this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
            this.closeModal = `Closed with: ${res}`;
          }, (res) => {
            this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
          });
        }
        deleteStock(i : number , j : number): void {
          //this.getProducts();
          swal({
           title: "Are you sure?",
           text: "Once deleted, you will not be able to recover this product!",
           icon: "warning",
           buttons: ["Cancel", "Confirm"],
           dangerMode: true,
          })
            .then((willDelete) => {
     
             if (willDelete) {
               this.ps.deleteStock(i).subscribe();
               //this.stocks.splice(j,1);
               //window.location.reload();
              swal("le stock a été supprimé!", {
                  icon: "success", 
                
                }).then(function(isConfirm) {
                  if (isConfirm) {
                    location.reload();
                  } 
                //  timer: 999999999999999999999999999999999999999, 
                });
               
              } else {
               swal("Stock!");
              }
             
           });
     
        }
key:string='quantite';
reverse:boolean =false;
sort(key){
  this.key= key;
  this.reverse = !this.reverse;
}   

playSound() {
  
  const audio = new Audio();
  audio.src ="../assets/success-sound-effect.mp3"
  audio.load();
  audio.play();
  
}

  }
  