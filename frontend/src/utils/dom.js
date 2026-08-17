export const $=(s,r=document)=>r.querySelector(s); export const $$=(s,r=document)=>[...r.querySelectorAll(s)]; export const html=(el,markup)=>{el.innerHTML=markup;return el};
