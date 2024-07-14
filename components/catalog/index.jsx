import { useState } from 'react'
import Banner from './banner'
import Card from './card'

const Catalog = (props) => {
    const [bannerImage, setBannerImage] = useState('')
    const [cardImage, setCardImage] = useState('')

    if (cardImage.length > 0) props.currentBg(cardImage)
    else props.currentBg(bannerImage)

    return (
        <section className="flex flex-col items-center justify-center">
            <Banner currentImage={((image) => setBannerImage(image))} />
            <div className="flex items-center justify-between w-full font-semibold">
                <h1 className="my-[19px] text-2xl">
                    RECOMMENDED FOR YOU 🔥
                </h1>
                <p className="text-lg cursor-pointer">
                    View All
                </p>
            </div>
            <Card imageOnClick={(image) => setCardImage(image)} />
        </section>
    )
}

export default Catalog