import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NewsService } from '../../service/news-service';
import { INews } from '../../interface/INews';
import { NewsCard } from "../../component/news-card/news-card";

@Component({
  selector: 'app-news-detail-page',
  imports: [NewsCard, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './news-detail-page.html',
  styleUrl: './news-detail-page.css'
})
export class NewsDetailPage implements OnInit {

  id: number = 0;

  news?: INews

  constructor(private activatedRoute: ActivatedRoute, private service: NewsService) {
    this.activatedRoute.params.subscribe(params => this.id = params['id']);
    // this.activatedRoute.params.subscribe(params => console.log(params));
  }
  ngOnInit(): void {
    if (this.id !== 0)
      this.service.getNewsById(this.id).subscribe((resp) => this.news = resp)
  }

  handleDelete(news: INews) {
    console.log("suppression !")
    if (this.news && this.news.id === news.id) {
      console.log("Dans le if !")
      this.news = undefined
    }

  }

}
