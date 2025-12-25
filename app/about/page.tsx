// import Card from "@/AboutComponet/Card";
/// import Cultivated from "@/AboutComponet/Cultivated";
import Q2 from "../AboutComponet/Q2";
import Cultivated from "../AboutComponet/Cultivated";
import Card from "../AboutComponet/Card";
import Timeline from "../AboutComponet/Timeline";
export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Cultivated></Cultivated>
        <Timeline></Timeline>
        <Q2 />
        <Card />
      </main>
    </>
  );
}
