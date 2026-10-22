let picture = [
  "assets/img/Fluss.jpg",
  "assets/img/Gewitter.jpg",
  "assets/img/Himmel.jpg",
  "assets/img/Insel.jpg",
  "assets/img/Kirche.jpg",
  "assets/img/Palme.jpg",
  "assets/img/Regen.jpg",
  "assets/img/Strand.jpg",
  "assets/img/Tropfen.jpg",
  "assets/img/Wald.jpg",
  "assets/img/Wasserfall.jpg",
  "assets/img/Welle.jpg",
];
let currentImageIndex = 0;

function render() {
  let galleriRef = document.getElementById("galleri");
  for (let index = 0; index < picture.length; index++) {
    galleriRef.innerHTML += getTemplateHtml(index);
  }
}

function getTemplateHtml(index) {
  let vollerPfad = picture[index];
  let gekürzterName = vollerPfad.substring(11);
  let nameohnejpg = gekürzterName.replace(".jpg", "");
  return `
    <div class="single_element">
    <img onclick="openDialog(${index})" src="${picture[index]}" alt="(${nameohnejpg})" style="max-width: 100%;">
    </div>`;
}

const dialogRef = document.getElementById("mydialog");

function openDialog(index) {
  currentImageIndex = index;
  let titleRef = document.getElementById("dialog_titel");
  let vollerPfad = picture[index];
  let gekürzterName = vollerPfad.substring(11);
  let nameohnejpg = gekürzterName.replace(".jpg", "");
  titleRef.innerText = nameohnejpg;
  let imgRef = document.getElementById("big_picture");
  imgRef.src = picture[index];
  imgRef.alt = nameohnejpg;
  let showindex = document.getElementById("carousel-counter");
  showindex.innerText = currentImageIndex + 1 + "/" + picture.length;
  dialogRef.showModal();
  dialogRef.classList.add("opened");

  if (event) {
    event.stopPropagation();
  }
}

function chancheImage(action) {
  if (action === "next") {
    currentImageIndex++;
  }
  if (action === "prev") {
    currentImageIndex--;
  }
  if (currentImageIndex >= picture.length) {
    currentImageIndex = 0;
  }
  if (currentImageIndex < 0) {
    currentImageIndex = picture.length - 1;
  }
  openDialog(currentImageIndex);
}

function closeDialog() {
  dialogRef.close();
  dialogRef.classList.remove("opened");
}
