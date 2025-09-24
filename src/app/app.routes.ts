import { Routes } from '@angular/router';
import { Homepage } from '../view/homepage/homepage';
import { NewsPage } from '../view/news-page/news-page';
import { AccountsPage } from '../view/accounts-page/accounts-page';
import { NewsDetailPage } from '../view/news-detail-page/news-detail-page';
import { Update } from '../component/nav-newsDetails/update/update';
import { Description } from '../component/nav-newsDetails/description/description';
import { Other } from '../component/nav-newsDetails/other/other';

export const routes: Routes = [
  // { path: "", component: Homepage, title: "Accueil" },

  { path: "", redirectTo: "actualite", title: "Accueil", pathMatch: 'full' },

  { path: "actualite", component: NewsPage, title: "Actualités" },

  // Exemple navigation avec onglets :
  // Pour afficher les composants des routes enfants, il faut utiliser le router-outlet dans le composant de la route parent
  // --> Il faut ajouter un router-outlet dans NewsDetailPage
  {
    path: "actualite/:id", component: NewsDetailPage, title: "Actualités: détails", children: [
      { path: "", redirectTo: "modifier", pathMatch: 'full' }, // optionnel ! -> Pour forcer la navigation vers une route enfant (pour éviter qu'on puisse aller sur actualite/:id)
      { path: "modifier", component: Update },
      { path: "description", component: Description },
      { path: "autres", component: Other },
    ]
  },

  { path: "compte", component: AccountsPage, title: "Les comptes" },
];
