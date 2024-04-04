import Image from "next/image";
import Navbar from "@/app/components/navbar"; // Adjust the import path as necessary
import Card from "./components/card";
import CurrTempPanel from "./components/CurrTempPanel";


export default function Home() {
  return (
    
    <div className="  min-h-screen bg-[var(--bg)] overflow-x-clip">
      <Navbar />
      <CurrTempPanel />     
    </div>
  );
}
