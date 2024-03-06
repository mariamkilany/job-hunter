import Categories from "@/components/landingPage/categories";
import Fields from "@/components/landingPage/fields";
import Hero from "@/components/landingPage/hero";
import Posting from "@/components/landingPage/posting";

export const metadata = {
  title: "Job Hunter",
};

export default function Home() {
  return <main>
      <Hero></Hero>
      <Categories></Categories>
      <Posting></Posting>
      <Fields></Fields>
    </main>;

}
