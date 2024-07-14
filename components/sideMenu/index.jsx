import MenuItem from './menuItem'
import firstItens from './firstItens.json'
import secondItens from './secondItens.json'
import Image from 'next/image'

const SideMenu = () => (
    <section className="bg-black bg-opacity-50 min-h-screen min-w-[400px] flex">
        <section className="m-7 w-full relative">
            <p className="mb-5 font-bold text-4.5xl">
                SHOP
            </p>
            <hr />
            <MenuItem item={firstItens} />
            <hr />
            <MenuItem item={secondItens} />
            <hr />
            <div className="flex absolute items-center bottom-0 cursor-pointer">
                <Image width={30} height={30} src="/icons/chat.png" />
                <p className="ml-[13px]">
                    Friends & Chat
                </p>
            </div>
        </section>
    </section>
)

export default SideMenu