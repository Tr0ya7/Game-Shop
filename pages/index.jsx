import Catalog from "@/components/catalog"
import Header from "@/components/header"
import SideMenu from "@/components/sideMenu"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const Home = () => <main className={`flex main-wrapper black-opacity ${inter.className}`}><SideMenu /><section className="w-[90%]"><Header /><div className="flex justify-center"><Catalog /></div></section></main>

export default Home