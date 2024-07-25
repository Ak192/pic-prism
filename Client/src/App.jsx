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


export default function App() {
  return (
    <>
    <div className="bg-[aliceblue]"  >    
      <Router>
       <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus/>}/>
          <Route path="/profile">
            <Route path="/profile/Buyer" element={<Buyer />} />
            <Route path="/profile/Saler" element={<Saler />} />
          </Route>
        </Routes>
      </Router>
    </div>
    <Footer/>
    </>
  )
}