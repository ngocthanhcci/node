// function Fly(event){
//     console.log(event.clientX,event.clientY)
//     var ufo = document.getElementById('ufo');
//     ufo.style.left = event.clientX + 'px';
//     ufo.style.top = event.clientY + 'px';
// }
setInterval(function Fly(event){
    var ufo = document.getElementById('ufo');
    var width = document.documentElement.clientWidth;
    var heigth = document.documentElement.clientHeight;
    var randomX = Math.floor(Math.random()*width);
    var randomY = Math.floor(Math.random()*heigth);

    ufo.style.left = randomX + 'px';
    ufo.style.top = randomY + 'px';
},1000)