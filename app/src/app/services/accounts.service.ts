import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../interfaces/account.interface';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.apiUrl}/accounts`);
  }

  getExchangeRate(): Observable<{ rate: number }> {
    return this.http.get<{ rate: number }>(`${this.apiUrl}/coingecko/exchange-rate`);
  }
}
