import { MdSunny } from "react-icons/md";
import Search from "./search";

const Navbar = () => {
    return (
        <div className=" flex justify-between bg-[var(--bg-soft)] text-[var(--text)] p-2 shadow-sm">
            <div className=" flex items-center gap-2 justify-between text-2xl w-fit">
                <h1>
                    Weather Beats
                </h1>
                <MdSunny className=" text-yellow-400"/>
            </div>
            <Search />
        </div>
    );
}

export default Navbar;