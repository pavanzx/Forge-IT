export const empty=(title,body,button='')=>`<div class="empty"><b>${title}</b><div class="small mt-2">${body}</div>${button?`<div class="mt-3">${button}</div>`:''}</div>`;
