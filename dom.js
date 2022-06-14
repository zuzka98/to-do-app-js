import { addToDo, removeToDo } from "./actions.js"
const submitButton = document.getElementById('submit-button')
const removeButton = document.getElementById('remove-button')








removeButton.addEventListener('click', removeToDo)
submitButton.addEventListener('click', addToDo)
