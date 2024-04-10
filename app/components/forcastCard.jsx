"use client"

import Image from "next/image";
import CondCard from "./condCard";
import { MdVisibility, MdWaterDrop, MdOutlineWindPower } from "react-icons/md";
import { ImMeter } from "react-icons/im";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { intoDate, intoTime, intoTemp } from "../lib/_utils";


const ForcastCard = (props) => {
    const iconURL = `https://openweathermap.org/img/wn/${props.day.weather[0].icon}.png`
    
    return (
        <div className=" flex w-full  gap-5 items-center  bg-[var(--bg-soft)] rounded-lg shadow-lg">
            <div className=" flex flex-col items-center">
                <Image src={iconURL} alt="weather icon" width={90} height={90} />
                <span>
                    {intoDate(props.day.dt)}
                </span>
            </div>
            <div className="flex flex-col flex-1 items-center justify-center">
                <h1 className="text-5xl">{intoTemp(props.day.temp.day)}&deg;</h1>
                <span className=" text-[12px] font-light"> Feels like {intoTemp(props.day.feels_like.day)}&deg; </span>
                <p>{props.day.weather[0].main}</p>
            </div>
            <div className="flex justify-between h-40 w-full text-[var(--textSoft)]">
                <CondCard cond={"Humidity"} val={props.day.humidity + "%"} src={MdWaterDrop}/>
                <CondCard cond={"Wind speed"} val={intoTemp(props.day.wind_speed) + "KM/H"} src={MdOutlineWindPower}/>
                <CondCard cond={"Air Pressure"} val={props.day.pressure + " pha"} src={ImMeter} />
                <CondCard cond={"Sunrise"} val={intoTime(props.day.sunrise)} src={FiSunrise} />
                <CondCard cond={"Sunset"} val={intoTime(props.day.sunset)} src={FiSunset}/>
            </div>
        </div>
    );
}

export default ForcastCard;