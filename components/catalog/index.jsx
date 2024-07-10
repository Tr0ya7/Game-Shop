import Banner from './banner'
import Card from './card'

const Catalog = () => (
    <section className="flex flex-col items-center justify-center">
        <Banner />
        <div className="flex items-center justify-between w-full font-semibold">
            <h1 className="my-[19px] text-2xl">
                RECOMMENDED FOR YOU 🔥
            </h1>
            <p className="text-lg cursor-pointer">
                View All
            </p>
        </div>
        <Card />
    </section>
)

export default Catalog