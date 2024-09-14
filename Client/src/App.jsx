import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Buyer from "./pages/Buyer"
import Saler from "./pages/Saler"
import Header from "./component/Header"
import Aboutus from "./pages/Aboutus"
import Contactus from "./pages/Contactus"
import Footer from "./component/Footer"
import ProtectRoute from "./component/ProtectRoute"
import PageNotFound from "./pages/PageNotFound"


export default function App() {
  return (
    <>
      <div className="relative h-[100vh]" >
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/signup" element={<ProtectRoute children={<Signin />} requiresAuth={false} />} />
            <Route path="/login" element={<ProtectRoute children={<Login />} requiresAuth={false} />} />
            <Route path="/profile/Buyer" element={<ProtectRoute children={<Buyer />} />} />
            <Route path="/profile/Saller" element={<ProtectRoute children={<Saler />} />} />
            <Route path="*" element={<PageNotFound />} /> 
          </Routes>
          <Footer />
        </Router>
      </div>

    </>
  )
}