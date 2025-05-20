import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  constructor(public auth: AuthService, @Inject(DOCUMENT) private doc: Document) {}

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin + '/AuthSample/' });
  }
}
