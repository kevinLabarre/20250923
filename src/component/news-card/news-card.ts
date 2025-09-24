import { Component, Input } from '@angular/core';
import { INews } from '../../interface/INews';
import { NewsService } from '../../service/news-service';

@Component({
  selector: 'app-news-card',
  imports: [],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css'
})
export class NewsCard {

  constructor(private newsService: NewsService) { }

  @Input({ required: true }) news!: INews

  handleDelete() {
    if (this.news.id)
      this.newsService.deleteOneNews(this.news.id).subscribe({
        next: (respApi) => console.log("news supprimée !", respApi),
        error: (err) => console.log("Erreur de suppression", err),
        complete: () => console.log("Requete terminée !")
      })
    else console.error("Pas d'id dans la news !")
  }

}
