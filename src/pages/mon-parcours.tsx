import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import MyJourneyTimeline from "@/components/myjourney/MyJourneyTimeline";

export default function MonParcours() {
  return (
    <main>
      <Nav />

      <h1>Mon parcours</h1>

      <MyJourneyTimeline />

      <Footer />
    </main>
  );
}
