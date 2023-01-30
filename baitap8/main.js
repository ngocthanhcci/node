let password = document.getElementById('password');
let power = document.getElementById('power-point');
password.oninput = function(){
    let point = 0;
    let value = password.value;
    let widthPower = ['1%','25%','50%','75%','100%'];
    let colorPower = ['#D73F40','#DC6551','#F2B84F','#BDE952','#30CEC7'];
    if(value.length >=6){
        let arrayTest = [
            /[0-9]/,
            /[a-z]/,
            /[A-Z]/,
            /[^0-9a-zA-Z]/
        ]
        arrayTest.forEach(item=>{
            if(item.test(value)){
                point = point + 1;
            }
        })
        // if(/[0-9]/.test(value)){
        //     point = point + 1;
        // }
        // if(/[a-z]/.test(value)){
        //     point = point + 1;
        // }
        // if(/[A-Z]/.test(value)){
        //     point = point + 1;
        // }
        // if(/[^0-9a-zA-Z]/.test(value)){
        //     point = point + 1;
        // }
    }
    power.style.width = widthPower[point];
    power.style.backgroundColor = colorPower[point];
}