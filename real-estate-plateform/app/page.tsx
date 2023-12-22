import Hero from "@/components/Hero"
import LatestPosts from "@/components/LatestPosts"
import Value from "@/components/Value"
import CTA from "@/components/CTA"

export default async function Home() {
  return (
    <main className=" max-lg:!px-0  font-medium ">
      {/* bg-sky-50 for the header only in home page */}
      <div className="absolute top-0 left-0 right-0 h-20 max-sm:h-22 bg-sky-50 z-[-1]"></div>
      <Hero />
      <LatestPosts />
      <Value />
      <CTA /> 
    </main>
  );
}
