let list = document.querySelectorAll('.list .item');
list.forEach(item=> {
    item.addEventListener('click',function(event){
        if(event.target.classList.contains('add')){
            //copy 1 item
            var itemNew = item.cloneNode(true);
            //kiểm tra tồn tại
            let checkIsset = false;
            //lựa chọn tất cả các cart và item
            let listcart = document.querySelectorAll('.cart .item');
            listcart.forEach(cart=>{
                if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
                    //nếu sản phẩm tồn tại thì tạo ra cảnh báo danger
                    checkIsset = true;
                    cart.classList.add('danger');
                    setTimeout(function(){
                        cart.classList.remove('danger');
                    },1000)
                }
            })
            //nếu chưa tồn tại
            if(checkIsset == false){
                //thêm 1 item mới vào trong listcart
                document.querySelector('.listcart').appendChild(itemNew);
            }
             
            
        }
    })
})
//function xóa sản phẩm trong giỏ hàng
function remove($key){
    let listcart = document.querySelectorAll('.cart .item');
    listcart.forEach(item=>{
        //nếu key lấy được bằng $key thì sẽ xóa item đó
        if(item.getAttribute('data-key') == $key){
            item.remove();
            return;
        }
    })
}