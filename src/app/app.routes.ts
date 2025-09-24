import { Routes } from '@angular/router';
import { Homepage } from '../view/homepage/homepage';
import { NewsPage } from '../view/news-page/news-page';
import { AccountsPage } from '../view/accounts-page/accounts-page';
import { NewsDetailPage } from '../view/news-detail-page/news-detail-page';

export const routes: Routes = [
  { path: "", component: Homepage, title: "Accueil" },
  { path: "actualite", component: NewsPage, title: "Actualités" },
  { path: "actualite/:id", component: NewsDetailPage, title: "Actualités: détails" },
  { path: "compte", component: AccountsPage, title: "Les comptes" },
];
