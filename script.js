(function () {
  const gifBtn = document.getElementById("gifBtn");
  const answerDiv = document.getElementById("answer");
  const apiKey = "yTC33gQaLNEOs2B2cShieHWxslQbIhte";
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");

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

  searchBtn.addEventListener("click", function() {
    var text = searchInput.value;
    answerDiv.innerHTML = "";
    var licz = 0;
    var tableContent = "";
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(text)}&limit=9&offset=0&rating=g&lang=en`)
      .then(response => response.json())
      .then(gifdata => {
        if (gifdata.data.length > 0) {
          tableContent = "<table id='giftable'><tr>";
          
          gifdata.data.forEach(element => {
            if (licz == 3) {
              tableContent += "</tr><tr>";
              licz = 0;
            }
            tableContent += `<td><img class="gif" src="${element.images.original.url}" alt="Search GIF"></td>`;
            licz++;
          });
          tableContent += "</tr></table>";
          answerDiv.innerHTML = tableContent;
        } else {
          answerDiv.innerHTML = "Brak wyników dla podanej frazy.";
        }
      });

  });

})();
