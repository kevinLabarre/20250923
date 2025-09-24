import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail-page',
  imports: [],
  templateUrl: './news-detail-page.html',
  styleUrl: './news-detail-page.css'
})
export class NewsDetailPage {

  slug: string = "";

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => this.slug = params['slug']);
    // this.activatedRoute.params.subscribe(params => console.log(params));
  }

}
