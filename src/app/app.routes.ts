import { Routes } from '@angular/router';

import { AdminLayout } from '../admin/admin-layout/admin-layout';
import { ADMIN_ROUTES } from '../admin/routes/admin.routes';
import { NotFound } from '../view/not-found/not-found';
import { PublicLayout } from '../public/public-layout/public-layout';
import { PUBLIC_ROUTES } from '../public/routes/public.routes';
import { adminGuard } from '../admin/guard/admin-guard';

export const routes: Routes = [

  // Espace public
  { path: "", component: PublicLayout, children: PUBLIC_ROUTES },

  // Espace admin:
  // { path: "admin", component: AdminLayout, children: ADMIN_ROUTES, canMatch: [adminGuard] }, // -> Sans lazy loading

  //Avec lazy loading de tout l'espace admin
  { path: "admin", loadComponent: () => import('../admin/admin-layout/admin-layout').then(e => e.AdminLayout), children: ADMIN_ROUTES, canMatch: [adminGuard] },

  // Avec lazy loading uniquement des routes enfants
  // {
  //   path: "admin", component: AdminLayout, canMatch: [adminGuard],
  //   loadChildren: () => import('../admin/routes/admin.routes').then(e => e.ADMIN_ROUTES)
  // },

  // Page 404
  { path: "**", component: NotFound, title: "404" }

];
