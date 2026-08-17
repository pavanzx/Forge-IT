export async function healthService(action='read',payload={}){return {service:'health',action,payload,mode:'local-first'}}
