let inner = document.querySelector('.inner');

inner.addEventListener('mousemove',function(event){
    //để thay đổi biến trong css sử dụng biến setProperty
    //từ vị trí left-focus chuyển sang vị trí của chuột là x
    // từ bị trí top-focus chuyển sang vị trí của chuột là y 
   document.documentElement.style.setProperty("--left-focus",event.x + 'px');
   document.documentElement.style.setProperty("--top-focus",event.y + 'px');
})