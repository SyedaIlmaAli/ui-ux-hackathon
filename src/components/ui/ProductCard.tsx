import Image from 'next/image'
import React from 'react'

interface ProductCard {
    src: string, alt: string, title?: string, price?: string
}

const ProductCard = ({src, alt, title, price}: ProductCard) => {
  return (
    <div className='flex flex-col gap-2'>
      <div>
        <Image src={src} alt={alt} height={257.31} width={209.27}/>
      </div>
      <div>
        <h6 className='text-white text-[13.72px]'>{title}</h6>
        <p className='text-white text-[12.35px]'>{price}</p>
      </div>
    </div>
  )
}

export default ProductCard
