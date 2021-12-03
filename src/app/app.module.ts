import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { ClientComponent } from './client/client.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { StockComponent } from './stock/stock.component';
import { RayonComponent } from './rayon/rayon.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FactureComponent } from './facture/facture.component';

import { MatTableModule } from '@angular/material/table' 
// import { MatButtonModule } from '@angular/material/button';
import{MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdatefournisseurComponent } from './updatefournisseur/updatefournisseur.component';; 
//                //ng2-order-pipe
import Swal from 'sweetalert2';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddrayonComponent } from './addrayon/addrayon.component';

import { UpdaterayonComponent } from './updaterayon/updaterayon.component';
import { AddfournisseurComponent } from './addfournisseur/addfournisseur.component';
const routes : Routes=[
  {path:"facture", component:FournisseurComponent}

];
//  const MaterialComponenets=[ MatButtonModule];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTableModule, 
    MatPaginatorModule,
    NgxPaginationModule,
    // MaterialComponenets,
    Ng2SearchPipeModule,
    Ng2OrderModule,
 
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ClientComponent,
    FournisseurComponent,
    StockComponent,
    RayonComponent,
    AcceuilComponent,
    FactureComponent,

    UpdatefournisseurComponent,
    AddrayonComponent,
    UpdaterayonComponent,
    AddfournisseurComponent,

  ],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [MaterialComponenets]
})
export class AppModule { }
