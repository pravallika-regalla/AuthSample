// ✅ auth-routing.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';



const config = {
  domain: 'dev-gwrovjmwec7k1moz.us.auth0.com',
  clientId: 'jxiNuZ67b43Z4uL14r60ocai98BKdQp2',
  redirectUri: 'https://pravallika-regalla.github.io/AuthSample/home',
  useRefreshTokens: true,
  cacheLocation: 'localstorage' as 'localstorage', // ✅ Fix for TS typing
  httpInterceptor: {
    allowedList: ['/api/*']
  }
};


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AuthModule.forRoot(config)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }
  ]
})
export class AuthRoutingModule {}