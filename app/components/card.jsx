import Image from "next/image"

const Card = () => {
    return(
        <div className=" flex flex-col items-center  text-[var(--textSoft)]">
            <p>
                11:00AM
            </p>
            <Image src="https://openweathermap.org/img/wn/10d@2x.png" width={100} height={100} />
            <p>24&deg;</p>
        </div>
    )
}

export default Card;