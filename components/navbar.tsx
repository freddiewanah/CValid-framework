import Link from "./ActiveLink";
import { useState, useEffect} from "react";


const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const [collapse, setCollapse] = useState(true);

  const toggleNavbar = () => {
    setCollapse(!collapse);
  };

  useEffect(() => {
    const element = document.getElementById("navbar") as HTMLElement | null;
    if (element !== null) {
      document.addEventListener("scroll", () => {
        if (window.scrollY > 150) {
          element.classList.add("is-sticky");
        } else {
          element.classList.remove("is-sticky");
        }
      });
    }
  });

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const classOne = collapse
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapse
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <div id="navbar" className="navbar-area fixed-top">
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <img src="/logo/logo-color.png" width={150} alt="logo" />
            </a>
          </Link>

          <button
            onClick={() => toggleNavbar()}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link" onClick={(e) => e.preventDefault()}>
                    Services <i className="bi bi-chevron-down"></i>
                  </a>
                </Link>

                <ul className="dropdown-menu">
                  <li className="nav-item">
                    {/* 
                    <Link href="/verification" activeClassName="active">
                      <a className="nav-link">Verification</a>
                    </Link>
                    */}
                    <Link href="/#learners">
                      <a className="nav-link">for Lifelong Learners</a>
                    </Link>
                    <Link href="/#education-providers">
                      <a className="nav-link">for Education Providers</a>
                    </Link>
                    <Link href="/#business-owners">
                      <a className="nav-link">for Business Owners</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link href="/#news">
                  <a className="nav-link" >
                    News <i className="bi bi-chevron-down"></i>
                  </a>
                </Link>

              </li>

              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link" onClick={(e) => e.preventDefault()}>
                    About Us <i className="bi bi-chevron-down"></i>
                  </a>
                </Link>

                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link href="/about-us" activeClassName="active">
                      <a className="nav-link">About Us</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/roadmap" activeClassName="active">
                      <a className="nav-link">Our Roadmap</a>
                    </Link>
                  </li>
                </ul>
              </li>


              <li className="nav-item">
                <div onClick={() => scrollToBottom()}>
                  <a className="nav-link">
                    Contact <i className="bi bi-chevron-down"></i>
                  </a>
                </div>
              </li>
            </ul>

            <div className="others-options">
              <Link href="/login">
                <a className="default-btn">
                  Login <i className="bi bi-box-arrow-in-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
