import { Routes } from '@angular/router';
import { UserProfileComponent } from '../../user-profile/user-profile.component';





import { ListproductComponent } from 'app/listproduct/listproduct.component';
import { ClientComponent } from 'app/client/client.component';
import { FournisseurComponent } from 'app/fournisseur/fournisseur.component';
import { StockComponent } from 'app/stock/stock.component';
import { RayonComponent } from 'app/rayon/rayon.component';
import { AcceuilComponent } from 'app/acceuil/acceuil.component';
import { FactureComponent } from 'app/facture/facture.component';

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
    { path: 'icons',          component: FournisseurComponent },
    { path: 'maps',           component: ClientComponent },
    { path: 'notifications',  component: RayonComponent},
   
     {path: 'facture', component: FactureComponent},
];
