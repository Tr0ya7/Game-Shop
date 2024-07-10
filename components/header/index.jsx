import Image from "next/image"

const Header = () => (
    <header className="flex justify-end m-7 items-center">
        <div className="flex m-5">
            <input className="min-w-[543px] rounded-full bg-[#525358] h-[45px] relative pl-12 text-2xl" placeholder="Type to search" />
            <Image className="absolute m-2" width={30} height={30} src="/icons/search.png" />
        </div>
        <div className="cursor-pointer flex gap-x-5 h-fit">
            <Image width={30} height={30} src="/icons/cart.png" />
            <Image width={30} height={30} src="/icons/bell.png" />
        </div>
    </header>
)

export default Header