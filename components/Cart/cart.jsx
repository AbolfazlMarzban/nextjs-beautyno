import Navbar from "../navbar"
import CartItems from "./cartItems"

export default function Cart({}){
    return(
        <div className='flex flex-col w-full h-full items-center justify-center'>
     
        <div className='w-full max-w-3xl flex flex-col items-center justify-center'>
            <div>
            <h2 className="text-xl font-bold">Cart</h2>
            </div>
            <CartItems/>
            <button
          className="mt-2 w-4/5 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Check Out
        </button>
         </div>   
          <div className='w-full'>
            <Navbar />
          </div>
        </div>
    )
}