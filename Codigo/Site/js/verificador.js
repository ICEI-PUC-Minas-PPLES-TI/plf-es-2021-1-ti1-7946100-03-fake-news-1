$("#btnVerificar").click(() => {
  axios.get(`https://api-tiaw.bernardoaquino1.repl.co/sitesVerificador`).then((response) => {
    const BD = response.data;
    console.log(BD);
    $(".container .preloader").delay(4000).removeClass("complete");
    setTimeout(() => {
      let param = $("#inputVerificar").val();

      if (param == "") {
        $(".container .preloader").delay(4000).addClass("complete");
        Swal.fire({
          icon: "error",
          title: "Opa...",
          text: "Por favor preencha o campo!",
        });
      } else {
        let resultado = "";
        BD.map((item) => {
          let link = param.split("/");

          if (link.filter((value) => value === item.link).length > 0) {
            resultado = item.link;
          }
        });

        $(".container .preloader").delay(4000).addClass("complete");
        if (resultado !== "") {
          Swal.fire({
            icon: "success",
            title: "Confiável!",
            text: "A notícia verificada é confiável!",
          });
        } else {
          Swal.fire({
            icon: "warning",
            title: "Aviso",
            text: "A noticia verificada é possivelmente uma Fake News!",
            confirmButtonText: "Entendi",
            footer:
              '<a href="verificador.html#comunidade">Acha que isso é um erro? Preencha esse formulário</a>', //mandar para a section que o luiz criou
          });
        }
      }
    }, 2000);
  });
});
