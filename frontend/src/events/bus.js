import {emit,on} from '../utils/events.js';export const bus={emit,on,projectChanged(id){emit('project:changed',{id})},character(name,payload={}){emit('character:invoke',{name,...payload})}};
