import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // Khai bào http để có đối tượng httpCLient tương tác với các phương thức API
  constructor(private http:HttpClient) { }

  getCategories = ():Observable<ICategory[]> => { // Observable giúp lắng nghe API trả về kq
    return this.http.get<ICategory[]>(environment.categories)
  }
  removeCategory = (id: string):Observable<ICategory> => { // Observable giúp lắng nghe API trả về kq
    return this.http.delete<ICategory>(`${environment.categories}/${id}`)
  }
  getCategory = (id: string):Observable<ICategory> => { // Observable giúp lắng nghe API trả về kq
    return this.http.get<ICategory>(`${environment.categories}/${id}`)
  }
  addCategory = (book: ICategory):Observable<ICategory> => {
    return this.http.post<ICategory>(`${environment.categories}`, book)
  }
  editCategory = (book: ICategory, id: string):Observable<ICategory> => {
    return this.http.put<ICategory>(`${environment.categories}/${id}`, book)
  }
}
