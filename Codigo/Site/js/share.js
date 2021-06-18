setShareLinks();

function socialWindow(url) {
  var left = (screen.width - 570) / 2;
  var top = (screen.height - 570) / 2;
  var params =
    "menubar=no,toolbar=no,status=no,width=570,height=570,top=" +
    top +
    ",left=" +
    left;
  window.open(url, "NewWindow", params);
}

function setShareLinks() {
  var pageUrl = encodeURIComponent(document.URL);
  var tweet = encodeURIComponent(
    $("meta[property='og:description']").attr("content")
  );

  $(".social-share.facebook").on("click", function () {
    url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
    socialWindow(url);
  });

  $(".social-share.twitter").on("click", function () {
    url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
    socialWindow(url);
  });

  $(".social-share.email").on("click", function () {
    url = "mailto:?Subject=" + tweet + "&Body=" + pageurl;
    socialWindow(url);
  });
}
