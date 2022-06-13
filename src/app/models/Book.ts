export interface IBook {
    _id?: string,
    name?: string,
    price?: number,
    sale_price?: number,
    description?: string,
    image_url?: string,
    category_id?: string,
    status?: number
}
export interface IBookCart {
    _id?: string,
    name?: string,
    price?: number,
    image_url?: string,
    sale_price?: number,
    quantity?: number
}

