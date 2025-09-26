import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

export const injecTokenInterceptor: HttpInterceptorFn = (req, next) => {

  console.log("intercepteur :", req)

  const platform = inject(PLATFORM_ID)

  // Pour tester si on est sur le navigateur
  // Le code ne sera pas exéctué coté serveur (si on utilise le SSR on exécute du code côté serveur)
  // Il sera exéctué que quand le sera 'servi' au client (au navigateur)
  if (isPlatformBrowser(platform)) {
    const token = localStorage.getItem("token_key");
    if (token) {
      const cloneReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      })
      return next(cloneReq);
    }
  }

  return next(req);
};
