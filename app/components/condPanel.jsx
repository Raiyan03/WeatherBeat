"use client"

import CurrCard from "./currCard"
import CondCard from "./condCard"
import { MdVisibility, MdWaterDrop, MdOutlineWindPower } from "react-icons/md";
import { ImMeter } from "react-icons/im";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import {intoTemp, intoTime, intoKM } from "../lib/_utils";

const CondPanel = (props) => {
    return (
        <div className="flex gap-5">
            <CurrCard desc={props.condition.current.weather[0].main} icon={props.condition.current.weather[0].icon}/>
            <div className="flex justify-between bg-[#87CEEB] text-black rounded-md shadow-lg flex-auto px-5">
                <CondCard cond={"Visibility"} val={intoKM(props.condition.current.visibility) + "KM"} src={MdVisibility}  />
                <CondCard cond={"Humidity"} val={props.condition.current.humidity + "%"} src={MdWaterDrop}/>
                <CondCard cond={"Wind speed"} val={intoTemp(props.condition.current.wind_speed) + "KM/H"} src={MdOutlineWindPower}/>
                <CondCard cond={"Air Pressure"} val={props.condition.current.pressure + "pha"} src={ImMeter} />
                <CondCard cond={"Sunrise"} val={intoTime(props.condition.current.sunrise)} src={FiSunrise} />
                <CondCard cond={"Sunset"} val={intoTime(props.condition.current.sunset)} src={FiSunset}/>
            </div>
        </div>
    )
}

export default CondPanel;