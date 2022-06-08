export interface IProduct {
    _id?: string,
    name?: string,
    price?: number,
    image?: string,
    status?: number
}
export interface IProductCart {
    _id?: string,
    name?: string,
    price?: number,
    image?: string,
    quantity: number
}