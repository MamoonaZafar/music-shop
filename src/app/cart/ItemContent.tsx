'use client'


import Link from "next/link"
import { formatPrice } from "../../../utils/formatPrice"
import { CartProductType } from "../product/[productId]/productDetails"
import { TruncateText } from "../../../utils/TruncateText"
import Image from "next/image"
import SetQuantity from "../components/Products/SetQuantity"
import { useCart } from "../../../hooks/useCart"


interface ItemContentProps{
    quantity: number
    SelectedImg: any
    name: string
    id: any
    price: number
    item: CartProductType
}    

const ItemContent: React.FC<ItemContentProps> = (item) => {
    const {handleRemoveProductFromCart, handleCartQtyIncrease, handleCartQtyDecrease} = useCart()
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-[1.5px] border-slate-200 py-4 items-center">
        <div className="col-span-2 justify-self-start flex gap-2 md:gap-4"> 
        <Link href={`/product/${item.id}`}>
            <div className="relative w-[70px] aspect-square">
                <Image src={item.SelectedImg.image} alt={item.name} fill className="object-contain"/>
            </div>
        </Link>
        <div className="flex flex-col justify-between">
        <Link href={`/product/${item.id}`}>
            {TruncateText(item.name)}
            <div>{item.SelectedImg.color}</div>
            <div className="w-[70px]">
                <button className="text-slate-500 underline" onClick={()=>handleRemoveProductFromCart(item.item)}>Remove</button>
            </div>
        </Link>
        </div>
        </div>
        <div className="justify-self-center">{formatPrice(item.price)}</div>
        <div className="justify-self-center">
            <SetQuantity cartCounter={true} cartProduct={item.item} handleQtyIncrease={()=>
                {handleCartQtyIncrease(item.item)}} handleQtyDecrease={()=>{handleCartQtyDecrease(item.item)}} />
        </div>
        <div className="justify-self-end font-semibold">{(item.price * item.quantity)}</div>
    </div>
  )
}

export default ItemContent