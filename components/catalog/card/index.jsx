import Image from 'next/image'
import images from './images.json'
import Tag from '../tag'

const Card = () => (
    <div className="flex justify-center gap-x-3 items-center pb-[44px]">
        {images.map((image) => (
            <div className="relative cursor-pointer" key={image.id}>
                <div className="absolute flex justify-end flex-col h-full px-8 pb-2.5 gap-y-[18px]">
                    <h1 className="font-bold text-3xl">
                        {image.description}
                    </h1>
                    <div className="flex gap-x-[11px]">
                        {image.categories.map((category) => <Tag key={category.id}>{category.category}</Tag>)}
                    </div>
                </div>
                <Image width={595} height={325} src={image.image} />
            </div>
        ))}
    </div>
)

export default Card