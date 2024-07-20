
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="navbar-div">
       
       <div className="heading" id ="item1">
            <h3>Navbar</h3>
       </div>

       <div className="sections" id = "">
         
          <div className="sub">
              <Link to ="/"  > Home</Link>
          </div>

          <div className="sub">
                <Link to ="/contactus"  > Contact-US</Link>
          </div>
          <div className="sub">
                <Link to ="/button"  > Button</Link>
          </div>
          
          
          
          
       </div>


    </div>
  
  )
}

export default NavBar