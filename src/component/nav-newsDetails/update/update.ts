import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareDataService } from '../../../service/shareData/share-data-service';
import { UpdateNewsForm } from "../../update-news-form/update-news-form";
import { INews } from '../../../interface/INews';

@Component({
  selector: 'app-update',
  imports: [UpdateNewsForm],
  templateUrl: './update.html',
  styleUrl: './update.css'
})
export class Update implements OnInit, OnDestroy {

  constructor(private shareService: ShareDataService) { }

  private subscription = new Subscription();

  news?: INews

  ngOnInit(): void {
    this.subscription = this.shareService.newsShareByShareService$.subscribe(data => this.news = data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
