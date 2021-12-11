import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Stock } from 'app/modals/stock';
import { StockService } from 'app/stock.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  MyForm:FormGroup;
  @Output() notif= new EventEmitter<any>();
  constructor(private rs:StockService,private router:Router) { }
  Stock : Stock=new Stock() ;  
  submitted = false; 
  ngOnInit(): void {
    this.submitted=false;  
  }
  Stocksaveform=new FormGroup({  
     
    qteStock:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{1,}?")]),  
    qtemin:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{1,}?")]) ,
    libelleStock: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9]{1,}?")])
  });  

  saveStock(saveStock){  
    this.Stock=new Stock();     
    this.Stock.quantite=this.GetQuantite.value;  
    this.Stock.quanite_min=this.QteMin.value;  
    this.Stock.libellestock=this.GetLibelle.value;  
    this.submitted = true;  
   this.playSound();
    this.save(); 
    window.location.reload(); 
  }  
  save() {  
    this.rs.addStock(this.Stock)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.Stock = new Stock();  
  }  
  get GetQuantite(){  
    return this.Stocksaveform.get('qteStock');  
  }  
  
  get GetLibelle(){  
    return this.Stocksaveform.get('libelleStock');  
  }  
  get QteMin(){  
    return this.Stocksaveform.get('qtemin');  
  }  
  playSound() {
  
    const audio = new Audio();
   audio.src ="../assets/success-sound-effect.mp3"
    audio.load();
    audio.play();
    
  }
}

