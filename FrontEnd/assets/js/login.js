// Récupérer la valeur d'un input
const inputEmail = document.getElementById("email");
const form = document.querySelector("#login_form");
const inputMdp = document.getElementById("mdp");
const alertMsg = document.querySelector(".alertmessage");

/**
 * on créer une fonction pour verifier nos identifiants
 */
async function tryLogin(email, password) {
  return await fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("invalid credentials");
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("token", data.token);
      window.location.href = "/FrontEnd/";
    })
    .catch((error) => {
      console.error(error);
      localStorage.removeItem("token");
      document.getElementById("errorlogin").textContent =
        "Erreur dans l’identifiant ou le mot de passe";
    });
}

/**
 * event listener sur le bouton submit
 */
form.addEventListener("submit", (event) => {
  // Retire le comportement par default
  event.preventDefault();

  // On récupère les valeurs
  const inputEmailValue = inputEmail.value;
  const inputMdplValue = inputMdp.value;

  // Tentative de connexion
  tryLogin(inputEmailValue, inputMdplValue);
});
