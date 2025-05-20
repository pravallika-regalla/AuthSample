import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((loggedIn) => {
      if (loggedIn) {
        this.auth.appState$.subscribe((state) => {
          const target = state?.target || '/dashboard';
          this.router.navigate([target]);
        });
      }
    });
  }
}
