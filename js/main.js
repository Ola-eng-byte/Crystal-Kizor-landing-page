// Highlight the active scale in the index as the visitor scrolls.
const links=[...document.querySelectorAll('.idx a')];
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting)links.forEach(l=>l.style.color=l.getAttribute('href')==='#'+e.target.id?'var(--ink)':'');
}),{rootMargin:'-40% 0px -55% 0px'});
links.forEach(l=>{const s=document.querySelector(l.getAttribute('href'));if(s)io.observe(s)});
// Destinations not yet confirmed: keep placeholder links from jumping to the top.
document.querySelectorAll('[data-todo]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
