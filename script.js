let picture = [
  "assets/img/alaska-810433_1280.jpg",
  "assets/img/anime-8788959_1280.jpg",
  "assets/img/atmosphere-8752835_1280.jpg",
  "assets/img/blue-tit-8521052_1280.jpg",
  "assets/img/hurricane-92968_1280.jpg",
  "assets/img/lake-2896379_1280.jpg",
  "assets/img/moorente-8783210_1280.jpg",
  "assets/img/sea-2563389_1280.jpg",
  "assets/img/snow-bunting-6781122_1280.jpg",
  "assets/img/snow-leopard-cubs-8039138_1280.jpg",
  "assets/img/travel-8785493_1280.jpg",
  "assets/img/winter-1675197_1280.jpg",
];

function render() {
  let galleriRef = document.getElementById("galleri");
  for (let index = 0; index < picture.length; index++) {
    galleriRef.innerHTML += getTemplateHtml(index);
  }
}

function getTemplateHtml(index) {
  return `
    <div class="single_element">
    <img src="${picture[index]}" alt="Bild ${index + 1}" style="max-width: 100%;">
    </div>`;
}
