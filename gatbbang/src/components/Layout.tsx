import { Outlet, useLocation } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import { useEffect } from "react"

function Layout() {
    const { pathname , hash } = useLocation()

    useEffect(() => {
        if (hash) {
            document.getElementById(hash.slice(1))?.scrollIntoView()
            return
        }
        window.scrollTo(0,0)
    }, [ pathname , hash ] )

    return(
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout