const content = document.getElementById("content")

let answers = [];
if (localStorage.length !== 0) {
    let objects = JSON.parse(localStorage.getItem("answers"));
}
function serializeForm() {
    const form = document.getElementById('form');
    const answer = form.querySelector('[name="answer"]')
    answers.push(answer.value)
    // id = window.localStorage.length
    localStorage.setItem("answers", JSON.stringify(answers));
    // window.localStorage.setItem(id.toString(), answer.value)
}

function render(){
    let objects = []
    // let objects = {...localStorage}
    if (window.localStorage.length !== null) {
        objects = JSON.parse(localStorage.getItem("answers"));
    }
    // Object.keys(objects).forEach(key => {
    //     let element = document.createElement('article');
    //
    //     element.classList.add("article-main")
    //     element.innerHTML = objects[key]
    //
    //     content.appendChild(element);
    // });
    objects.map(function(item, index, array) {
        let element = document.createElement('article');
        element.classList.add("article-main")
        element.innerHTML = item
        content.appendChild(element);
    });
}
function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(applicantForm)
    content.innerHTML = '';
    render()
}

const applicantForm = document.getElementById('form')
applicantForm.addEventListener('submit', handleFormSubmit)
document.addEventListener('DOMContentLoaded', render);
