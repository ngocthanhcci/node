let items = document.querySelectorAll('li');
items.forEach(li=>{
    li.addEventListener('click',function(event){
        document.getElementById('action').style.left = event.target.offsetLeft + 'px';
        items.forEach(li_hide=>{
            li_hide.classList.remove('active');
        })
        this.classList.add('active');
    })
})