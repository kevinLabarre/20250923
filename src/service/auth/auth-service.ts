import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  login(credantial: { login: string, password: string }) {
    if (credantial.login !== '' && credantial.password !== '') {
      this.router.navigate(['admin'])
    }
  }

}
