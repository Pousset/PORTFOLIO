import PropTypes from "prop-types";
import CVImage from "../assets/CV_Mathis_Piette.jpg"; 
import PDF from "./downloadPDF";

export function Home({ onClose }) {
  function showHome() {
    console.log("click");
    onClose(); 
  }

  return (
    <div className="home-section" onClick={showHome}>
      <PDF />
      <img src={CVImage} alt="CV Mathis Piette" />
    </div>
  );
}

// Define the prop types for the Home component
Home.propTypes = {
  onClose: PropTypes.func.isRequired,
};

// Call the onClose function to close the ProjectCard
export function ProjectCard({ onClose }) {
  function showProjectCard() {
    console.log("click");
    onClose(); 
  }

  return (
    <div className="Project_card" onClick={showProjectCard}>
      <h1>Coucou</h1>
    </div>
  );
}

// // Define the prop types for the ProjectCard component
ProjectCard.propTypes = {
  onClose: PropTypes.func.isRequired,
};


// Call the onClose function to close the card
export function Card({ onClose }) {
  function showCard() {
    console.log("click");
    onClose(); 
  }

  return (
    <div className="card" onClick={showCard}>
      <h1>Presentation :</h1>
      <h3>Nom : PIETTE</h3>
      <h3>Prénom : Mathis</h3>
      <h3>Age : 26ans</h3>
      <h3>Mail : mathispiette@gmail.com</h3>
      <h3>Téléphone : 06.79.43.21.20</h3>
    </div>
  );
}

Card.propTypes = {
  onClose: PropTypes.func.isRequired,
};