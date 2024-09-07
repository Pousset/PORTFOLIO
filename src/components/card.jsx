import PropTypes from "prop-types";

export function Card({ onClose }) {
  function showCard() {
    console.log("click");
    onClose(); // Appeler la fonction onClose pour fermer la carte
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

export function ProjectCard({ onClose }) {
  function showProjectCard() {
    console.log("click");
    onClose(); // Appeler la fonction onClose pour fermer la carte
  }

  return (
    <div className="Project_card" onClick={showProjectCard}>
      <h1>Coucou</h1>
    </div>
  );
}

ProjectCard.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export function Home({ onClose }) {
  function showHome() {
    console.log("click");
    onClose(); // Appeler la fonction onClose pour fermer la section Home
  }

  return (
    <div className="home-section" onClick={showHome}>
      <h1>Bienvenue sur la page d'accueil</h1>
      <p>Ceci est la section d'accueil de votre portfolio.</p>
    </div>
  );
}

Home.propTypes = {
  onClose: PropTypes.func.isRequired,
};