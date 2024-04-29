"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import Image from "next/image";
import { Button } from "./ui/button";

export default function ShoppingCart() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout
  } = useShoppingCart();

  const handleCheckoutClick = async (event: any) => {
    event.preventDefault();
    try {
      const result = await redirectToCheckout();
      if(result?.error){
        console.log(result?.error)
      }
    } catch (error) {
      console.log(error)
    }
  }

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
                <>
                  {Object.values(cartDetails ?? {}).map((product) => (
                    <li
                      key={product._id}
                      className="flex py-6 overflow-hidden rounded-md border-slate-200"
                    >
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-slate-200">
                        <Image
                          src={product.image as string}
                          alt={product.name}
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-slate-900">
                            <h3>{product.name}</h3>
                            <p className="ml-4">₱{product.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-slate-500 line-clamp-2">
                            {product.description}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm mt-3">
                          <p className="text-slate-500">
                            Qty: {product.quantity}
                          </p>

                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-primary hover:text-primary/80"
                              onClick={() => removeItem(product.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <div className="border-t border-slate-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-slate-900">
              <p>Subtotal</p>
              <p>₱{totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-slate-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6 ">
              <Button className="w-full" onClick={handleCheckoutClick}>Checkout</Button>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-slate-500">
              <p>
                or{" "}
                <button
                  type="button"
                  className="font-medium text-primary hover:text-primary/80"
                  onClick={() => handleCartClick()}
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
