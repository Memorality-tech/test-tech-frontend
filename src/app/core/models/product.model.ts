import {Seller} from "./seller.model";

export interface Product {
  createdAt: string
  description: string
  id: any
  images: string[]
  imgLoad: string
  location: Location
  phone: string
  price: number
  seller: Seller
  title: string
}

export interface Location {
  delegation: string
  governorate: string
}
