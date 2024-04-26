"use client";
import { ImageProps } from "@/lib/interface";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { useState } from "react";

export default function Gallery({ images }: ImageProps) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleClick = (image: ImageProps) => {
    setCurrentImage(image);
  }
  return (
    <div className="grid gap-4 lg:flex">
      <div className="relative overflow-hidden rounded-md bg-slate-100 lg:col-span-4">
        <Image
          src={urlFor(currentImage).url()}
          alt="image"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
          priority
        />
        <span className="absolute top-0 right-0 rounded-bl-md bg-primary px-4 py-1 text-xs font-bold text-white">
            SALE
        </span>
      </div>
      <div className=" flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: ImageProps, idx: any) => (
          <div key={idx} className="overflow-hidden rounded-md bg-slate-100">
            <Image
              src={urlFor(image).url()}
              alt="image"
              width={100}
              height={100}
              className="h-full w-full object-cover object-center cursor-pointer"
              priority
              onClick={() => handleClick(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
