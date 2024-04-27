"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

export default function ShoppingCart() {
  const { cartCount, shouldDisplayCart, handleCartClick } = useShoppingCart();
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
      <SheetContent className="sm:max-w-lg w-[80vw]">
        <SheetHeader>
          <SheetTitle>Shop Cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-6 flex-1 overflow-y-auto">
            <ul className="my-6 divide-y divide-slate-200">
              {cartCount === 0 ? (
                <h1 className="py-4">Cart is empty</h1>
              ) : (
                <h1>{cartCount}</h1>
              )}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
