const clientID =
  "2116bdc2465b1c0744e76fb082d7d7103784b033cb4a6dd20c82667efb023068";
let searchParams = "photos/random";
let searchQuery = 'oregon'

fetch(
  `https://api.unsplash.com/${searchParams}?query=${searchQuery}&orientation=landscape&client_id=${clientID}`)
  .then(response => response.json())
  .then(json => {
    let background = json.urls.full;
    document.body.style.backgroundImage = `url(${background})`;
  })