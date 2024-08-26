import Hero from "@/components/Hero/Hero";
import SocialOptions from "@/components/Hero/SocialOptions";
import SocialQuote from "@/components/Hero/SocialQuote";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialQuote />
      <SocialOptions />
    </main>
  );
}
