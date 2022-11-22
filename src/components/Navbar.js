import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import "../components/Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>WE-Conference</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#">Contact</a>
        <div className="logsig">
          <a href="/#">Login</a>
          <a href="/#">Signup</a>
        </div>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          {/* <FaTimes /> */}
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        {/* <FaBars /> */}
      </button>
    </header>
  );
}

export default Navbar;
