import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Variaveis
  baseUrl = 'http://localhost:5000/api/user/';
  JwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http
      .post(`${this.baseUrl}Login`, model).pipe(
        map((
          (response: any) => {
            const user = response;

            if (user) {
              localStorage.setItem('token', user.token);
              this.decodedToken = this.JwtHelper.decodeToken(user.token);
              sessionStorage.setItem('username', this.decodedToken.unique_name);
            }
          }
        ))
      );
  }

  register(model: any) {
    return this.http
      .post(`${this.baseUrl}Register`, model);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.JwtHelper.isTokenExpired(token);
  }

}
