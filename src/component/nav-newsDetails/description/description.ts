import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShareDataService } from '../../../service/shareData/share-data-service';
import { INews } from '../../../interface/INews';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-description',
  imports: [],
  templateUrl: './description.html',
  styleUrl: './description.css'
})
export class Description implements OnInit, OnDestroy {
  constructor(private shareService: ShareDataService) { }

  news?: INews

  // Avec les observables, nous devons gérer nos 'abonnements'
  // Attention ! -> Pas besoin de le faire avec les observables de HttpClient
  private subscription = new Subscription();

  ngOnInit(): void {
    this.subscription = this.shareService.newsShareByShareService$.subscribe(data => this.news = data);
  }

  ngOnDestroy(): void {
    console.log('Destruction du composant !')
    this.subscription.unsubscribe();
  }

}
