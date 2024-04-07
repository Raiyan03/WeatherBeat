import Card from "./card";

const CurrTempPanel = () => {
    return (
        <div className="flex  items-center text-[var(--textSoft)] bg-[var(--bg-soft)] px-1 shadow-md rounded-lg">
            <div className=" flex flex-shrink-0 flex-grow-0 flex-col items-center sticky">
                <h1 className="text-5xl text-[var(--text)]">25&deg;</h1>
                <span>Feels like 23&deg;</span>
            </div>
            <div className=" flex overflow-x-auto justify-around">
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