import { getSingleProduct } from "@/action/getSingleProduct";
import Gallery from "@/components/Gallery";
import { Button } from "@/components/ui/button";
import { SingleProductProps } from "@/lib/interface";
import { BsTruck } from "react-icons/bs";
import { PiStarThin } from "react-icons/pi";

export const revalidate = 3;
export default async function page({ params }: { params: { slug: string } }) {
  const data: SingleProductProps = await getSingleProduct(params.slug);
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Gallery images={data.images} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <p className=" mb-1 text-base font-bold tracking-tight text-slate-600">
                {data.categoryList}
              </p>
              <h2 className="text-2xl font-bold text-slate-900 lg:text3xl">{data.name}</h2>
            </div>

            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button variant='outline' className="rounded-full text-primary gap-x-2">
                  <span className="text-sm">5.0</span>
                  <PiStarThin className="h-4 w-4"/>
              </Button>

              <span className="text-sm text-slate-500 transition duration-100">0 Rating</span>
            </div>
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-slate-900 md:text-2xl items-center flex ">₱{data.price}</span>
                <span className="text-red-500 line-through -mb-0.5">{data.price + 40}</span>
              </div>
              <span className="text-sm text-slate-500">Include Vat plus shipping</span>
            </div>
            <div className="mb-6 flex item-center gap-2 text-slate-500">
              <BsTruck className="w-5 h-5" />
              <span className="text-sm items-center flex gap-2 text-slate-500">5-7 Days Shipping</span>
            </div>
            <div className="flex gap-3 ">
              <Button>Add to bag</Button>
              <Button variant={"secondary"}>Check out now</Button>
            </div>
            <p className="mt-12 text-base text-slate-500 tracking-wide">{data.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
