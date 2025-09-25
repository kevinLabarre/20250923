import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INews } from '../../interface/INews';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  // Sans utiliser une var d'environnement
  // private url: string = "http://localhost:3000/actualites"

  // Avec une var d'environnement
  private url: string = `${environment.url}/actualites`

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

  updateNews(news: INews): Observable<INews> {
    if (!news.id)
      throw new Error("Mise à jour impossible: la news n'a pas d'id")

    return this.http.put<INews>(`${this.url}/${news.id}`, news)
  }

}
