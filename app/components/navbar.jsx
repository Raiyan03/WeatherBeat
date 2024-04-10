"use client"

import { useState } from "react";
import { MdSunny } from "react-icons/md";
import Search from "./search";

const Navbar = () => {


    return (
        <div className=" flex z-10 fixed w-full h-15 justify-between bg-[var(--bg-soft)] text-[var(--text)] p-2 shadow-sm">
            <div className=" flex items-center gap-2 justify-between text-2xl w-fit">
                <h1>
                    Weather Beats
                </h1>
                <MdSunny className=" text-[#87CEEB]"/>
            </div>
            <Search/>
        </div>
    );
}

export default Navbar;