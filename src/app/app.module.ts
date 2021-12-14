import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {AgmCoreModule} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ClientComponent } from './client/client.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { StockComponent } from './stock/stock.component';
import { RayonComponent } from './rayon/rayon.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FactureComponent } from './facture/facture.component';
// import calendar + http 

import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

FullCalendarModule.registerPlugins([ 
  interactionPlugin,
  dayGridPlugin
]);
//                 **pagination module**
import {NgxPaginationModule} from 'ngx-pagination'; 
//                //ng2-order-pipe

import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';
import { StatfacturesComponent } from './statfactures/statfactures.component';
import { DetailfactureComponent } from './detailfacture/detailfacture.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    AddFactureComponent,
    FullCalendarComponent,
    StatfacturesComponent,
    DetailfactureComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
