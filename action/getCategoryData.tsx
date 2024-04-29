import { client } from "@/lib/sanity";


export const dynamic = 'force-dynamic'
export async function getCategoryData(category: string) {
  const query = `
    *[_type == 'product' && category->name == '${category}']{
          _id,
          'imageUrl': images[0].asset->url,
          price,
          name,
          'slug': slug.current,
          'categoryList': category->name
      }
    `;

  const data = await client.fetch(query);
  return data;
}
