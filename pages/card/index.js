import React from "react";
import Image from "next/image";

const Card = (props) => {
    return <div className="bg-white rounded-lg mb-2 md:ml-8 md:mr-8 shadow-md p-8">
        <h2 className="text-xl font-semibold mt-2">{props.title}</h2>
        <h4 className="text-gray-400 font-bold">{props.company}</h4>
        <div className="mt-2 flex"> <Image width={20} height={20} className="mr-8" src="/house-door.svg"/><p>{props.location}</p></div>
        <div className="grid grid-flow-col grid-rows-2 mt-4 gap-2">
            <div className="mt-2"><p>{props.statringDate}</p></div>
            <div className="mt-2"><p>{props.stipend}</p></div>
            <div className="mt-2"><p>{props.duration}</p></div>
            <div className="mt-2"><p>{props.deadline}</p></div>
        </div>
        <p className="mt-4 text-blue-400 cursor-pointer font-bold text-right">View Details &#62;</p>
    </div>
}
export default Card;