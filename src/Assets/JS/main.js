import '../CSS/style.scss'

import {showModal_Add} from './modules/modal.js'
import { Card } from "./modules/card.js";

// Impede o teclado do mobile de mudar o viewport
window.addEventListener('load', () => {
    const metaViewport = document.querySelector("meta[name=viewport]");  
    metaViewport.setAttribute("content", metaViewport.content + ", height=" + window.innerHeight)
  

    if(JSON.parse(localStorage.getItem('Cards')).length ){
        buildCards();
    }

 });

document.getElementById('btn-add').addEventListener('click', () => {showModal_Add()})

window.addEventListener('beforeunload', () => {
    localStorage.setItem('Cards', JSON.stringify(Card.cardInstances))
})

function buildCards() {
    const cards = JSON.parse(localStorage.getItem('Cards'));
    // console.log(cards);

    cards.forEach(JSONCard => {

        new Card(
            JSONCard._title, {
                time: JSONCard._duration.time,
                type: JSONCard._duration.type
            },
            JSONCard._due
        );

    })

}