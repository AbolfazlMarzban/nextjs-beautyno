import Navbar from "../navbar"
import FavItems from "./favItems"

export default function FavouritesPage({}){
    return(
        <div className='flex flex-col h-full items-center justify-center'>
     
        <div className='flex flex-col w-full max-w-3xl items-center justify-center'>
            <div>
            <h2 className="text-xl font-bold">Favourites</h2>
            </div>
            <FavItems />
         </div>   
         <div className="w-full">
            <Navbar />
          </div>
        </div>
    )
}