import { client } from "@/lib/sanity";


export const dynamic = 'force-dynamic'
export async function getLatestProduct() {
  const query = `
    *[_type == 'product'][0...4]| order(_createdAt desc){
        _id,
          name,
          price,
          'slug': slug.current,
          'categoryList': category->name,
          'imageUrl': images[0].asset->url
      }
    `;

  const data = await client.fetch(query);
  return data;
}
