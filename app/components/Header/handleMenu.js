export function openMenu(){
    const menu = document.querySelector('#menuMobile');
    
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        menu.classList.add('transicao');
    }
    else{
        menu.classList.add('hidden');
        menu.classList.remove('transicao');
    }
}