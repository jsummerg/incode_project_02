document.addEventListener("DOMContentLoaded", () => {

    // DOM elements
    const form = document.querySelector("form")
    const firstName = document.getElementById('first-name')
    const lastName = document.getElementById('last-name')
    const phoneNumber = document.getElementById('phone-number')  
    const email = document.getElementById('email')  
    const popUp = document.getElementById('confirmation-popup')
    const closeButton = document.getElementById('close-button')
    const textArea = document.getElementById('message')
    const inputStyle = document.querySelectorAll('.form-style div input')

    form.onsubmit = (e) => {
        e.preventDefault() // Prevents the page from refreshing when submitted

        // Validation
        validFirstName = /^[A-Za-zÀ-ÖØ-öø-ÿ \-']+$/i.test(firstName.value)
        validLastName = /^[A-Za-zÀ-ÖØ-öø-ÿ \-']+$/i.test(lastName.value)
        validPhoneNumber = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm.test(phoneNumber.value)  /* https://regexr.com/38pvb */
        validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value) /* regex from https://www.w3resource.com/javascript/form/email-validation.php */
        
        let validTextArea = false

        if (textArea.value.length > 0) {
            validTextArea = true
        }

        // Checks if the phone number is not inputed at all since it's not required
        let emptyPhoneNumber = false

        if (phoneNumber.value === '') {
            emptyPhoneNumber = true
        }

        for (i = 0; i < inputStyle.length; i++) { // Goes through each input element
            inputStyle[i].style.webkitTextFillColor="black" // changes each element back to black font colour
        }
        
        textArea.style.webkitTextFillColor="black"
        

        // Checks if everything is true and displays the modal else it shows an error message
        if (validFirstName && validLastName && (validPhoneNumber || emptyPhoneNumber) && validEmail && validTextArea) {
            popUp.showModal()
            form.reset()
        }
        if (validFirstName === false) {
            firstName.style.webkitTextFillColor="red"
        }
        if (validLastName === false) {
            lastName.style.webkitTextFillColor="red"
        }
        if (validEmail === false) {
            email.style.webkitTextFillColor="red"
        }
        if (validPhoneNumber === false) {
            phoneNumber.style.webkitTextFillColor="red"
        }
        if (validTextArea === false) {
            textArea.style.webkitTextFillColor="red"
        }

    }

    closeButton.onclick = () => {
        popUp.close()
    }
})