document.querySelector('.doggo-btn').addEventListener('click', getFetch)

function getFetch(){

  const url = `https://dog.ceo/api/breeds/image/random`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('.dog-img').src = data.message
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}