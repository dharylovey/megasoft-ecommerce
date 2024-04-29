'use client'

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { ProductCart } from "@/lib/interface";
import { urlFor } from "@/lib/sanity";

export default function AddToBag({currency, price, description, name, image, price_id}: ProductCart) {
    const {addItem, handleCartClick} = useShoppingCart()
    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id
    }
  return <Button onClick={() => {{
    addItem(product), handleCartClick()
  }}}>Add Cart</Button>;
}
