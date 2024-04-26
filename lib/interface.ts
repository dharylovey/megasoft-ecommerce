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
}

export interface ImageProps{
    images: any
}
