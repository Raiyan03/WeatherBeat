"use client"
import Image from 'next/image';

const CondCard = (props) => {
    const Icon = props.src; // Store the icon component in a variable

    return (
        <div className='flex flex-col justify-around items-center'>
            <span>{props.cond}</span>
            {/* Render the icon component */}
            {Icon && <Icon className=" h-6 w-6"/>}
            <span>{props.val}</span>
        </div>
    )
}

export default CondCard;
