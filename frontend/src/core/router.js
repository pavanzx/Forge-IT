import {store} from '../state/store.js';import {render} from './renderer.js';export const router={go(page){store.setPage(page);render()},start(){render()}};
