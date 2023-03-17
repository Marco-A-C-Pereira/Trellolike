import { showModal_Edit, clearFields } from "./modal.js";
import { formatDistanceToNow } from 'date-fns';

export { Card };

const inputFields = document.querySelectorAll(".input-container");

//Constructor
class Card {
  static #_cardInstances = [];
  static get cardInstances() {
    return this.#_cardInstances;
  }
  static selectedId = 0;

  #_cardTemplate = document.getElementById("card-template");
  #_cardNodes = this.#_cardTemplate.content.firstElementChild.cloneNode(true);
  #_cardBtnCheckbox = this.#_cardNodes.querySelector(
    ".card-btn input[type=checkbox]"
  );
  #_cardBottom = this.#_cardNodes.querySelector('.card-bottom');

  constructor(title, { time, type }, due, btn) {
    (this._id = Card.cardInstances.length + 1), // Alterar a geração de ID
      (this._title = title),
      (this._duration = { time: time, type: type }),
      (this._due = due),
      (this._btn = btn);

    Card.#_cardInstances.push(this);

    this.#_cardBtnCheckbox.addEventListener("change", (e) => {
      e.target.checked === true ? this.addDone() : this.removeDone();
    });

    this.#_cardNodes
      .querySelector(".card-body")
      .addEventListener("click", (e) => {
        console.log(this);
        clearFields();
        Card.selectedId = this._id;
        this.prepareFields();
        showModal_Edit();
      });

    this.append();
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }

  get duration() {
    return this._duration;
  }

  get time() {
    return this.duration._time;
  }
  set time(value) {
    this._time = value;
  }

  get type() {
    return this.duration._type;
  }
  set type(value) {
    this._type = value;
  }

  get due() {
    return this._due;
  }
  set due(value) {
    this._due = value;
  }

  get btn() {
    return this._btn;
  }

  append() {
    // Sempre verificar no CSS quantas variações de card existem
    const variationNumber = Math.floor(Math.random() * 2) + 1;
    this.#_cardNodes.classList.add(`card-variation-${variationNumber}`);

    this.updateHTML();

    document.querySelector(".card-container").appendChild(this.#_cardNodes);
  }

  edit() {
    this.updateHTML();
  }

  delete() {
    this.#_cardNodes.remove();
  }

  updateHTML() {
    this.#_cardNodes.querySelector(".card-title").innerText = this._title;
    this.#_cardNodes.querySelector(".card-duration").innerText =
      this._duration.time + this._duration.type;

    if (this._due) {
      this.#_cardBottom.classList.remove('hidden')
      let selectedDate = this._due.split('-')
      selectedDate[1] = +selectedDate[1] - 1 
      // Não é a melhor boa prática, de string vira int 
      // Porém o método aceita mesmo assim XD

      this.#_cardNodes.querySelector('.card-due-remaining').innerText = "in " + formatDistanceToNow(new Date(...selectedDate));
    } 
    else {
      this.#_cardBottom.classList.add('hidden')
    }
  }

  addDone() {
    this.#_cardNodes.classList.add("done");
  }

  removeDone() {
    this.#_cardNodes.classList.remove("done");
  }

  // Preenche os campos do modal (Código bem feio)
  prepareFields() {
    inputFields.forEach((field) => {
      for (let key in this) {
        let keyString = key.substring(1);
        let fieldInput = field.querySelector(`input[id=card-${keyString}]`);

        if (this[key] !== "" && fieldInput) {
          if (keyString !== "duration") {
            fieldInput.value = this[key];
          }

          if (keyString === "duration" && this[key].time && this[key].type) {
            fieldInput.value = this[key].time;
            document.querySelector(
              `.timeOptions label input[id^="${this[key].type}"]`
            ).checked = true;
            console.log(fieldInput.value);
          }

          // Soa um pouco como gambiarra mas funciona
          const event = new Event("change");
          field.querySelector("input").dispatchEvent(event);
        }
      }
    });
  }
}
