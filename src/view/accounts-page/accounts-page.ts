import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../service/account/account-service';
import { Observable } from 'rxjs';
import { IAccount } from '../../interface/IAccount';
import { AsyncPipe, CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-accounts-page',
  imports: [AsyncPipe, CurrencyPipe, DatePipe],
  templateUrl: './accounts-page.html',
  styleUrl: './accounts-page.css'
})
export class AccountsPage {

  account$: Observable<IAccount[]>

  constructor(private service: AccountService) {
    this.account$ = this.service.getAllAccounts()
  }

}
