let items = document.querySelectorAll('li');
let action = document.getElementById('action');
var rotate = 0;
items.forEach(item=>{
    item.addEventListener('click',function(event){
        items.forEach(item_del=>{
            item_del.classList.remove('active');
        });
        rotate = rotate + 100;
        this.classList.add('active');
        action.style.transform ='translate('+(this.offsetLeft + 10)+'px,'+this.offsetTop+'px) rotate('+rotate+'deg)';
    })
})