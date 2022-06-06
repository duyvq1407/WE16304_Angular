import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeUser } from '../models/Auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register = (user: TypeUser): Observable<TypeUser> => {
    return this.http.post<TypeUser>(`${environment.register}`, user)
  }

  login = (user: TypeUser): Observable<TypeUser> => {
    return this.http.post<TypeUser>(`${environment.login}`, user)
  }
}
