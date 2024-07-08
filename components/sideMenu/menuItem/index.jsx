import Image from 'next/image'

const MenuItem = ({ item }) => (
    item.map(
        (item) => (
            <div key={item.id} className="my-[23px] flex items-center cursor-pointer">
                <Image width={30} height={30} src={item.image} />
                <p className="ml-[13px]">
                    {item.description}
                </p>
            </div>
        )
    )
)

export default MenuItem