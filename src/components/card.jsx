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

export function Project_card({ onClose }) {
  function showProject_card() {
    console.log("click");
    onClose(); // Appeler la fonction onClose pour fermer la carte
  }

  return (
    <div className="Project_card" onClick={showProject_card}>
      <h1>Coucou</h1>
    </div>
  );
}

Project_card.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export function CV_MathisPIETTE({ onClose }) {
  function showCV_MathisPIETTE() {
    console.log("click");
    onClose(); // Appeler la fonction onClose pour fermer la carte
  }

  return (
    <div className="CV_MathisPIETTE" onClick={showCV_MathisPIETTE}>
      <h1>CV_MathisPIETTE</h1>
    </div>
  );
}

CV_MathisPIETTE.propTypes = {
  onClose: PropTypes.func.isRequired,
};