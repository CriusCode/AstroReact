import React, { useState, useEffect } from "react";

function CrystalBall() {
    /*
  const fortunes = [
    "La réponse est dans le frigo, juste derrière le ketchup...",
    "Les étoiles me disent que c'est le bon moment pour une sieste...",
    "As-tu essayé de demander à Phénomène Raven si elle avait la réponse avant de me consulter ?",
    "La boule de cristal dit : 'Essayez de nouveau après une tasse de café'",
    "Je vois... une pizza dans ton futur. Et elle est délicieuse !",
    "J'ai demandé à Siri, et même lui n'a pas de réponse à cette question !",
    "Les énergies cosmiques te recommandent une playlist good mood et un smoothie detox",
    "La solution à tous les problèmes : manger plus de chocolat !",
    "Les signes indiquent que tu devrais peut-être écouter du Céline Dion pour résoudre ce problème...",
    "La boule de cristal a un message important pour toi : 'Fais une pause et twerk un peu'",
  ];

  const [fortune, setFortune] = useState("");
  const [isFlickering, setIsFlickering] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);

  const getFortune = () => {
    if (isRevealing || isFlickering) return;

    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
    setIsFlickering(true);

    setTimeout(() => {
      setIsFlickering(false);
      setIsRevealing(true);
    }, 5000);
  };

  useEffect(() => {
    if (isFlickering) {
      setTimeout(() => setIsFlickering(false), 6000); // Arrête le scintillement après 6 secondes
    }
  }, [isFlickering]); // Exécute l'effet seulement si isFlickering change
  return (
    <div className="App">
      <div className={`crystal-ball ${isFlickering ? "flicker" : ""}`}>
        <p className={`fortune ${isRevealing ? "reveal" : ""}`}>{fortune}</p>
      </div>
      <button className="get-fortune-btn" onClick={getFortune}>
        Get Your Fortune
      </button>
    </div>
  );
  */
}

export default CrystalBall;
