"use client"

import Image from "next/image";
import CondCard from "./condCard";
import { MdVisibility, MdWaterDrop, MdOutlineWindPower } from "react-icons/md";
import { ImMeter } from "react-icons/im";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";


const ForcastCard = (props) => {
    return (
        <div className=" flex w-full  gap-5 items-center  bg-[var(--bg-soft)] rounded-lg shadow-lg">
            <div className=" flex flex-col items-center">
                <Image src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" width={90} height={90} />
                <span>
                    date
                </span>
            </div>
            <div className="flex flex-col flex-1 items-center justify-center">
                <h1 className="text-5xl">20&deg;</h1>
                <span className=" text-[12px] font-light"> Feels like 15&deg; </span>
                <p>Cloudy</p>
            </div>
            <div className="flex justify-between h-40 w-full text-[var(--textSoft)]">
                <CondCard cond={"Visibility"} val={"20km"} src={MdVisibility}  />
                <CondCard cond={"Humidity"} val={"35%"} src={MdWaterDrop}/>
                <CondCard cond={"Wind speed"} val={"11km/h"} src={MdOutlineWindPower}/>
                <CondCard cond={"Air Pressure"} val={"1007 pha"} src={ImMeter} />
                <CondCard cond={"Sunrise"} val={"12:30"} src={FiSunrise} />
                <CondCard cond={"Sunset"} val={"12:43"} src={FiSunset}/>
            </div>
        </div>
    );
}

export default ForcastCard;