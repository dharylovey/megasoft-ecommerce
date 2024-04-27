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
        successUrl="https://localhost:3000/success"
        cancelUrl="https://localhost:3000/error"
        currency="PHP"
        billingAddressCollection={true}
        shouldPersist={true}
        language="en-US"
      >
        {children}
      </CartProvider>
    );
  }
}
