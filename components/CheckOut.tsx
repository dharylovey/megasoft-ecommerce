"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { ProductCart } from "@/lib/interface";
import { urlFor } from "@/lib/sanity";

export default function Checkout({
  currency,
  price,
  description,
  name,
  image,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return (
    <Button
      onClick={() => {
        {
          buyNow(product.price_id);
        }
      }}
      variant={'secondary'}
    >
      CheckOut Now
    </Button>
  );
}
