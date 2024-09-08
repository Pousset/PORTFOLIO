import { useState } from "react";
import { Card, ProjectCard, Home } from "./InfoCards.jsx"; 

// Add Functionality to the Main Component
function Main() {
  const [isCardVisible, setCardVisibility] = useState(false);
  const [isProjectCardVisible, setProjectCardVisibility] = useState(false);
  const [isHomeVisible, setHomeVisibility] = useState(false);

  function toggleCardVisibility() {
    setCardVisibility(!isCardVisible);
  }

  function toggleProjectCardVisibility() {
    setProjectCardVisibility(!isProjectCardVisible);
  }

  function toggleHomeVisibility() {
    setHomeVisibility(!isHomeVisible);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="main-text" href="#">
            <h1>Bienvenue sur mon portfolio</h1>
          </a>

          {/* Return Cards */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="main-nav">
              <a className="home" aria-current="page" href="#" onClick={toggleHomeVisibility}>
                CV
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="10em"
                  width="10em"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                  <path d="M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z" />
                </svg>
              </a>

              <a className="Project_card" href="#" onClick={toggleProjectCardVisibility}>
                Projects
                <svg
                  viewBox="0 0 64 64"
                  fill="currentColor"
                  height="10em"
                  width="10em"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    d="M1 7h62v50H1zM1 15h62M10 11H6M18 11h-4M26 11h-4"
                  />
                </svg>
              </a>
              <a className="contact" href="#" onClick={toggleCardVisibility}>
                Contact
                <svg
                  className="contact-svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="10em"
                  width="10em"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M20 22H6a3 3 0 01-3-3V5a3 3 0 013-3h14a1 1 0 011 1v18a1 1 0 01-1 1zm-1-2v-2H6a1 1 0 000 2h13zM5 16.17c.313-.11.65-.17 1-.17h13V4H6a1 1 0 00-1 1v11.17zM12 10a2 2 0 110-4 2 2 0 010 4zm-3 4a3 3 0 016 0H9z" />
                </svg>
              </a>
            </div>

            {/* <!-- Return Social Link --> */}
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#">
                <i className="fab fa-github"></i>
              </a>
              <a className="nav-link" href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a className="nav-link" href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Show sections only if they are visible */}
      {isHomeVisible && <Home onClose={toggleHomeVisibility} />}
      {isCardVisible && <Card onClose={toggleCardVisibility} />}
      {isProjectCardVisible && <ProjectCard onClose={toggleProjectCardVisibility} />}
    </div>
  );
}

export default Main;