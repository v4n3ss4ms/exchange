import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AccountsComponent } from './components/accounts/accounts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AccountsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
