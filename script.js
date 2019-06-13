const request = require('request')
const fs = require('fs')

const clientID = "2116bdc2465b1c0744e76fb082d7d7103784b033cb4a6dd20c82667efb023068"
let searchParams = "/photos/random"
let searchQuery = "bali"

request(`https://api.unsplash.com/${searchParams}?query=${searchQuery}&orientation=landscape&client_id=${clientID}`, (error, response, body) => {

  if (error) console.log(error)

  console.log(response)
  console.log(response.statusCode)
  console.log(body)

    fs.writeFile('result.json')

});