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
// Das globale "Gedächtnis" des Skripts: Speichert die Nummer (den Index) des aktuell im Dialog geöffneten Bildes,
// damit die Funktionen für "Weiter" und "Zurück" wissen, welches Bild als Nächstes geladen werden muss.
let currentImageIndex = 0;

function render() {
  let galleriRef = document.getElementById("galleri");
  for (let index = 0; index < picture.length; index++) {
    galleriRef.innerHTML += getTemplateHtml(index);
  }
}

function getTemplateHtml(index) {
  return `
    <div class="single_element">
    <img onclick="openDialog(${index})" src="${picture[index]}" alt="Bild ${index + 1}" style="max-width: 100%;">
    </div>`;
}

//////////////////////////////* Dialog / Modul *//////////////////////////
const dialogRef = document.getElementById("mydialog");

function openDialog(index) {
  //* damit wird das globale Gedächtnis mit der geklickten Nummer gefüttert *//
  currentImageIndex = index;
  /////////////////* h2 Dialog Überschrift*//////////
  let titleRef = document.getElementById("dialog_titel");
  /* Pfad wird übernommen*/
  let vollerPfad = picture[index];
  /*Pfad Name wird erst ab dem 11 zeichen übernommen*/
  let gekürzterName = vollerPfad.substring(11);
  /*JPG wird im Pfad/Namen durch "(nichts)"*/
  let nameohnejpg = gekürzterName.replace(".jpg", "");
  /*das endprodukt (nameohnejpg) wird übernommenbzw weiter gegeben*/
  titleRef.innerText = nameohnejpg;
  ////////////////*img in den Dialog übernehmen*////////////////////////
  let imgRef = document.getElementById("big_picture");
  imgRef.src = picture[index];
  dialogRef.showModal();
}
///////////////*Dialog Next and Back *///////////////
function nextImage() {
  currentImageIndex++;

  openDialog(currentImageIndex);
}
function lastImage() {
  currentImageIndex--;

  openDialog(currentImageIndex);
}
//////////* Dialog Schließen*//////////
function closeDialog() {
  dialogRef.close();
}
