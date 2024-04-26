import { client } from "@/lib/sanity";

export const revalidate = 3;
export async function getSingleProduct(slug: string) {
  const query = `
  *[_type == 'product' && slug.current == '${slug}'][0]{
    _id,
    name,
    images,
      price,
    description,
      'slug': slug.current,
      'categoryList': category->name,
  }
    `;

  const data = await client.fetch(query);
  return data;
}
