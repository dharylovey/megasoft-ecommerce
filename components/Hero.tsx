import { getHeroImage } from "@/action/getHeroImage";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 3

export default async function Hero() {
    const data = await getHeroImage()
  return (
    <section className="mx-auto max-w-2xl sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-wrap mb-12 justify-between md:mb-20">
        <div className="flex w-full mb-6 flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="text-4xl font-bold mb-4 sm:text-5xl mb:text-6xl">
            Your Partner in Hygiene Excellence!
          </h1>
          <p className="max-w-md leading-relaxed text-slate-500 md:text-lg">
            Trust Megasoft for superior quality and unparalleled freshness in
            every product, ensuring your well-being with every use.
          </p>
        </div>
        <div className="flex mb-12 w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-20 -ml-12 overflow-hidden rounded-md bg-slate-100 shadow-md md:left-16 md:top-16 lg:ml-0">
            <Image 
            src={urlFor(data.image1).url()}
            alt="hero image"
            width={500}
            height={500}
            className="h-full w-full object-cover object-center"
            priority
            />
          </div>
          <div className="overflow-hidden rounded-md bg-slate-100 shadow-md">
            <Image 
              src={urlFor(data.image2).url()}
              alt=""
              width={500}
              height={500}
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>

        </div>
      </div>
      <div className="mx-auto flex items-center justify-center gap-6">
        <div className="flex h-12 w-[300px] divide-x overflow-hidden rounded-md border">
          <Link href='/Diaper' className="flex w-1/3 items-center justify-center text-slate-500 trasition duration-100 hover:bg-slate-200 active:bg-slate-300">
            Diaper
          </Link>
          <Link href='/Cherub' className="flex w-1/3 items-center justify-center text-slate-500 trasition duration-100 hover:bg-slate-200 active:bg-slate-300">
            Cherub
          </Link>
          <Link href='/Sisters' className="flex w-1/3 items-center justify-center text-slate-500 trasition duration-100 hover:bg-slate-200 active:bg-slate-300">
            Sisters
          </Link>
          <Link href='/Fasclean' className="flex w-1/3 items-center justify-center text-slate-500 trasition duration-100 hover:bg-slate-200 active:bg-slate-300">
            Fasclean
          </Link>
        </div>
      </div>
    </section>
  );
}
