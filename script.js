const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById("login-btn");
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

// Fonction pour afficher/masquer les formulaires
function showForm(formId) {
  const form = document.getElementById(formId);
  form.classList.remove("hidden");

  if (formId === "signup-form") {
    loginForm.classList.add("hidden");
  } else {
    signupForm.classList.add("hidden");
  }
}

// Fonction pour gérer la soumission du formulaire d'inscription
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // **Envoyer les données d'inscription à votre serveur**
  // Remplacez cette ligne par votre code pour envoyer les données à votre API ou serveur
  // ...

  // **Afficher un message de succès ou d'erreur**
  // Affichez un message à l'utilisateur en fonction de la réponse du serveur
  // ...
});

// Fonction pour gérer la soumission du formulaire de connexion
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // **Envoyer les données de connexion à votre serveur**
  // Remplacez cette ligne par votre code pour envoyer les données à votre API ou serveur
  // ...

  // **Rediriger l'utilisateur vers la page d'accueil ou afficher un message d'erreur**
  // Redirigez l'utilisateur vers la page d'accueil ou affichez un message d'erreur en fonction de la réponse du serveur
  // ...
});

// Affichage initial du formulaire
showForm("login-form");

// Ecouteurs d'événements sur les boutons
signupBtn.addEventListener("click", () => showForm("signup-form"));
loginBtn.addEventListener("click", () => showForm("login-form"));
