window.onload = Pageloadtime;

    function Pageloadtime(){
        let start = performance.timing.navigationStart
        let currentTime = Date.now()
        let loadTime = currentTime - start
        document.getElementById("Timer").innerHTML = 'Page load time is ' + loadTime.toString() + ' ms';
    }
