import React, { useState } from "react";

export default function RandomAnswer() {
  const [fortunes, setFortunes] = useState([
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
  ]);

  const [i, setI] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isFlickering, setIsFlickering] = useState(false);

  const getFortune = () => {
    if (isRevealed && isFlickering) {
      return;
    }
  
    if (isRevealed) {
      setIsRevealed(false);
    }
  
    let num = Math.floor(Math.random() * fortunes.length);
    setI(num);
  
    console.log("Selected Fortune Index:", num);
    console.log("Current State of i:", i);
  
    setIsFlickering(true);
  
    setTimeout(() => {
      setIsFlickering(false);
    }, 6000);
  
    setTimeout(() => {
      setIsRevealed(true);
    }, 5000);
  };

  return (
    <div>
      <button className="get-fortune-btn" onClick={getFortune}>
        Posez votre question...
      </button>
      <div className={`crystal-ball ${isFlickering ? "flicker" : ""}`}></div>
      <div className={`fortune ${isRevealed ? "reveal" : ""}`}>
        {isRevealed && (
          <p>{fortunes[i]}</p>
        )}
      </div>
    </div>
  );
}


// Code pour le compteur
// const [compteur, setCompteur] = useState(0);

// const handleClick = () => {
//   setCompteur(compteur + 1);
// };

// return (
//   <>
//     <h1>{compteur}</h1>
//     <button onClick={handleClick}>+</button>
//   </>
// );