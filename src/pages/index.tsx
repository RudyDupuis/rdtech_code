import Nav from "@/components/Nav";
import HomeHeader from "@/components/home/HomeHeader";
import HomePresentation from "@/components/home/HomePresentation";
import HomeSkills from "@/components/home/HomeSkills";

export default function Home() {
  return (
    <main>
      <Nav />
      <HomeHeader />
      <HomePresentation />
      <HomeSkills />
    </main>
  );
}
