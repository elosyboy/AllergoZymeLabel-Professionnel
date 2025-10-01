// --- Liste des numéros d'accès autorisés ---
// Tu pourras les remplacer par les vrais codes que tu veux donner
const codesAutorises = [
  "123456", // exemple
  "AZ-2025",
  "RESTO-42"
];

// --- Gestion du formulaire de connexion ---
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const codeEntre = document.getElementById("access-code").value.trim();
  const errorMsg = document.getElementById("error-msg");

  if (codesAutorises.includes(codeEntre)) {
    // ✅ Code correct : on redirige vers la page de création du tableau
    window.location.href = "dashboard.html";
  } else {
    // ❌ Mauvais code : message d'erreur
    errorMsg.textContent = "Numéro d'accès incorrect. Veuillez réessayer.";
  }
});
