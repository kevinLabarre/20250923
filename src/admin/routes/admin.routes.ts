import { Routes } from "@angular/router";
import { AdminContactPage } from "../view/admin-contact-page/admin-contact-page";
import { AdminHomePage } from "../view/admin-home-page/admin-home-page";

export const ADMIN_ROUTES: Routes = [
  { path: '', component: AdminHomePage, title: 'Espace admin - accueil' },
  { path: 'contact', component: AdminContactPage, title: "Espace admin - contact" }
]
