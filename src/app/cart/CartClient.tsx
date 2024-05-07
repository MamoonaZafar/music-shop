'use client'

import Link from "next/link"
import { useCart } from "../../../hooks/useCart"
import { MdArrowBack } from "react-icons/md"
import Heading from "../components/Heading"
import Button from "../components/Button"
import ItemContent from "./ItemContent"
import { formatPrice } from "../../../utils/formatPrice"

const CartClient = () => {
    const {cartProducts, handleClearCart, cartTotalAmount} = useCart()

    if(!cartProducts || cartProducts.length === 0){
        return(
            <div className="flex flex-col items-center">
                <div className="text-2xl">Your Cart is Empty</div>
                <div>
                    <Link href = {'/'} className="text-slate-500 flex items-center gap-1 mt-2">
                        <MdArrowBack/>
                    <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        )
    }
  return (
    <div>
        <Heading title ="Shopping Cart" center/>
        <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8 ">
            <div className="col-span-2 justify-self-start">PRODUCTS</div>
            <div className="justify-self-center">PRICE</div>
            <div className="justify-self-center">QUANTITY</div>
            <div className="justify-self-end">TOTAL</div>
        </div>
        <div>
            {cartProducts && cartProducts.map((item)=>{
                return <ItemContent key={item.id} item={item} price={item.price} id={item.id} name={item.name} SelectedImg={item.selectedImg.color} quantity={item.quantity}/>
            })}
        </div>
        <div className="border-t-[1.5px] border-slate-200 py-4 flex  justify-between gap-4">
            <div className="w-[90px]" >
                <Button label='Clear Cart' onClick={ ()=>{handleClearCart()}} small outline/>
            </div>
            <div className="text-sm flex flex-col gap-1 items-start">
                    <div className="flex justify-between w-full text-base font-semibold">
                    <span>Subtotal</span>
                    <span>{formatPrice(cartTotalAmount)}</span>
                    </div>
                    <p className="text-slate-500">Tax and Shipping calculate at checkout</p>
                    <Button label="Checkout" onClick = {()=>{

                    }}/>
                    <Link href = {'/'} className="text-slate-500 flex items-center gap-1 mt-2">
                        <MdArrowBack/>
                    <span>Continue Shopping</span>
                    </Link>
            </div>
        </div>
    </div>
  )
}

export default CartClient