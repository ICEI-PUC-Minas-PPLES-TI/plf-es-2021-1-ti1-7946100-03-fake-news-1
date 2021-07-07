const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
};
searchBtn.onclick = () => {
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};

//Login - logout
function logout() {
  localStorage.setItem("logado", false);
  localStorage.setItem("tipoUsuario", 2);
  localStorage.removeItem("logadoAlert");
}

$("#logout").hide(); //trocar de lugar talvez

const logado = localStorage.getItem("logado");

if (logado == "true") {
  if (!localStorage.getItem("logadoAlert")) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Usuário logado com sucesso!",
      showConfirmButton: false,
      timer: 1500,
    });
    localStorage.setItem("logadoAlert", true);
  }

  $("#login").hide();
  $("#logout").show();
}

//Tipo Usuario
$("#tipoUsuario").hide(); //trocar de lugar talvez

const tipoUsuario = localStorage.getItem("tipoUsuario");

if (tipoUsuario == 1) {
  $("#tipoUsuario").show();
}
