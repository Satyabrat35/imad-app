console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = "Click the dragon";

var img = document.getElementById('png');

function move() {
img.style.marginRight= "5px";
    
}
img.onclick = function() {
    var interval = setInterval(move,50);

};