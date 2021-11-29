let pass :HTMLFormElement = document.forms["password"]
pass.addEventListener('submit',(myEvent) => {
    alert(pass["test"].value)
    myEvent.preventDefault()
})
alert("uytresdcvb")