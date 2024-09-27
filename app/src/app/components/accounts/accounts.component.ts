import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AccountsService } from '../../services/accounts.service';
import { Account } from '../../interfaces/account.interface';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent {
  accounts: Account[] = [];
  exchangeRate: number = 0;

  constructor(private accountsService: AccountsService) {
    this.loadAccounts();
    this.loadExchangeRate();
  }

  loadAccounts(): void {
    this.accountsService.getAccounts().subscribe((data) => {
      this.accounts = data;
    });
  }

  loadExchangeRate(): void {
    this.accountsService.getExchangeRate().subscribe((data) => {
      this.exchangeRate = data.rate;
    });
  }
}
