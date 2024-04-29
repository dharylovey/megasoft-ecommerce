import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LuAlertTriangle } from "react-icons/lu";

export default function ErrorStripePage() {
  return (
    <div className="py-10 flex flex-col justify-center items-center h-[80vh] gap-4">
      <h1 className="text-3xl text-slate-900">Something went wrong</h1>
      <Button className="flex justify-center gap-2">
        <LuAlertTriangle className="w-5 h-5 text-white" />
        <Link href="/"> Go Home</Link>
      </Button>
    </div>
  );
}
