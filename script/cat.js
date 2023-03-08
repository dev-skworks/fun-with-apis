

document.querySelector('.cat-btn').addEventListener('click', apiRequest)

async function apiRequest(){

    try{
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_ke6CKuXZYiSmLzUMs5htvldGXZb9v4Xt31VpikeVv2IjiiWXfUzy6QKKzaAZDiXO`)

        const data = await response.json()

        console.log(data)
        document.querySelector('.cat-photo').src = data[0].url

    }catch(error){
        console.log(error)
    }
}