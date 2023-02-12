const bar = document.querySelector('.fa-bars')
const xmark = document.querySelector('.fa-xmark')
const menu = document.querySelector('.links1')


bar.addEventListener("click", function(){
    menu.style.display = 'block';
    bar.style.display = 'none'
    xmark.style.display = 'block'
})

xmark.addEventListener('click', function(){
    menu.style.display = 'none';
    bar.style.display = 'block'
    xmark.style.display = 'none'
})
