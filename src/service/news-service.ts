import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INews } from '../interface/INews';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/actualites"

  getAllNews(): Observable<INews[]> {
    return this.http.get<INews[]>(this.url)
  }

}
