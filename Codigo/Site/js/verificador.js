const BD = [
  {
    titulo: "",
    link: "noticias.uol.com.br",
  },
  {
    titulo: "",
    link: "www1.folha.uol.com.br",
  },
  {
    titulo: "",
    link: "www.estadao.com.br",
  },
  {
    titulo: "",
    link: "istoe.com.br",
  },
  {
    titulo: "",
    link: "oglobo.globo.com",
  },
  {
    titulo: "",
    link: "queer.ig.com.br",
  },
  {
    titulo: "",
    link: "veja.abril.com.br",
  },
  {
    titulo: "",
    link: "gshow.globo.com",
  },
  {
    titulo: "",
    link: "br.noticias.yahoo.com",
  },
  {
    titulo: "",
    link: "www.uol.com.br",
  },
  {
    titulo: "",
    link: "news.google.com",
  },
  {
    titulo: "",
    link: "noticias.r7.com",
  },
  {
    titulo: "",
    link: "www.terra.com.br",
  },
  {
    titulo: "",
    link: "g1.globo.com",
  },
  {
    titulo: "",
    link: "exame.com",
  },
  {
    titulo: "",
    link: "www.gazetadopovo.com.br",
  },
  {
    titulo: "",
    link: "www.portaldoholanda.com.br",
  },
  {
    titulo: "",
    link: "www.lance.com.br",
  },
  {
    titulo: "",
    link: "globoesporte.globo.com",
  },
  {
    titulo: "",
    link: "www.band.uol.com.br",
  },
  {
    titulo: "",
    link: "oglobo.globo.com",
  },
  {
    titulo: "",
    link: "www.correio24horas.com.br",
  },
  {
    titulo: "",
    link: "www.uai.com.br",
  },
  {
    titulo: "",
    link: "imasters.com.br",
  },
  {
    titulo: "",
    link: "www.tecmundo.com.br",
  },
  {
    titulo: "",
    link: "olhardigital.com.br",
  },
  {
    titulo: "",
    link: "www.techtudo.com.br",
  },
  {
    titulo: "",
    link: "www.bbc.com",
  },
  {
    titulo: "",
    link: "www.cnnbrasil.com.br",
  },
  {
    titulo: "",
    link: "www.msn.com",
  },
];

$("#btnVerificar").click(() => {
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
