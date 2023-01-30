// let ul = document.querySelector('.tag-input ul');
// let input = document.querySelector('.tag-input input');
// let removeAll = document.querySelector('.removeAll');

// let tags = ['HTML','CSS','javascript'];
// function showTags(){
//     document.querySelectorAll('.tag-input').forEach(li => li.remove());
//     tags.forEach((value,key)=>{
//         let newLi = document.createElement('li');
//         newLi.innerText = value;
//         let newRemove = document.createElement('div');
//         newRemove.classList.add('remove');
//         newRemove.setAttribute('onclick',`removeItem(${key})`);
//         newLi.appendChild(newRemove);
//         ul.appendChild(newLi);
        
//     })
// }
// showTags();
// function removeItem(key){
//     delete tags[key];
//     showTags();
// }
// removeAll.addEventListener('click',function(){
//     tags = [];
//     showTags();
// })
// input.addEventListener('keyup',function(event){
//     if(event.key === 'Enter'){
//         if(!tags.includes(this.value)){
        
//             tags.push(this.value);
            
//             showTags();
//         }
//         this.value = '';
//     }
    
// })
let ul = document.querySelector('.tags-input ul');
let input = document.querySelector('.tags-input input');
let deleteAll = document.querySelector('.removeAll button');
let tags = ['html', 'css', 'javascript'];

function showTags(){
    document.querySelectorAll('.tags-input ul li').forEach(li => li.remove());
    tags.forEach((value, key) => {
        let newTag = document.createElement('li');
        newTag.innerText = value;
        let newRemove = document.createElement('div');
        newRemove.classList.add('remove');
        newRemove.setAttribute('onclick', `removeTagItem(${key})`);
        newTag.appendChild(newRemove);
        ul.appendChild(newTag);
    })
}
function removeTagItem(key){
    delete tags[key];
    showTags();
}
showTags();
input.addEventListener('keyup', function(event){
   if(event.key === 'Enter'){
     if(!tags.includes(this.value)){
        tags.push(this.value);
        showTags();
     }
     this.value = '';
   }
})
deleteAll.addEventListener('click', function(){
    tags = [];
    showTags();
})