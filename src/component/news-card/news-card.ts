import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INews } from '../../interface/INews';
import { NewsService } from '../../service/news/news-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-card',
  imports: [RouterLink],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css'
})
export class NewsCard {

  constructor(private newsService: NewsService, private router: Router) { }

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

  navigateToDetailPage() {
    this.router.navigate(['/actualite', this.news.id])
  }

}
