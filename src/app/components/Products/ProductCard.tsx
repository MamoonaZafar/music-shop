'use client'

import Image from "next/image"
import { TruncateText } from "../../../../utils/TruncateText"
import { formatPrice } from "../../../../utils/formatPrice"
import { Rating } from "@mui/material"
import { useRouter } from "next/navigation"


interface ProductCardProps{
    data: any
}

const ProductCard : React.FC<ProductCardProps>= ({data}) => {

    const router = useRouter();

    const productRating = data.reviews.reduce((acc:number, item:any)=> item.rating + acc, 0) / data.reviews.length

  return (
    <div onClick={()=>router.push(`/product/${data.id}`)}
         className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-smp-2 transition hover:scale-105 text-center text-sm pt-10 pb-10">
        <div className="flex flex-col items-center w-full gap-2">
            <div className="aspect-square overflow-hidden relative w-full">
                <Image
                src={data.images[0].image}
                alt={data.name}
                 fill 
                 className="w-full h-full object-contain"/>
            </div>
            <div className="mt-4">
                {TruncateText(data.name)}
            </div>
            <div>
                <Rating value={productRating} readOnly/>
            </div>
            <div>
                {data.reviews.length} reviews
            </div>
            <div className="font-semibold">{formatPrice(data.price)}</div>
        </div>
    </div>
  )
}

export default ProductCard