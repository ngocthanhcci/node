var canvas = document.querySelector('canvas');

canvas.width = innerWidth;
canvas.height= innerHeight;
// tạo cây bút để vẽ
var pen = canvas.getContext('2d');
// tạo tọa độ để vẽ điểm có 2 giá trị
var mouse = {
    x:window.innerWidth / 2,
    y:window.innerHeight /2
}
var mouseIn = false;
// gọi đến con chuột đang di chuyển
window.addEventListener('mousemove',function(event){
    mouse.x = event.x;//tọa độ của chuột
    mouse.y = event.y;
    // chuột đang trong màn hình
    mouseIn = true;
})
window.addEventListener('mouseout',function(){
    //chuột ngoài màn hình
    mouseIn = false;
})
var circleArray = [];
// tạo mạng màu sắc
var colors = [
    '#E37B40',
    '#46B29D',
    '#DE5B49',
    '#324D5C',
    '#F0CA4D'
]
// chứa các giá trị của hình tròn
function Circle(x,y,r,dx,dy){
    this.x = x;
    this.y = y;
    this.r = r;
    // random để lấy mã màu bất kì
    this.color = colors[Math.floor(Math.random()*colors.length)];
    this.draw = function(){
        pen.beginPath();
        // tham số để vẽ hình tròn
        pen.arc(this.x,this.y,this.r,0,Math.PI*2);
        // dùng để to màu
        pen.fillStyle = this.color;
        // khai báo fill để tiến hành vẽ
        pen.fill();
    }
    // cập nhập vị trí liên tục
    this.update =function(){
        this.x = this.x + dx;
        this.y = this.y + dy;
        // vị trí sinh ra - vị trí hiện tại
        if(mouse.x - this.x < 100 && mouse.x - this.x > -100 && mouse.y - this.y < 100 && mouse.y - this.y > -100){
            if(this.r < 20){
                this.r+=1;
            }
        }else{
            if(this.r >0){
                this.r-=1;
            }
        }
        // truyền draw để vẽ lại
        this.draw();
    }
}
// function gán giá trị cho hình tròn
function beginApp(){
    // hàm callback
    requestAnimationFrame(beginApp);
    // gọi đến pen để xóa
    pen.clearRect(0,0,canvas.width,canvas.height);
    //nếu chuột trong màn hình
    if(mouseIn == true){
        var x = mouse.x;
        var y = mouse.y;
        var r = 5;
        // dx là số lần di chuyển theo chiều x và y
        var dx = (Math.random() - 0.5) * 5;
        var dy = (Math.random() - 0.5) * 5;
    }
    
    // thêm vào bên trong
    circleArray.push(new Circle(x,y,r,dx,dy));
    // chạy for để liệt kê tất cả trong circleArray
    for(var i = 0; i < circleArray.length;i++){
        // xóa các hình tròn có bán kính bằng 0
        if(circleArray[i].r <= 0){
            // i là vị trí muốn xóa , 1 là số lượng muốn xóa
            circleArray.splice(i,1);
        }
        circleArray[i].update();
    }
}
beginApp();