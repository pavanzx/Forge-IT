export const on=(name,fn)=>window.addEventListener(`forge:${name}`,fn); export const emit=(name,detail={})=>window.dispatchEvent(new CustomEvent(`forge:${name}`,{detail}));
