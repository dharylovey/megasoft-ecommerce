import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BiCheckCircle } from "react-icons/bi";

export default function SuccesStripePage() {
  return (
    <div className="flex h-[80vh]">
        <div className="mt-32 md:max-w-[50vw] mx-auto">
            <BiCheckCircle className="w-20 h-20 mx-auto my-6 text-green-600"/>
            <div className="text-center">
                <h2 className="md:text-2xl text-base text-slate-900 font-semibold text-center">Payment done!</h2>
                <p className=" text-base text-slate-500 my-2 text-center">Thank you for your order!</p>
                <Button asChild className="mt-6">
                    <Link href='/'>
                        Continue shopping
                    </Link>
                </Button>
            </div>
        </div>
    </div>
  )
}
