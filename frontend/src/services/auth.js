export async function authService(action='read',payload={}){return {service:'auth',action,payload,mode:'local-first'}}
