import {spin} from "./loader.js";

async function request() {
    let container = document.getElementById('fetch')
    // container.classList.add("loader")
    spin()


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function randomIntFromInterval(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const rndInt = randomIntFromInterval(1, 10)


    await sleep(5000)
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${rndInt}`)
        .then(function (response){
            if (!response.ok) {
                throw new Error('Статус: ' + response.status);
            }
            return response.json();
        })
        .then(function (json) {
            let data = json
            // container.classList.remove("loader")
            document.getElementsByClassName("spinner")[0].remove()
            data.forEach(function(element) {
                container.insertAdjacentHTML('beforeend',"<li>" + element.title + " </li>")
            });
        })
}

document.addEventListener('DOMContentLoaded', request);