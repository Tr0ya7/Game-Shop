import Catalog from "@/components/catalog"
import Header from "@/components/header"
import SideMenu from "@/components/sideMenu"
import { Inter } from "next/font/google"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

const Home = () => {
    const [bgImage, setBgImage] = useState('')

    return (
        <main className={`flex main-wrapper black-opacity relative ${inter.className}`}>
            <SideMenu />
            <section className="w-5/6">
                <Header />
                <div className="flex justify-center">
                    <Catalog currentBg={(image) => setBgImage(image)} />
                </div>
            </section>
            <style jsx>
                {`
                    .main-wrapper::before {
                        content: "";
                        top: -10px;
                        left: -10px;
                        width: 101%;
                        height: 101%;
                        background-image: url("${bgImage}");
                        background-size: cover;
                        filter: blur(5px);
                        z-index: -1;
                        transition-duration: 500ms;
                        position: fixed;
                    }
                `}
            </style>
        </main>
    )
}

export default Home