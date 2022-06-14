import { inputBox, toDoList } from "./elements.js"

const addToDo = () => {
    const inputBoxValue = inputBox.value
    const listItem = createListItem(inputBoxValue)

    toDoList.appendChild(listItem)
    inputBox.value = ''
}

const createListItem = (inputBoxValue) => {
    let listItem = document.createElement('li')
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    listItem.setAttribute('class', 'li-item')
    let listItemText = document.createTextNode(inputBoxValue)
    listItem.appendChild(listItemText)
    listItem.appendChild(checkbox)
    return listItem
}

const removeToDo = () => {
    const listItems = Array.from(document.getElementsByClassName('li-item'))
    return listItems.map((val, idx) => {
        const checkbox = listItems[idx].children[0]
        if (checkbox.checked === true) {
            toDoList.removeChild(listItems[idx])
        }
    })
}

export { addToDo, removeToDo }