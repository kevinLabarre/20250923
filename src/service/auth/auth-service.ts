import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  baseUrl: string = environment.url

  login(credential: { login: string, password: string }) {
    return this.fakeLogin(credential)
  }


  // A remplacer par un appel http vers notre backend
  // C'est la back qui doit renvoyer le token
  private fakeLogin(credential: { login: string, password: string }): Observable<{ login: string; password: string, token: string }> {
    return this.http.get<{ login: string; password: string, token: string }>(`${this.baseUrl}/actualites/1`).pipe(
      map(() => {
        if (credential.login === 'admin@admin.fr' && credential.password === 'admin') {
          const token = "Mon_token";
          return { login: credential.login, password: credential.password, token };
        } else {
          throw new Error("Identifiants incorrects")
        }
      }
      )
    )
  }

}
