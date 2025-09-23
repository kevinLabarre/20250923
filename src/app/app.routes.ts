import { Routes } from '@angular/router';
import { Homepage } from '../view/homepage/homepage';
import { NewsPage } from '../view/news-page/news-page';
import { AccountsPage } from '../view/accounts-page/accounts-page';

export const routes: Routes = [
  { path: "", component: Homepage, title: "Accueil" },
  { path: "actualite", component: NewsPage, title: "Actualités" },
  { path: "actualite/:slug", component: NewsPage, title: "Actualités: détails" },
  { path: "compte", component: AccountsPage, title: "Les comptes" },
];
