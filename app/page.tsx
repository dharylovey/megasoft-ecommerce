import Hero from "@/components/Hero"
import LatestProduct from "@/components/LatestProduct";

export const dynamic = 'force-dynamic'
export default function Home() {
  return (
    <main className="px-4 pt-14 bg-white pb-5 sm:pb-8 lg:pb-10">
      <Hero />
      <LatestProduct />
    </main>
  );
}
