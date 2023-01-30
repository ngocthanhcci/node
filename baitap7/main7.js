// let img = document.getElementById('image');
let menu = document.getElementById('menu')
document.addEventListener('contextmenu',function(event){
    menu.style.display = 'block';
    menu.style.top = event.y + 'px';
    menu.style.left = event.x + 'px';
    event.preventDefault();
})
document.addEventListener('click',function(){
    menu.style.display = 'none';
})
