import { Client } from "./client";
export class Facture{
    idfacture: number;
    active: boolean;
   datefacture:string;
    montantfacture: number;
    montantremise: number;
   client_idclient: Client;
 }