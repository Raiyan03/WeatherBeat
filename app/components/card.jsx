import Image from "next/image"

const Card = (props) => {
    const iconURL = `https://openweathermap.org/img/wn/${props.icon}.png`
    return(
        <div className=" mx-30 flex flex-col items-center  text-[var(--textSoft)]">
            <p>
                {props.time}
            </p>
            <Image src={iconURL} alt="weather icon" width={150} height={150} />
            <p>{props.temp}&deg;</p>
        </div>
    )
}

export default Card;