const contactForm = document.querySelector('.container')
// getting form data
let name = document.getElementById('fullName')
let email = document.getElementById('email')
let subject = document.getElementById('subject')
let message = document.getElementById('message')

// listening to submit event
contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }
    let xhr = new XMLHttpRequest()
    xhr.open('POST', '/')
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = function () {
        console.log(xhr.responseText)
        if (xhr.responseText === "success") {
            alert("email sent")
            name.value === "",
                email.value === "",
                subject.value === "",
                message.value === ""
        } else {
            alert("something went wrong")
        }
    }
    xhr.send(JSON.stringify(formData))
})