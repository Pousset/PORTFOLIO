export default function card() {
  function showCard() {
    // je veux que au click il affiche la card
    console.log("click");
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
