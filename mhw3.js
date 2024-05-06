function toggle(event){
    const accedi=document.querySelector('#div-accesso');

    isVisible = !isVisible;
    if(isVisible){
        accedi.classList.remove('hidden');
        document.body.classList.add('no-scroll');
    }else{
        accedi.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    }
}

let isVisible=false;
/*per fare in modo che la funzione toggle venga eseguita quando clicchiamo sul link*/
const immagineAccesso = document.querySelector('#js-accesso');
immagineAccesso.addEventListener('click', toggle);

/*album foto*/

/*crea l'album delle foto*/
const photo_list = [];

function createImage(src){
    const image=document.createElement('img');
    image.src=src;
    return image;
}

const albumView = document.querySelector('#section-loghi-container');
for (let i=0; i<photo_list.length; i++){
    const photoSrc = photo_list[i];
    const image = createImage(photoSrc);
    albumView.appendChild(image);
}

function onThumbnailClick(event){
    const modalView = document.querySelector('#modal-view');
    const image = createImage(event.currentTarget.src);
    document.body.classList.add('no-scroll');
    modalView.innerHTML = '';
    modalView.appendChild(image);
    modalView.classList.remove('hidden');
}

function onModalClick(event){
    document.body.classList.remove('no-scroll');
    const modalView = document.querySelector('#modal-view');
    modalView.classList.add('hidden');
}

const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);

const galleriaItems = document.querySelectorAll('#section-loghi-container img');
for (let i=0; i<galleriaItems.length; i++){
    const item = galleriaItems[i];
    item.addEventListener('click', onThumbnailClick);
}

/*menu a comparsa mobile*/

function toggle2(event) {
    event.preventDefault(); /*questo mi toglie il problema del link che mi faceva scomparire il div dopo che cliccavo sul menu*/
    const menucomparsa = document.querySelector('#menu-a-comparsa');

    isVisible1 = !isVisible1;
    if (isVisible1) {
        menucomparsa.classList.remove('hidden');
        document.body.classList.add('no-scroll');
    } else {
        menucomparsa.classList.add('hidden'); 
        document.body.classList.remove('no-scroll');
    }
}

let isVisible1 = false;
const bottonemenu = document.querySelector('#link-menu');
bottonemenu.addEventListener('click', toggle2);

function toggle3(event){
    const tendinalingue=document.querySelector('#tendine-lingua');

    isVisible2 = !isVisible2;
    if(isVisible2){
        tendinalingue.classList.remove('hidden');
        document.body.classList.add('no-scroll');
    }else{
        tendinalingue.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    }
}

let isVisible2=false;
const bottoneimmagine = document.querySelector('#js-lingua');
bottoneimmagine.addEventListener('click', toggle3);

//slide image

const SFONDO1 = 'asics1.jpg';
const SFONDO2 = 'asics2.jpg';

const Cerchio = document.querySelectorAll('#bottoni-rotondi img');
const bloccoFoto = document.querySelector('#slide');

for (let i = 0; i < Cerchio.length; i++) {
  Cerchio[i].addEventListener('click', cambioSfondo);
}

function cambioSfondo(event) {
  const elementoSelezionato = event.target;
  const indice = elementoSelezionato.dataset.index;

  if (indice === '1') {
    bloccoFoto.style.backgroundImage = `url(${SFONDO1})`;
  } else if (indice === '2') {
    bloccoFoto.style.backgroundImage = `url(${SFONDO2})`;
  }
}

const SFONDO3 = 'new_balance1.jpg';
const SFONDO4 = 'new_balance2.jpg';

const Cerchio1 = document.querySelectorAll('#bottoni-rotondi img');
const bloccoFoto1 = document.querySelector('#slide1');

for (let i = 0; i < Cerchio1.length; i++) {
  Cerchio1[i].addEventListener('click', cambioSfondo1);
}

function cambioSfondo1(event) {
  const elementoSelezionato1 = event.target;
  const indice1 = elementoSelezionato1.dataset.index;

  if (indice1 === '3') {
    bloccoFoto1.style.backgroundImage = `url(${SFONDO3})`;
  } else if (indice1 === '4') {
    bloccoFoto1.style.backgroundImage = `url(${SFONDO4})`;
  }
}

const SFONDO5 = 'salomon1.jpg';
const SFONDO6 = 'salomon2.jpg';

const Cerchio2 = document.querySelectorAll('#bottoni-rotondi img');
const bloccoFoto2 = document.querySelector('#slide2');

for (let i = 0; i < Cerchio2.length; i++) {
  Cerchio2[i].addEventListener('click', cambioSfondo2);
}

function cambioSfondo2(event) {
  const elementoSelezionato2 = event.target;
  const indice2 = elementoSelezionato2.dataset.index;

  if (indice2 === '5') {
    bloccoFoto2.style.backgroundImage = `url(${SFONDO5})`;
  } else if (indice2 === '6') {
    bloccoFoto2.style.backgroundImage = `url(${SFONDO6})`;
  }
}

