console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = "Click the dragon";

var img = document.getElementById('png');


var marginRight = 0;
function move() {
    marginRight = marginRight + 5;
img.style.marginRight= marginRight + "px";
    
}
img.onclick = function() {
    var interval = setInterval(move,50);

};