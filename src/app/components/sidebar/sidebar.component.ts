import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Acceuil',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Produit',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Stock',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Fournisseur',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Client',  icon:'location_on', class: '' },
    { path: '/rayon', title: 'Rayon',  icon:'notifications', class: '' },
    { path: '/facture', title: 'Facture',  icon:'notifications', class: '' },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
