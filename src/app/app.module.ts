import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatDialogModule,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import { QRCodeModule } from 'angular2-qrcode';
const MATERIAL_MODULES = [MatToolbarModule,
  MatIconModule
];
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ClientComponent } from './client/client.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { StockComponent } from './stock/stock.component';
import { RayonComponent } from './rayon/rayon.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FactureComponent } from './facture/facture.component';
//                 **pagination module**
import {NgxPaginationModule} from 'ngx-pagination'; 
//                //ng2-order-pipe

import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailfactureComponent } from './detailfacture/detailfacture.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

const routes : Routes=[
  {path:"facture", component:FournisseurComponent}

];
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
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    FullCalendarModule,
    MatIconModule,
    MatDialogModule,
    NgbModule,
    ChartsModule,
    QRCodeModule,
    Ng2SearchPipeModule,
    FormsModule,
 
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
    DetailfactureComponent,
    CalendarComponent,
    EditStockComponent,
    AddStockComponent,

  ],
  exports : MATERIAL_MODULES,
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {},},
    { provide: MatDialogRef, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
