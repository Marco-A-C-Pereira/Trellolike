import {showModal_Add} from './modules/modal.js'

// Impede o teclado do mobile de mudar o viewport
window.addEventListener('load', () => {
    const metaViewport = document.querySelector("meta[name=viewport]");
  
    metaViewport.setAttribute("content", metaViewport.content + ", height=" + window.innerHeight)
 });

document.getElementById('btn-add').addEventListener('click', () => {showModal_Add()})

