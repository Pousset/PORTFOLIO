import PropTypes from "prop-types";

export default function Card({ onClose }) {
  function showCard() {
    console.log("click");
    onClose(); // Informe le parent que la carte doit être fermée
  }

  return (
    <div className="card" onClick={showCard}>
      <h1>Card :</h1>
      <h3>Nom :</h3>
      <h3>Prénom :</h3>
      <h3>Age :</h3>
      <h3>Adresse :</h3>
      <h3>Mail :</h3>
      <h3>Téléphone :</h3>
    </div>
  );
}

Card.propTypes = {
  onClose: PropTypes.func.isRequired,
};
