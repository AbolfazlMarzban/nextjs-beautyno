import profile from "../../assets/images/background.png"

export default function CartItem({}){
    return(
        <div className="w-full border border-1 rounded-xl p-2  my-4">
            <ul className="flex items-center justify-between ">
                <li>
                    <div className="h-16 w-16 rounded-full bg-cover bg-center max-sm:h-8 max-sm:w-8" style={{'backgroundImage': `url(${profile})`}}>
                    </div>
                </li>
                <li>
                    <span className="text-md max-sm:text-xs">UserName</span>
                </li>
                <li>
                    <span className="text-md max-sm:text-xs">Service Name</span>
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