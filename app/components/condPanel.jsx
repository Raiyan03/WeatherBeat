"use client"

import CurrCard from "./currCard"
import CondCard from "./condCard"
import { MdVisibility, MdWaterDrop, MdOutlineWindPower } from "react-icons/md";
import { ImMeter } from "react-icons/im";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";


const CondPanel = () => {
    return (
        <div className=" flex  gap-5">
            <CurrCard />
            <div className="flex justify-between bg-[#87CEEB] text-black rounded-md shadow-lg flex-auto px-5">
                <CondCard cond={"Visibility"} val={"20km"} src={MdVisibility}  />
                <CondCard cond={"Humidity"} val={"35%"} src={MdWaterDrop}/>
                <CondCard cond={"Wind speed"} val={"11km/h"} src={MdOutlineWindPower}/>
                <CondCard cond={"Air Pressure"} val={"1007 pha"} src={ImMeter} />
                <CondCard cond={"Sunrise"} val={"12:30"} src={FiSunrise} />
                <CondCard cond={"Sunset"} val={"12:43"} src={FiSunset}/>
            </div>
        </div>
    )
}

export default CondPanel;