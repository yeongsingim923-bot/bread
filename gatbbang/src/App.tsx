import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import About from "./pages/About"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import BreadDetail from "./pages/BreadDetail"
import Visit from "./pages/Visit"

function App() {
 

    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/menu/:id" element={<BreadDetail />} />
                <Route path="/visit" element={<Visit />} />
            </Route>
        </Routes>
    )
}

export default App
