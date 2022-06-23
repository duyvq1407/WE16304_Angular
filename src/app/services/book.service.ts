import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBook } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // Khai bào http để có đối tượng httpCLient tương tác với các phương thức API
  constructor(private http:HttpClient) { }

  getBooks = ():Observable<IBook[]> => { // Observable giúp lắng nghe API trả về kq
    return this.http.get<IBook[]>(environment.books)
  }
  removeBook = (id: string):Observable<IBook> => { // Observable giúp lắng nghe API trả về kq
    return this.http.delete<IBook>(`${environment.books}/${id}`)
  }
  getBook = (id: string):Observable<IBook> => { // Observable giúp lắng nghe API trả về kq
    return this.http.get<IBook>(`${environment.books}/${id}`)
  }
  addBook = (book: IBook):Observable<IBook> => {
    return this.http.post<IBook>(`${environment.books}`, book)
  }
  editBook = (book: IBook, id: string):Observable<IBook> => {
    return this.http.put<IBook>(`${environment.books}/${id}`, book)
  }
  searchBook = (key: string):Observable<IBook[]> => {
    return this.http.get<IBook[]>(`${environment.books}/search?key=${key}`)
  }
}
