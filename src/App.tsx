import NavbarSection from "./components/navbar"
import DashboardSection from "./components/dashboard-section"
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Dashboard from "./components/dashboard-section"
import Farmer from "./components/Farmer"
import Buyer from "./components/buyer"
import Products from "./components/Products"
import AiFarmer from "./components/AiFarmer"
import MarketPricing from "./components/MarketPricing"
import SecondDashboard from "./components/secondDashboard"



function App() {
  return (
    <div className="min-h-screen flex flex-col">
        <BrowserRouter>

<Routes>
  <Route path="/" element={<Dashboard/>} />
  <Route path="/dashboard" element={<SecondDashboard/>} />
  <Route path="/buyer" element={<Buyer/>} />
  <Route path="/ai" element={<AiFarmer/>} />
  <Route path="/pricing" element={<MarketPricing/>} />
  <Route path="/products" element={<Products/>} />
  <Route path="/dashboard" element={<Dashboard/>} />
  
</Routes>
</BrowserRouter>
{/* 
<Products/> */}
 
    </div>
  )
}

export default App

