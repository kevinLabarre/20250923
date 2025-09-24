import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() handleDelete = new EventEmitter<INews>

  // Click sur le bouton de suppression
  handleDeleteBtn() {
    if (this.news.id)
      this.newsService.deleteOneNews(this.news.id).subscribe({
        next: (respApi) => this.handleDelete.emit(respApi),
        error: (err) => console.log("Erreur de suppression", err),
        complete: () => console.log("Requete terminée !")
      })
    else console.error("Pas d'id dans la news !")
  }

}
