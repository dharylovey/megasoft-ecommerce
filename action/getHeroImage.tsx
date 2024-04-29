import { client } from "@/lib/sanity"


export const dynamic = 'force-dynamic'
export async function getHeroImage() {
    const query = `*[_type == 'heroImage'][0]`

    const data = await client.fetch(query)
    return data
}