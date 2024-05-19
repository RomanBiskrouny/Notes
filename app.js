const inputText = document.getElementById('input-text')
const btnAddNote = document.getElementById('btn-add-note')
const btnCheckNote = document.getElementById('btn-check-note')
const btnDeleteNote = document.getElementById('btn-delete-note')
const spanText = document.getElementById('span-text')
const ulElement = document.getElementById('ul-note')

const notes = [{
    title: "Hello",
    completed: true
},
{
    title: "Noob",
    completed: false
}]

function render() {
    ulElement.innerHTML=''
    for (let [index, element] of notes.entries()) {
        ulElement.insertAdjacentHTML('beforeend', addNoteTemplete(index, element))
    }
    if (notes.length === 0) {
        ulElement.insertAdjacentHTML('beforeend',         
        `
            <p>No notes</p>
        `
    )
    }
}
render()

function addNoteTemplete(index, note) {
    return  `
                <li>
                    <div class="note-text">
                        <span id="${note.completed ? 'span-text-crossed-out' : 'span-text'}">${note.title}</span>
                        <div class="btn-notes">
                            <button id="${note.completed ? 'btn-check-note-true' : 'btn-check-note-false'}"
                            data-type="check"
                            data-index="${index}">
                                <img src="images/icon-checkbox.png" alt="check"
                                data-type="check"
                                data-index="${index}"/>
                            </button>
                            <button id="btn-delete-note"
                            data-type="delete"
                            data-index="${index}">
                                <img src="images/icon-delete.png" alt="delete" 
                                data-type="delete"
                                data-index="${index}"/>
                            </button>
                        </div>
                    </div>
                </li>
            `  
}

btnAddNote.onclick = function addNote() {
    if (inputText.value.length === 0) {
        return
    }
    const newNote = {
        title: inputText.value,
        completed: false
    }
    notes.push(newNote)
    render()
    inputText.value = ''
}

ulElement.onclick = function (event) {
    console.log(event.target.dataset.index)
    if (event.target.dataset.index) {
        const index = event.target.dataset.index
        const type = event.target.dataset.type

        if (type === "check") {
            notes[index].completed = !notes[index].completed
        }
        else if (type === "delete") {
            notes.splice(index,1)
        }
        render()
    }
}