const Tag = ({ ...props }) => <div className="w-[87px] h-[29px] p-2 bg-gray-500 opacity-75 flex justify-center items-center rounded" key={ props.id }><p className="opacity-100 text-white">{ props.children }</p></div>

export default Tag