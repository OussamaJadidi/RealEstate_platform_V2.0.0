import {  Hero , LatestPosts, Value, CTA} from "@/components";
import { hash } from "bcryptjs";
export default async function Home() {
  return (
    <main className=" max-lg:!px-0  font-medium ">
      <Hero />
      <Value />
      <LatestPosts />
      <CTA />
    </main>
  );
}
