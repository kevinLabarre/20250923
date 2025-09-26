import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccount } from '../../interface/IAccount';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  // constructor(private http: HttpClient) { }

  private http = inject(HttpClient)

  private baseUrl = environment.url

  getAllAccounts(): Observable<IAccount[]> {
    return this.http.get<IAccount[]>(`${this.baseUrl}/accounts`)
  }


}
