export const key=(keys,fn)=>window.addEventListener('keydown',e=>{if(keys.includes(e.key.toLowerCase()))fn(e)});
