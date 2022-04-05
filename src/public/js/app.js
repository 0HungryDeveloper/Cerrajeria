const nav = document.querySelector('nav');

window.addEventListener('scroll',function(){
    if(window.pageYOffset > 100){
        //Se agrega la barra negra
        nav.classList.add('bg-dark','shadow')
    }else{
        //Se retira
        nav.classList.remove('bg-dark','shadow')
    }
})