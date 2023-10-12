import {  Hero , LatestPosts, Value, CTA} from "@/components";
export default function Home() {
  return (
    <main className=" max-lg:!px-0  font-medium ">
      <Hero />
      <Value />
      <LatestPosts />
      <CTA />
    </main>
  );
}
