import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INews } from '../../interface/INews';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private news = new BehaviorSubject<INews>({} as INews)

  newsShareByShareService$ = this.news.asObservable();

  shareNews(news: INews) {
    this.news.next(news)
  }

}
