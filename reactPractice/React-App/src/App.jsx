

import { BrowserRouter, Route,  Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import './styles/style.css'
import HomeComponent from "./components/HomeComponent"
import ContactUs from "./components/ContactUs"
import Button from "./components/Button"


function App() {
  

  return (
    <>
    <BrowserRouter>
      <div className="App">
         
            <NavBar/>

           <Routes>
              <Route path="/" element={<HomeComponent/>}></Route>
              <Route path="/contactus" element={<ContactUs/>}></Route>
              <Route path="/button" element={<Button/>}></Route>

            </Routes>  
          
          
          
          
          
              
        
       
       
      </div>

      </BrowserRouter>  
    </>
  )
}

export default App
