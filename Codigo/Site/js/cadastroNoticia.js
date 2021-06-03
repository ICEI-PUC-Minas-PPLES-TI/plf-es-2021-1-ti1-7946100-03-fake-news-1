function validateForm() {
  var n = document.getElementById("name1").value;
  var e = document.getElementById("email").value;
  var s = document.getElementById("subject1").value;
  var m = document.getElementById("message").value;
  var onlyLetters = /^[a-zA-Z\s]*$/;
  var onlyEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (n == "" || n == null) {
    document.getElementById("nameLabel").innerHTML =
      "Por favor insira o título da notícia!";
    document.getElementById("name1").style.borderColor = "red";
    return false;
  }

  if (e == "" || e == null) {
    document.getElementById("emailLabel").innerHTML =
      "Por favor insira seu email!";
    document.getElementById("email").style.borderColor = "red";
    return false;
  }

  if (!e.match(onlyEmail)) {
    document.getElementById("emailLabel").innerHTML =
      "Por favor coloque um email válido!";
    document.getElementById("email").style.borderColor = "red";
    return false;
  }

  if (s == "" || s == null) {
    document.getElementById("subjectLabel").innerHTML =
      "Por favor insira o link da notícia!";
    document.getElementById("subject1").style.borderColor = "red";
    return false;
  }

  if (m == "" || m == null) {
    document.getElementById("messageLabel").innerHTML =
      "Por favor insira sua mensagem!";
    document.getElementById("message").style.borderColor = "red";
    return false;
  }

  openModalFormOk();

  return false;
}

function openModalFormOk() {
  // Get the modal
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  document.getElementById("myModal").style.display = "none";
};
