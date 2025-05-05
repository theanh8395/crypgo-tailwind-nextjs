import { Metadata } from "next";
import HeroSection from "@/components/organisms/home/Hero";
import WorkSection from "@/components/organisms/home/Work";

export const metadata: Metadata = {
  title: "CrypGo",
};

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <WorkSection />
    </main>
  );
}
