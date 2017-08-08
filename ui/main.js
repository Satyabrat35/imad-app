console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = "Click the dragon";

var img = document.getElementById('png');
img.onclick = function() {
    img.style.marginRight = '400px';
};