import { IBook } from "./Book"

export interface ICategory {
    _id?: string,
    name?: string,
    status: number
}

export interface ICategoryDetail {
    category: {
        _id?: string,
        name: string,
        status: number        
    },
    books: IBook[]
}