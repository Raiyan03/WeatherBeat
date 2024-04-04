import Card from "./card";

const CurrTempPanel = () => {
    return (
        <div className=" m-2 flex  items-center text-[var(--textSoft)] bg-[var(--bg-soft)] px-1 rounded-md w-fit max-w-full">
            <div className=" flex flex-shrink-0 flex-grow-0 flex-col items-center sticky">
                <h1 className="text-5xl">25&deg;</h1>
                <span>Feels like 23&deg;</span>
            </div>
            <div className=" flex flex-grow justify-evenly w-auto overflow-x-auto ">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default CurrTempPanel;