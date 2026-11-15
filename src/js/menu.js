const toggle=document.querySelector('.menu-toggle');
const close=document.querySelector('.menu-close');
const menu=document.querySelector('.mobile-menu');
const scrim=document.querySelector('.scrim');
function setMenu(open){
  document.body.classList.toggle('menu-open',open);
  toggle.setAttribute('aria-expanded',String(open));
  menu.setAttribute('aria-hidden',String(!open));
}
toggle.addEventListener('click',()=>setMenu(true));
close.addEventListener('click',()=>setMenu(false));
scrim.addEventListener('click',()=>setMenu(false));
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
