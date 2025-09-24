import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail-page',
  imports: [],
  templateUrl: './news-detail-page.html',
  styleUrl: './news-detail-page.css'
})
export class NewsDetailPage {


  // Charger et afficher l'actualité correspondant à l'id de l'url


  id: number = 0;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => this.id = params['id']);
    // this.activatedRoute.params.subscribe(params => console.log(params));
  }

}
