import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/Auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register = (user: IUser): Observable<IUser> => {
    return this.http.post<IUser>(`${environment.register}`, user)
  }

  login = (user: IUser): Observable<IUser> => {
    return this.http.post<IUser>(`${environment.login}`, user)
  }
}
