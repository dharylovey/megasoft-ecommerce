'use client'

import { CartProvider } from "use-shopping-cart";

export default function ShopProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  {
    return (
      <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
        successUrl="https://megasoft-shop.vercel.app/stripe/success"
        cancelUrl="https://megasoft-shop.vercel.app/stripe/error"
        currency="PHP"
        billingAddressCollection={false}
        shouldPersist={true}
        language="en-US"
      >
        {children}
      </CartProvider>
    );
  }
}
