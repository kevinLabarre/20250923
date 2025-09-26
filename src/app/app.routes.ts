import { Routes } from '@angular/router';

import { AdminLayout } from '../admin/admin-layout/admin-layout';
import { ADMIN_ROUTES } from '../admin/routes/admin.routes';
import { NotFound } from '../view/not-found/not-found';
import { PublicLayout } from '../public/public-layout/public-layout';
import { PUBLIC_ROUTES } from '../public/routes/public.routes';

export const routes: Routes = [

  // Espace public
  { path: "", component: PublicLayout, children: PUBLIC_ROUTES },

  // Espace admin:
  { path: "admin", component: AdminLayout, children: ADMIN_ROUTES },

  // Page 404
  { path: "**", component: NotFound, title: "404" }

];
