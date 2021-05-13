function validateForm() {
  var n = document.getElementById("name").value;
  var e = document.getElementById("email").value;
  var s = document.getElementById("subject").value;
  var m = document.getElementById("message").value;
  var onlyLetters = /^[a-zA-Z\s]*$/;
  var onlyEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (n == "" || n == null) {
    document.getElementById("nameLabel").innerHTML =
      "Por favor coloque seu nome!";
    document.getElementById("name").style.borderColor = "red";
    return false;
  }

  if (!n.match(onlyLetters)) {
    document.getElementById("nameLabel").innerHTML =
      "Please enter only letters";
    document.getElementById("name").style.borderColor = "red";
    return false;
  }

  if (e == "" || e == null) {
    document.getElementById("emailLabel").innerHTML =
      "Por favor coloque seu email!";
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
      "Por favor coloque um assunto!";
    document.getElementById("subject").style.borderColor = "red";
    return false;
  }

  if (!s.match(onlyLetters)) {
    document.getElementById("subjectLabel").innerHTML =
      "Por favor coloque apenas letras!";
    document.getElementById("subject").style.borderColor = "red";
    return false;
  }

  if (m == "" || m == null) {
    document.getElementById("messageLabel").innerHTML =
      "Por favor coloque sua mensagem!";
    document.getElementById("message").style.borderColor = "red";
    return false;
  } else {
    return true;
  }
}
