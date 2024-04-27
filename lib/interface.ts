export interface LatestProductProps {
    _id: string
    name: string
    price: number
    imageUrl: string
    slug: string
    categoryList: string
}

export interface SingleProductProps {
    _id: string
    name: string
    price: number
    description: string
    images: any
    slug: string
    categoryList: string
    currency: string
}

export interface ImageProps{
    images: any
}

export interface ProductCart {
    name: string
    description: string
    price: number
    currency: string
    image: any
}
