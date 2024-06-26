"use client"

import Image from "next/image";

interface ProductCardProps{
    data:any
}

const ProductCard:React.FC<ProductCardProps> = ({data}) => {
    return ( 
        <div className="col-span-1 
                        border-[1.2px]
                        cursor-pointer
                        border-slate-200
                        bg-slate-50
                        rounded-sm
                        p-2
                        transition
                        hover:scale-105
                        text-center
                        text-sms">
            <div className="flex
                            flex-col
                            items-center
                            w-full
                            gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
                    <Image
                    fill
                    src={data.images[0].image}
                    alt="data.name"
                    className="w-full h-full object-contain"/>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
     );
}
 
export default ProductCard;