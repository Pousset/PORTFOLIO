import PropTypes from "prop-types";

export default function Project_card({ onClose }) {
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

