import { IBook } from "./Book"

export interface ICategory {
    _id?: string,
    name: string,
    status: string
}

export interface ICategoryDetail {
    category: {
        _id?: string,
        name: string,
        status: string        
    },
    books: IBook[]
}