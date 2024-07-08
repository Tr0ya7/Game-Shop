import Catalog from "@/components/catalog"
import Header from "@/components/header"
import SideMenu from "@/components/sideMenu"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const Home = () => <><main className={`flex min-h-screen flex-col justify-between bg-gray-500 ${inter.className}`}><SideMenu /><Header /><Catalog /></main></>

export default Home