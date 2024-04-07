import Image from "next/image"

const Card = () => {
    return(
        <div className=" mx-10 flex flex-col items-center  text-[var(--textSoft)]">
            <p>
                11:00AM
            </p>
            <Image src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" width={100} height={100} />
            <p>24&deg;</p>
        </div>
    )
}

export default Card;