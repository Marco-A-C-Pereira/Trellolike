import { Card } from "./card.js";
export { showModal_Add, showModal_Edit, clearFields};

const modalCardMenu = document.getElementById("modal-cardMenu");

const inputFields = document.querySelectorAll(".input-container");
const optionsBtn = document.querySelector(".modalOptions").querySelectorAll("button");

(() => {
  inputFields.forEach((element) => {
    if (element.querySelector("input").value) {
      element.classList.add("active");
    }

    linkEvents(element);
  },
  bindHideModal()
  
  );
})();

function linkEvents(element) {
  const elementField = element.querySelector("input");
  elementField.addEventListener('focus', addFocus);
  elementField.addEventListener('blur', addBlur);
  elementField.addEventListener('change', changeFocus)

  if (element.querySelector(".timeOptions")) {
    const checkBoxes = element.querySelectorAll(".lbl-toggle");
    checkBoxes.forEach((option) => {
      option.addEventListener("change", addUncheck);
    });
  }
}

function changeFocus(e) {
  const target = e.target;
  target.parentNode.classList.add("active");
}


function addFocus(e) {
  const target = e.target;
  target.parentNode.classList.add("active");
}

function addBlur(e) {
  const target = e.target;
  if (!target.value || target.value==="") {
    target.parentNode.classList.remove("active");
  }
}

function addUncheck() {
  var target = window.event.target;
  const durationBox = document
    .querySelector(".timeOptions")
    .querySelectorAll(".lbl-toggle");

  durationBox.forEach((box) => {
    if (target !== box) {
      box.checked = false;
    }
  });
}

function hideModal() {
  document.querySelector(".overlay").classList.add("hidden");
  modalCardMenu.classList.add("hidden");

  document.getElementById("btn-add").classList.remove("hidden");
}

function showModal_Add() {
  document.querySelector(".overlay").classList.remove("hidden");
  modalCardMenu.classList.remove("hidden");

  document.getElementById("btn-add").classList.add("hidden");

  document.getElementById('deleteCard').classList.add("hidden")
  document.getElementById('editCard').classList.add("hidden")
  document.getElementById('createCard').classList.remove("hidden")
}

function showModal_Edit(){
  document.querySelector(".overlay").classList.remove("hidden");
  modalCardMenu.classList.remove("hidden");

  document.getElementById("btn-add").classList.add("hidden");

  document.getElementById('deleteCard').classList.remove("hidden")
  document.getElementById('editCard').classList.remove("hidden")
  document.getElementById('createCard').classList.add("hidden")
}

function bindHideModal() {
  document.getElementById("cancel").addEventListener("click", () => {
    hideModal();
    clearFields();
  });
  document.querySelector(".overlay").addEventListener("click", () => {
    hideModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalCardMenu.classList.contains("hidden")) {
      hideModal();
      clearFields();
    }
  });
}

function clearFields(){
  Card.selectedId = 0;

  inputFields.forEach((field) => {
      field.querySelector('input').value = ""
      field.classList.remove("active");
  })

  const durationBox = document
    .querySelector(".timeOptions")
    .querySelectorAll(".lbl-toggle");

  durationBox.forEach((box) => {
    box.checked = false;
  })
}

document.getElementById("createCard").addEventListener("click", () => {
  createCard();
  clearFields()
  hideModal();
});

function createCard() {
  let hasTypeChekced = document.querySelector(
    ".timeOptions input[type=checkbox]:checked"
  );

  // Sintaxe feia e não reutilizável.
  const card = new Card(
    document.getElementById("card-title").value,
    {
      time: document.getElementById("card-duration").value,
      type: hasTypeChekced ? hasTypeChekced.nextElementSibling.innerHTML : "",
    },
    document.getElementById("card-due").value
  );
}

document.getElementById('editCard').addEventListener('click', () => {
  let selectedCard = Card.cardInstances.find(card => card.id === Card.selectedId)
  let hasTypeChekced = document.querySelector(
    ".timeOptions input[type=checkbox]:checked"
  );

  selectedCard.title = document.getElementById("card-title").value
  selectedCard.duration.time = document.getElementById("card-duration").value
  selectedCard.duration.type = hasTypeChekced ? hasTypeChekced.nextElementSibling.innerHTML : "",
  selectedCard.due = document.getElementById("card-due").value
  
  
  selectedCard.edit();

  hideModal()
})

document.getElementById('deleteCard').addEventListener('click', () => {
  let selectedCard = Card.cardInstances.find(card => card.id === Card.selectedId);

  selectedCard.delete();
  Card.cardInstances.splice(Card.cardInstances.indexOf(selectedCard), 1)
  hideModal()
})