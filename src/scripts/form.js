const content = document.getElementById("content")
function serializeForm() {
    const form = document.getElementById('form');
    const answer = form.querySelector('[name="answer"]')
    id = window.localStorage.length
    window.localStorage.setItem(id.toString(), answer.value)
}

function render(){
    let objects = {...localStorage}
    Object.keys(objects).forEach(key => {
        let element = document.createElement('article');

        element.classList.add("article-main")
        element.innerHTML = objects[key]

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
