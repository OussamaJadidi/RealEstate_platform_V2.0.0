import {  Hero , LatestPosts, Value} from "@/components";
export default function Home() {
  return (
    <main className=" max-lg:!px-0  font-medium ">
      <Hero />
      <Value />
      <LatestPosts />
    </main>
  );
}
