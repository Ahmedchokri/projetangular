import { Routes } from '@angular/router';
import { UserProfileComponent } from '../../user-profile/user-profile.component';





import { ListproductComponent } from 'app/listproduct/listproduct.component';
import { ClientComponent } from 'app/client/client.component';
import { FournisseurComponent } from 'app/fournisseur/fournisseur.component';
import { StockComponent } from 'app/stock/stock.component';
import { RayonComponent } from 'app/rayon/rayon.component';
import { AcceuilComponent } from 'app/acceuil/acceuil.component';
import { FactureComponent } from 'app/facture/facture.component';

import { UpdatefournisseurComponent } from 'app/updatefournisseur/updatefournisseur.component';
import { AddrayonComponent } from 'app/addrayon/addrayon.component';
import { UpdaterayonComponent } from 'app/updaterayon/updaterayon.component';
import { AddfournisseurComponent } from 'app/addfournisseur/addfournisseur.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
   
    { path: 'dashboard',      component: AcceuilComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: ListproductComponent},
    { path: 'typography',     component: StockComponent },
    { path: 'icons',          component: FournisseurComponent , children:[
        {path:'addfournisseur',component:AddfournisseurComponent},
        {path:"updatefournisseur/:idfournisseur" , component:UpdatefournisseurComponent}]},
     
    { path: 'maps',           component: ClientComponent },
    {path:"rayon" , component: RayonComponent ,children:[
        {path:"addrayon", component:AddrayonComponent},
         {path:"updaterayon/:idrayon" , component:UpdaterayonComponent}
      ]}, 
     {path: 'facture', component: FactureComponent},
    
];
