//dùng hàm getTime để lấy số ms
let endDate =new Date("02/28/2023 00:00:00").getTime();
let check = setInterval(function(){
    //now là thời gian hiện tại
    let now = new Date().getTime();
    //distance là thời gian chênh lệch
    let distance = endDate - now;
    let day = Math.floor(distance / (24*60*60*1000));
    let hour = Math.floor(distance % (24*60*60*1000) / (60*60*1000));
    let minute = Math.floor(distance % (60*60*1000) / (60*1000));
    let second = Math.floor(distance % (60*1000) / (1000));

    //sử dụng innerText để thay đổi text trong html
    document.getElementById('day').innerText = day;
    document.getElementById('hour').innerText = hour;
    document.getElementById('minute').innerText = minute;
    document.getElementById('second').innerText = second;
    //nếu đã hết số thời gian chênh lệch thì sẽ xóa hàm đếm 
    if(distance <= 0){
        clearInterval();
    }
},1000)