document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let randomDate = getRandomDate();
  const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${randomDate}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.hdurl
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// function getRandomDate() {
//     const maxDate = Date.now();
//     const timestamp = Math.floor(Math.random() * maxDate);
//     return new Date(timestamp).toISOString().split('T')[0];
// }

console.log(getRandomDate());

function getRandomDate() {
  const startDate = new Date(1995, 05, 17);
  const endDate = Date.now();
  const minValue = startDate.getTime();
  const maxValue = endDate;
  const timestamp = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
  return new Date(timestamp).toISOString().split('T')[0];
}