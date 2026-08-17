export const tabs=(items,active)=>`<div class="tabs">${items.map(x=>`<button class="tab ${x.id===active?'active':''}" data-tab="${x.id}">${x.label}</button>`).join('')}</div>`;
