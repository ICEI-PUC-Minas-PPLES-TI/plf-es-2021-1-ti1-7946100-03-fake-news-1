const toggleForm = () => {
  const container = document.querySelector(".container");
  container.classList.toggle("active");
};

$(document).ready(() => {
  if (localStorage.getItem("logado") == "true") {
    window.location.href = "../index.html";
  }
});

$("#cadastrar").click(() => {
  let usuario = $("#cadastroUsuario").val();
  let email = $("#cadastroEmail").val();
  let senha = $("#cadastroSenha").val();
  let confirmarSenha = $("#cadastroSenhaConfirmacao").val();

  let validacaoSenha = senha === confirmarSenha ? true : false;

  if (!validacaoSenha || usuario === "" || email === "" || senha === "") {
    if (!validacaoSenha) {
      Swal.fire({
        icon: "error",
        title: "Aviso",
        text: "As senhas não conferem!",
        confirmButtonText: "Entendi",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Aviso",
        text: "Por favor preencha todos os campos!",
        confirmButtonText: "Entendi",
      });
    }
  } else {
    let dbUsuarios = JSON.parse(localStorage.getItem("usuarios")) ?? [];

    const usuarioEmailExiste = dbUsuarios.filter(
      (u) => u.usuario == usuario || u.email == email
    );

    if (usuarioEmailExiste.length !== 0) {
      Swal.fire({
        icon: "error",
        title: "Aviso",
        text: "O usuário ou email informado já existe!",
        confirmButtonText: "Entendi",
      });
    } else {
      let objetoUsuario = {
        id_usuario: dbUsuarios.length + 1,
        usuario: usuario,
        email: email,
        senha: senha,
        tipo_usuario: 2, // 1 - ADM / 2 - Usuário comum
      };

      dbUsuarios.push(objetoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(dbUsuarios));

      Swal.fire({
        icon: "success",
        title: "Sucesso!",
        text: "Usuário cadastrado com sucesso!",
      }).then(() => {
        localStorage.setItem("logado", true);
        window.location.href = "../index.html";
      });
    }
  }
});

$("#login").click(() => {
  let usuario = $("#loginUsuario").val();
  let senha = $("#loginSenha").val();

  if (usuario === "" || senha === "") {
    Swal.fire({
      icon: "error",
      title: "Aviso",
      text: "Por favor preencha todos os campos!",
      confirmButtonText: "Entendi",
    });
  } else {
    let dbUsuarios = JSON.parse(localStorage.getItem("usuarios"));

    if (dbUsuarios) {
      const login = dbUsuarios.filter(
        (u) => u.usuario == usuario && u.senha == senha
      );

      //modal de sucesso ou erro e manda para outra página ou não
      if (login.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Aviso",
          text: "O usuário e senha não constam em nosso sistema!",
          confirmButtonText: "Entendi",
        });
      } else {
        localStorage.setItem("logado", true);
        window.location.href = "../index.html";
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Aviso",
        text: "O usuário e senha não constam em nosso sistema!",
        confirmButtonText: "Entendi",
      });
    }
  }
});
