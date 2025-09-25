import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareDataService } from '../../../service/shareData/share-data-service';

@Component({
  selector: 'app-update',
  imports: [],
  templateUrl: './update.html',
  styleUrl: './update.css'
})
export class Update implements OnInit, OnDestroy {

  constructor(private shareService: ShareDataService) { }

  private subscription = new Subscription();

  ngOnInit(): void {
    this.subscription = this.shareService.newsShareByShareService$.subscribe(data => console.log("Donnée récupérée dans 'update'", data));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
