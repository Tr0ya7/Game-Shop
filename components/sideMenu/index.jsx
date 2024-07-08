import MenuItem from './menuItem'
import firstItens from './firstItens.json'
import secondItens from './secondItens.json'
import Image from 'next/image'

const SideMenu = () => (
    <section className="bg-black bg-opacity-50 min-h-screen absolute min-w-[300px]">
        <section className="m-7">
            <p className="mb-5 bold text-[40px]">
                SHOP
            </p>
            <hr />
            <MenuItem item={firstItens} />
            <hr />
            <MenuItem item={secondItens} />
            <hr />
            <div className="flex items-center justify-end h-full absolute">
                <Image width={30} height={30} src="/icons/chat.png" />
                <p className="ml-[13px]">
                    Friends & Chat
                </p>
            </div>
        </section>
    </section>
)

export default SideMenu