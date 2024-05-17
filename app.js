const inputText = document.getElementById('input-text')
const btnAddNote = document.getElementById('btn-add-note')
const btnSaveNote = document.getElementById('btn-save-note')
const btnDeleteNote = document.getElementById('btn-delete-note')
const spanText = document.getElementById('span-text')
const ulElement = document.getElementById('ul-note')

const notes = []

function addNote(title) {
    if (title.length === 0) {
        return
    }
    ulElement.insertAdjacentHTML(
        'beforeend',
        `
            <li>
                <div class="note-text">
                    <span id="span-text">${title}</span>
                    <div class="btn-notes">
                        <button id="btn-save-note">
                            <img src="images/checkbox.png" alt="remove" />
                        </button>
                        <button id="btn-delete-note">
                            <img src="images/icon-delete.png" alt="check" />
                        </button>
                    </div>
                </div>
            </li>
        `  
    )
    notes.push(title)
}

btnAddNote.onclick = function () {
    addNote(inputText.value)
    inputText.value = ''
}