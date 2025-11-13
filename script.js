(function () {
  const gifBtn = document.getElementById("gifBtn");
  const answerDiv = document.getElementById("answer");
  const apiKey = "yTC33gQaLNEOs2B2cShieHWxslQbIhte";
  gifBtn.addEventListener("click", function() {
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`)
      .then(response => response.json())
      .then(gifdata => {
        const imgUrl = gifdata.data.images.original.url;
        answerDiv.innerHTML = `<img src="${imgUrl}" alt="Random GIF">`;
      })
      .catch(error => {
        console.error("Error fetching GIF:", error);
        answerDiv.textContent = "Błąd ładowania GIF.";
      });
  });

})();
