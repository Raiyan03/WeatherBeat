"use client"

import CurrTempPanel from "./components/CurrTempPanel";
import CondPanel from "./components/condPanel";
import ForcastCard from "./components/forcastCard";
import Tag from "./components/tag.jsx";
import { useSearchContext } from "@/app/components/searchContext";
import { getWeather } from "./lib/getWeather";
import { useState } from "react";
import { useEffect } from "react";
import { getWeatherByCity } from "./lib/getWeatherByCity";


export default function Home() {


  console.log("starting")
  const { city, lat, lon, setLat, setLon } = useSearchContext();

  const [weather, setWeather] = useState( null );


  const fetchWeather = async () =>{
    if (lat != null && lon != null){
      const obj = await getWeather(lat, lon);
      setWeather(obj);
    }
  }

  useEffect(() => {
    fetchWeather();
  },[lat, lon]);
  console.log(weather);
  return (
      weather ?     
      <div className=" flex flex-col gap-2 p-2 min-h-screen bg-[var(--bg)] overflow-x-clip">
        <Tag day={"Today"} />
        <CurrTempPanel weather={ weather}/>
        <CondPanel conditions = { weather }/>
        <Tag day={"Forcast"}/>
        <ForcastCard />
        <ForcastCard />
        <ForcastCard />
        <ForcastCard />
    </div>
    : 
    <div className=" flex flex-col gap-2 p-2 min-h-screen bg-[var(--bg)] overflow-x-clip">
      <h1>Loading...</h1>
    </div>        
  );
}
