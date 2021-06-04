

function likeButtonClicked(buttonID, quantidadeLikesID) {

    var likeButton = document.getElementById(buttonID);
    var quantidadeLikes = document.getElementById(quantidadeLikesID);
    var clickedButtonColor = "green";


    var didUserAlreadyClickInTheLikeButton = likeButton.style.color == clickedButtonColor;

    if (didUserAlreadyClickInTheLikeButton) {

        didUserAlreadyClickInTheLikeButton = false;
        likeButton.style.color = "#FFF";
        quantidadeLikes.innerHTML = parseInt(quantidadeLikes.innerHTML) - 1;

    } else {

        didUserAlreadyClickInTheLikeButton = true;
        likeButton.style.color = clickedButtonColor;
        quantidadeLikes.innerHTML = parseInt(quantidadeLikes.innerHTML) + 1;
    }
}


function deslikeButtonClicked(buttonID, quantidadeDeslikesID) {

    var likeButton = document.getElementById(buttonID);
    var quantidadeLikes = document.getElementById(quantidadeDeslikesID);
    var clickedButtonColor = "red";


    var didUserAlreadyClickInTheLikeButton = likeButton.style.color == clickedButtonColor;

    if (didUserAlreadyClickInTheLikeButton) {

        didUserAlreadyClickInTheLikeButton = false;
        likeButton.style.color = "#FFF";
        quantidadeLikes.innerHTML = parseInt(quantidadeLikes.innerHTML) - 1;

    } else {

        didUserAlreadyClickInTheLikeButton = true;
        likeButton.style.color = clickedButtonColor;
        quantidadeLikes.innerHTML = parseInt(quantidadeLikes.innerHTML) + 1;
    }
}

