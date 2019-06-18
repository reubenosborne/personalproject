const clientID =
  "2116bdc2465b1c0744e76fb082d7d7103784b033cb4a6dd20c82667efb023068";
let searchParams = "search/photos";
let searchQuery = 'blossom'

fetch(
  `https://api.unsplash.com/${searchParams}?query=${searchQuery}&orientation=landscape&client_id=${clientID}`)
  .then(response => response.json())
  .then(json => {

    setInterval(function changeBackground() {
      let background = json.results[count].urls.full;
      document.body.style.backgroundImage = `url(${background})`;
      if (count == 9) {
        count = 0
      } else {
        count++
      }
    }, 10000)

  })

let count = 0