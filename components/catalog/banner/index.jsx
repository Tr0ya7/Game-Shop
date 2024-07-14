import Image from 'next/image'
import banners from './banners.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { useState } from 'react'
import Tag from '../tag'

const Banner = (props) => {
    const [currentImageSrc, setCurrentImageSrc] = useState('/banners/the witcher 3.png')

    const handleImageOnChange = (imageOnFocusIndex) => setCurrentImageSrc(banners[imageOnFocusIndex]?.src)
    
    props.currentImage(currentImageSrc)

    return (
        <Swiper className="w-[1202px]" slidesPerView={1} pagination={{ dynamicBullets: true }} modules={[Pagination]} onSlideChange={(image) => handleImageOnChange(image?.activeIndex)}>
            {banners?.map((banner) => (
                <SwiperSlide className="relative">
                    <div className="flex absolute gap-x-[11px] bottom-0 px-8 pb-2.5">
                        {banner.categories.map((category) => <Tag id={category.id}>{category.category}</Tag>)}
                    </div>
                    <Image className="h-[580px] rounded-lg cursor-pointer" width={1202} height={580} src={banner?.src} alt={banner?.name} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Banner