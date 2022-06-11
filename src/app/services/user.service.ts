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

  getUsers = (): Observable<IUser[]> => {
    return this.http.get<IUser[]>(`http://localhost:3001/api/users`)
  }
  getUser = (id:string): Observable<IUser> => {
    return this.http.get<IUser>(`http://localhost:3001/api/users/${id}`)
  }
  removeUser = (id:string): Observable<IUser> => {
    return this.http.delete<IUser>(`http://localhost:3001/api/users/${id}`)
  }
  editUsers = (user: IUser ,id:string): Observable<IUser> => {
    return this.http.put<IUser>(`http://localhost:3001/api/users/${id}`,user)
  }
  editStatus = (x: number, id: string): Observable<IUser> => {
    return this.editUsers({status: x}, id)
  }
}
