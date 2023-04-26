
import "./navbar.css"

const NavBar = () => {
    return ( <> 
    
    <div class="nav">
  <input type="checkbox" id="nav-check" />
  <div class="nav-header">
    <div class="nav-title">
    <img src="images/Quickfinz.png"  alt="logo" class="logo pl-3 ml-2" />
   
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>

  <div class="nav-links pt-1">
    <a href="/" target="_blank">Products</a>

<div class="dropdown">
<a className="links" href="/">Recources</a>
  <div class="dropdown-content">
  <a href="/uchmadhyamik">Uccha Madhyamik</a>
  <a href="/madhyamik">Madhyamik</a>
  <a href="/joint">Joint</a>
  <a href="/uchmadhyamik">Uccha Madhyamik</a>
  <a href="/madhyamik">Madhyamik</a>
  <a href="/joint">Joint</a>
  </div>
</div>


    <a href="/" target="_blank">About</a>
    <a className="join" href="/" target="_blank">JOIN</a>
    

    
    
  
  </div>
</div>




      </> );
}
 
export default NavBar;