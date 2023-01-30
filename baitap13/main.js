let alerts = document.querySelectorAll('.alert');
alerts.forEach(item=>{
    item.addEventListener('click',function(event){
        if(event.target.classList.contains('close')){
            item.style.display = 'none';
        }
    })
})
window.addEventListener('offline',function(){
    this.document.getElementById('success').style.display = 'none';
    this.document.getElementById('error').style.display = 'grid';
})
window.addEventListener('online',function(){
    this.document.getElementById('success').style.display = 'grid';
    this.document.getElementById('error').style.display = 'none';
})