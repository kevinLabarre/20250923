import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INews } from '../interface/INews';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  private url: string = "http://localhost:3000/actualites"

  getAllNews(): Observable<INews[]> {
    return this.http.get<INews[]>(this.url)
  }

  deleteOneNews(id: number): Observable<INews> {
    return this.http.delete<INews>(`${this.url}/${id}`)
  }

  // GetById
  getNewsById(id: number): Observable<INews> {
    return this.http.get<INews>(`${this.url}/${id}`)
  }

  addOneNews(news: INews): Observable<INews> {
    return this.http.post<INews>(this.url, news)
  }

}
