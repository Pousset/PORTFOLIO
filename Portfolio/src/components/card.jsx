import PropTypes from "prop-types";

export default function Card({ onClose }) {
  function showCard() {
    console.log("click");
    onClose(); // Informe le parent que la carte doit être fermée
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
