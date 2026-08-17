export async function storageService(action='read',payload={}){return {service:'storage',action,payload,mode:'local-first'}}
