import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { NewsService } from '../../service/news/news-service';
import { INews } from '../../interface/INews';
import { NewsList } from "../../component/news-list/news-list";

@Component({
  selector: 'app-news-with-signal',
  imports: [NewsList],
  templateUrl: './news-with-signal.html',
  styleUrl: './news-with-signal.css'
})
export class NewsWithSignal implements OnInit {
  // constructor(private service: NewsService) { }

  private service = inject(NewsService)

  news: WritableSignal<INews[]> = signal([])
  // news = signal([])

  ngOnInit(): void {
    this.loadNews()
  }

  loadNews() {
    this.service.getAllNews().subscribe({
      next: (resp) => this.news.set(resp),
      error: () => console.error("Erreur de chargement des news"),
    })
  }

  handleDelete(news: INews) {
    // Fonction qui récupère l'actu à supprimer

    this.news.update((prevNews) => prevNews.filter((n) => n.id !== news.id))
  }

}
