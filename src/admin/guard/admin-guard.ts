import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const adminGuard: CanMatchFn = (route, segments) => {

  const router = inject(Router)

  // route: contient tous les paramètres de la route actuelle (url, data, queryParams, fragment, routes enfants etc.)
  // segments: contient tous les segments de la route actuelle (url)
  console.log("route: ", route)
  console.log("segments:", segments)

  if (false)
    return router.createUrlTree(["/"]) // Redirection vers 'accueil'

  return true;
};


// Role d'un guard:
// doit retourner un des trois éléments suivants:
//    - true: autorise l'accès
//    - false: interdit l'accès (mène vers la page 404)
//    - un 'urlTree' pour rediriger l'utilisateur
