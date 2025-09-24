import { Component } from '@angular/core';
import { NewsService } from '../../service/news-service';

@Component({
  selector: 'app-news-page',
  imports: [],
  templateUrl: './news-page.html',
  styleUrl: './news-page.css'
})
export class NewsPage {
  constructor(private newsService: NewsService) {
    // this.newsService.getAllNews().subscribe((respApi) => console.log(respApi))

    this.newsService.getAllNews().subscribe({
      next: (respApi) => console.log(respApi), // s'exécutera uniquement si on a une réponse OK
      error: (err) => console.log(err),  // s'exécutera uniquement si on a une erreur
      complete: () => console.log("Requete terminée !")
    })

  }

}
