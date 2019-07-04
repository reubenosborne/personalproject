const clientID =
  "2116bdc2465b1c0744e76fb082d7d7103784b033cb4a6dd20c82667efb023068";
let searchParams = "search/photos";
let searchQuery = "vancouver";

// Set Query
localStorage.setItem("query", searchQuery);

// Set Count
let count = 0;

fetch(
  `https://api.unsplash.com/${searchParams}?query=${searchQuery}&orientation=landscape&client_id=${clientID}`
)
  .then(response => response.json())
  .then(json => {
    console.log(json);

    function initialBackground() {
      let background = json.results[count].urls.regular;
      document.body.style.backgroundImage = `url(${background})`
    }

    initialBackground();

    setInterval(function changeBackground() {
      let background = json.results[count].urls.full;
      document.body.style.backgroundImage = `url(${background})`
      if (count == 9) {
        count = 0;
      } else {
        count++;
      }
    }, 4500);
  });


// window.localStorage.getItem()
// Geo location (HTML5)
// Weather
// Settings UI
// Two api calls
// Json stringify
// React
// Look at react components

// Changes > Build in a chrome extension
