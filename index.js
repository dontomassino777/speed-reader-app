const textForm = document.getElementById("text-form")
const inputText = document.getElementById("input-text")
const readButton = document.getElementById("read-button")
const readerDiv = document.getElementById("reader-div")

function processText() {

}

function submitHandler(event) {
    event.preventDefault()

    // let textToBeRead = document.getElementById("input-text")

    let textObject = {
        inputText: inputText.value
    }

    processText(textObject)
    
    inputText.value = ''
}

textForm.addEventListener('submit', submitHandler)