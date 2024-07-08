import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'
import images from './images.json'

const Catalog = () => (
    <div className="flex">
        <Swiper spaceBetween={30} pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
            { images.map((image) => <SwiperSlide key={image.id}><Image className="h-[580px]" width={1252} height={580} src={image.image} /></SwiperSlide>) }
        </Swiper>
    </div>
)

export default Catalog