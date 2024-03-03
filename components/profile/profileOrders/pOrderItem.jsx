import React from 'react'
import profile from "../../../assets/images/background.png"

export default function POrderItem() {
  return (
    <div className="w-full border border-1 rounded-xl p-2 px-2 my-4">
    <ul className="flex items-center justify-between ">
        <li>
            <div className="h-8 w-8 rounded-full bg-cover bg-center" style={{'backgroundImage': `url(${profile})`}}>
            </div>
        </li>
        <li>
            <span className="text-md max-sm:text-xs">UserName</span>
        </li>
        <li>
            <span className="text-md max-sm:text-xs">ServiceName</span>
        </li>
        <li>
            <span className="text-md max-sm:text-xs">Service Date</span>
        </li>
        <li>
            <span className="text-md max-sm:text-xs">Service Time</span>
        </li>
    </ul>
</div>  
    )
}
