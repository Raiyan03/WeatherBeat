import Image from "next/image";

const CurrCard = () => {
    return (
        <div className=" flex flex-col shadow-lg justify-between items-center py-2 w-fit bg-[var(--bg-soft)] rounded-lg text-[var(--text)]">
            <span>Couldy</span>
            <Image  src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" width={90} height={90} />
        </div>
    )
}

export default CurrCard;