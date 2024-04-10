import Image from "next/image";

const CurrCard = (props) => {
    const iconURL = `https://openweathermap.org/img/wn/${props.icon}.png`
    return (
        <div className=" flex flex-col shadow-lg justify-between items-center py-2 w-fit bg-[var(--bg-soft)] rounded-lg text-[var(--text)]">
            <span>{props.desc}</span>
            <Image  src={iconURL} alt="weather icon" width={90} height={90} />
        </div>
    )
}

export default CurrCard;