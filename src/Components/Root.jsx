import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Root = () => {
  return (
    <div className="w-sm md:w-2xl lg:w-6xl mx-auto">
       <Navbar></Navbar>
       <Outlet></Outlet>
       <Footer></Footer>
    </div>
  )
}

export default Root