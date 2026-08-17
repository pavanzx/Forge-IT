export const lerp=(a,b,t)=>a+(b-a)*t; export const easeOut=t=>1-Math.pow(1-t,3); export const mapRange=(n,a,b,c,d)=>c+(n-a)*(d-c)/(b-a);
