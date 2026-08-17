export async function tasksService(action='read',payload={}){return {service:'tasks',action,payload,mode:'local-first'}}
