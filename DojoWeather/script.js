function loading(){
    alert("Loading weather report...")
}

var butt = document.querySelector(".cookie")
function accept(){
    butt.style.display = 'none';
}
var Farren = document.getElementsByClassName('temp').innerHTML

function C2F(){
        Farren * 9 / 5 + 32;
        return Farren;
}
