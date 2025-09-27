document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;
  let footerPath = "";

  if (path.includes("/assets/pages/")) {
    footerPath = "footer.html"; // relativo à Atletas.html
} else {
    footerPath = "assets/pages/footer.html"; // relativo à index.html
}

  fetch(footerPath)
.then(response => response.text())
.then(data => {
      document.getElementById("footer").innerHTML = data;
})
.catch(error => console.error("Erro ao carregar o footer:", error));
});
