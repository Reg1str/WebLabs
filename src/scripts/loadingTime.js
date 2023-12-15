let before_loadtime = new Date().getTime();
window.onload = Pageloadtime;

    function Pageloadtime() {
        let aftr_loadtime = new Date().getTime();
        let pgloadtime = (aftr_loadtime - before_loadtime)
        document.getElementById("Timer").innerHTML = 'Page load time is ' + pgloadtime.toString() + ' ms';
    }

// document.addEventListener('DOMContentLoaded', onPageLoad);
