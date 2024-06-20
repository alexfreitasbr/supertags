'use client' 
import Header from "../componets/Header"
import Footer from "../componets/Footer"
import { LoginProvider } from "../context/loginContext"

export default function Layout({ children }: any) {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Header />
            <div className="flex justify-center  h-full">
                <LoginProvider>
                    <main className="flex justify-center mt-[72px] w-full max-w-7xl">
                        {children}
                    </main>
                </LoginProvider>
            </div>
            <Footer />
        </div>
    )
}
