document.querySelector('.joke-btn').addEventListener('click', apiRequest)

async function apiRequest(){

    try{
        const response = await fetch(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`)
        const data = await response.json()

        console.log(data)
        document.querySelector('.joke').innerText = data.joke

    }catch(error){
        console.log(error)
    }
}