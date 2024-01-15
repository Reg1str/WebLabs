// const programTab = document.getElementById("programmers.html")
// const businessTab = document.getElementById("business.html")
// const philoTab = document.getElementById("philosophers.html")
// const formTab = document.getElementById("form.html")


let hrefs = [], l = document.links;
for(let i=0; i<l.length; i++) {
    hrefs.push(l[i].href);
}
currentURL = document.location.href
console.log(currentURL)

function check(item, index, array) {
    let href = item
    if (href === currentURL) {
        document.querySelector(`[href=${href}]`).classList.add("current");
    }
}
 hrefs.map(check)
console.log(hrefs)


// function programmers(){
//     window.location='../pages/programmers.html'
// }
//
// function business(){
//     window.location='../pages/business.html'
// }
//
// function philosophers(){
//     window.location='../pages/philosophers.html'
// }
// function form(){
//     window.location='../pages/form.html'
// }

// programTab.addEventListener('click', programmers)
// businessTab.addEventListener('click', business)
// philoTab.addEventListener('click', philosophers)
// formTab.addEventListener('click', form)
let id = document.location.toString().replace('http://localhost:1234/pages/','');
let id = document.location.toString().replace('http://localhost:1234/pages/','');
if (id !== 'http://localhost:1234' && id !== 'http://localhost:1234/index.html'){
    document.getElementById(id).classList.add("current")
}
