import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Buyer from "./pages/Buyer"
import Saler from "./pages/Saler"
import Header from "./component/Header"


export default function App() {
  return (
    <div>
    
      <Router>
       <Header/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signin />} />
          <Route path="/profile">
            <Route path="/profile/Buyer" element={<Buyer />} />
            <Route path="/profile/Saler" element={<Saler />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}