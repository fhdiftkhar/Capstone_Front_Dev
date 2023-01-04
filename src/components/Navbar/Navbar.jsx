import './Navbar.css';
import logo from '../../assets/Asset 16@4x.png'

function Navbar() {
    return (
      <nav>
        <div className="container">
          <img src={logo} alt="Little Lemon"/>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Reservations</a></li>
              <li><a href="#">Order delivery</a></li>
              <li><a href="#">Log in</a></li>
          </ul>
        </div>
      </nav>
    );
  }

  export default Navbar;
