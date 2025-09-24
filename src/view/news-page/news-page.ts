import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news-service';
import { INews } from '../../interface/INews';
import { NewsList } from "../../component/news-list/news-list";

@Component({
  selector: 'app-news-page',
  imports: [NewsList],
  templateUrl: './news-page.html',
  styleUrl: './news-page.css'
})
export class NewsPage implements OnInit {

  news?: INews[]

  constructor(private newsService: NewsService) {
  }

  // On utilise le ngOninit pour charger des données
  ngOnInit(): void {
    // this.newsService.getAllNews().subscribe((respApi) => console.log(respApi))
    this.newsService.getAllNews().subscribe({
      next: (respApi) => this.news = respApi, // s'exécutera uniquement si on a une réponse OK
      error: (err) => console.log(err),  // s'exécutera uniquement si on a une erreur
      complete: () => console.log("Requete terminée !")
    })
  }

}
