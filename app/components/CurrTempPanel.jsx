"use client"

import Card from "./card";
import {intoTemp} from "../lib/_utils";
import { intoTime } from "../lib/_utils";
import { useState } from "react";

import {getHourly} from "../lib/getHourly";
const CurrTempPanel = ( { weather }) => {
    console.log(weather);
    const hourly = getHourly(weather.hourly);
    
    console.log(hourly);
    return (
        
        <div className="flex py-2 items-center text-[var(--textSoft)] bg-[var(--bg-soft)] px-1 shadow-md rounded-lg">
            <div className=" flex flex-shrink-0 flex-grow-0 flex-col items-center sticky">
                <h1 className="text-5xl text-[var(--text)]">{intoTemp(weather.current.temp)}&deg;</h1>
                <span>Feels like {intoTemp(weather.current.feels_like)}&deg;</span>
            </div>
            <div className=" flex overflow-x-auto justify-around">
                { hourly.map(( hour, index ) => {
                    return ( <Card key={index} time={intoTime(hour.dt)} temp={intoTemp(hour.temp)} icon={hour.weather[0].icon}/> )
                }) }
            </div>
        </div>
    );
}

export default CurrTempPanel;