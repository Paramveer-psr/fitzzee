const scriptURL = 'https://script.google.com/macros/s/AKfycbzRg6cQS2EzvIwoEAXL09rAwA2NwEdFwLBS5rgeT1xHFOePi5gszyrgid5U8IFnz3D4lQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Sent Succesfully!!!";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})


