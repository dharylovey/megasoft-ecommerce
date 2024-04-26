import {  LatestProductProps } from '@/lib/interface'
import { getCategoryData } from '@/action/getCategoryData'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export const revalidate = 3;
export default async function CategoryPage({params}: {params: {category: string}}) {
    const data: LatestProductProps[]  = await getCategoryData(params.category)
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Latest Product for {params.category}
          </h2>
          
        </div>

        <div className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <Card
              key={product._id}
              className="flex flex-col w-full justify-center max-w-xs group relative bg-slate-100"
            >
              <div className="aspect-square w-full overflow-hidden rounded-md bg-slate-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageUrl}
                  alt="product image"
                  width={250}
                  height={250}
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full border-2"
                />
              </div>
              <CardHeader className="py-2 px-4">
                <CardTitle className="text-base line-clamp-2">
                  <Link href={`/products/${product.slug}`}>{product.name}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="py-2 px-4 mt-auto">
                <div className="flex items-center justify-between">
                  <p className="text-base text-slate-600">
                    {product.categoryList}
                  </p>
                  <p className="text-base text-slate-900">₱{product.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
