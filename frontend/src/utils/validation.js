export const required=v=>String(v||'').trim().length>0; export const email=v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