//mappa

fetch('https://js.api.here.com/v3/3.1/mapsjs-core.js')
  .then(response => response.text())
  .then(data => {
    //mappa 
      //Step 1: initialize communication with the platform
      // Replace variable YOUR_API_KEY with your own apikey
      var platform = new H.service.Platform({
        apikey: '3J0Fvf-mVxzP0z_NqHrb3EmyoDuDWuxtMoKC9Bis_2I'
      });
      var defaultLayers = platform.createDefaultLayers();
      //Step 2: initialize a map - this map is centered over Europe
      var map = new H.Map(document.getElementById('mappa'),
        defaultLayers.vector.normal.map,
        {
            center: { lat: 50, lng: 5 },
            zoom: 4,
            pixelRatio: window.devicePixelRatio || 1
        }
      );
      // This adds a resize listener to make sure that the map occupies the whole container
      window.addEventListener('resize', () => map.getViewPort().resize());
      //Step 3: make the map interactive
      // MapEvents enables the event system
      // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
      var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      // Create the default UI components
      var ui = H.ui.UI.createDefault(map, defaultLayers);

      var LocationOfMarker = { lat: 37.51651572890033 , lng: 15.094873796109468 };

      // optionally - resize a larger PNG image to a specific size
      var pngIcon = new H.map.Icon("https://cdn1.iconfinder.com/data/icons/essentials-pack/96/location_pin_position_map_navigation-512.png", { size: { w: 56, h: 56 } });

      // Create a marker using the previously instantiated icon:
      var marker = new H.map.Marker(LocationOfMarker, { icon: pngIcon });

      // Add the marker to the map:
      map.addObject(marker);

      // Optionally, 
      //Show the marker in the center of the map
      map.setCenter(LocationOfMarker)

      var LocationOfMarker1 = { lat: 37.47991282464538 , lng: 15.06180296660951 };
      var marker1 = new H.map.Marker(LocationOfMarker1, { icon: pngIcon });
      map.addObject(marker1);

      var LocationOfMarker2 = { lat: 37.47861681784779 , lng: 15.009951172208343 };
      var marker2 = new H.map.Marker(LocationOfMarker2, { icon: pngIcon });
      map.addObject(marker2);

      //Zooming so that the marker can be clearly visible
      map.setZoom(11);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

//spotify
function onJson(json) {
  console.log('JSON ricevuto');
  console.log(json);
  // Svuotiamo la libreria
  const library = document.querySelector('#album-view');
  library.innerHTML = '';
  // Leggi il numero di risultati
  const results = json.albums.items;
  let num_results = results.length;
  // Mostriamone al massimo 10
  if(num_results > 10)
    num_results = 10;
  // Processa ciascun risultato
  for(let i=0; i<num_results; i++)
  {
    // Leggi il documento
    const album_data = results[i]
    // Leggiamo info
    const title = album_data.name;
    const selected_image = album_data.images[0].url;
    // Creiamo il div che conterrà immagine e didascalia
    const album = document.createElement('div');
    album.classList.add('album');
    // Creiamo l'immagine
    const img = document.createElement('img');
    img.src = selected_image;
    // Creiamo la didascalia
    const caption = document.createElement('span');
    caption.textContent = title;
    // Aggiungiamo immagine e didascalia al div
    album.appendChild(img);
    album.appendChild(caption);
    // Aggiungiamo il div alla libreria
    library.appendChild(album);
  }
}

function onResponse(response) {
  console.log('Risposta ricevuta');
  return response.json();
}

function search(event)
{
  // Impedisci il submit del form
  event.preventDefault();
  // Leggi valore del campo di testo
  const album_input = document.querySelector('#lente-mobile');
  const album_value = encodeURIComponent(album_input.value);
  console.log('Eseguo ricerca: ' + album_value);
  // Esegui la richiesta
  fetch("https://api.spotify.com/v1/search?type=album&q=" + album_value,
    {
      headers:
      {
        'Authorization': 'Bearer ' + token
      }
    }
  ).then(onResponse).then(onJson);
}

function onTokenJson(json)
{
  console.log(json)
  // Imposta il token global
  token = json.access_token;
}

function onTokenResponse(response)
{
  return response.json();
}

// OAuth credentials --- NON SICURO!
const client_id = '48f5a3b35ab7481880f99d5dc4ac4416';
const client_secret = '450916e58ce445a8b939b6fcf4f90428';
// Dichiara variabile token
let token;
// All'apertura della pagina, richiediamo il token
fetch("https://accounts.spotify.com/api/token",
	{
   method: "post",
   body: 'grant_type=client_credentials',
   headers:
   {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
   }
  }
).then(onTokenResponse).then(onTokenJson);
// Aggiungi event listener al form
const form = document.querySelector('form');
form.addEventListener('submit', search)