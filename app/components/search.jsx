"use client"
import { MdGpsFixed, MdLocationPin, MdSearch  } from "react-icons/md";

const Search = () => {
    return (
        <div className=" flex items-center gap-2">
            <MdGpsFixed />
            <div className="flex items-center">
                <MdLocationPin />
                <p className="text-[var(--textSoft)]" >City</p>
            </div>
            <form action="">
                <input type="text" placeholder="City name" className=" bg-[#2e374a] p-1 border-none focus: outline-none rounded-[0.5rem]" />
                <button>
                </button>
            </form>
        </div>
    )
}

export default Search;