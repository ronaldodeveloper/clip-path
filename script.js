

window.onload= ()=>{ //apos a pagina carregar execute

let efect = document.querySelector('#efect')
let efect1 = document.querySelector('.efect_one')
let efect2 = document.querySelector('.efect_two')
let efect3 = document.querySelector('.efect_three')
let efect4 = document.querySelector('.efect_four')


 efect1.addEventListener('click', ()=>
 { 
    efect.classList.toggle('position_chevron');
 });

 efect2.addEventListener('click', ()=>
 {
    efect.classList.toggle('position_cicle');
 });

 efect3.addEventListener('click', ()=>
 {
    efect.classList.toggle('position_pentagono');
 });

 efect4.addEventListener('click', ()=>
 {
    efect.classList.toggle('position_lozango');
 });
}
