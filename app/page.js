import Image from "next/image";
import CurrTempPanel from "./components/CurrTempPanel";
import CondPanel from "./components/condPanel";
import ForcastCard from "./components/forcastCard";
import Tag from "./components/tag.jsx";

export default function Home() {
  return (
    <div className=" flex flex-col gap-2 p-2 min-h-screen bg-[var(--bg)] overflow-x-clip">
      <Tag day={"Today"} />
      <CurrTempPanel />
      <CondPanel />
      <Tag day={"Forcast"}/>     
      <ForcastCard />
      <ForcastCard />
      <ForcastCard />
      <ForcastCard />
    </div>
  );
}
