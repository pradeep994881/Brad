function GetAcall(event){
    event.preventDefault();
    console.log(event.target.fName.value);
    console.log(event.target.mails.value);
    console.log(event.target.number.value);
    console.log(event.target.date.value)
    console.log(event.target.time.value)
}

const form=document.querySelector("form");
form.addEventListener("submit",e=>{
    if(!form.checkValidity()){
        e.preventDefault()
    }
    form.classList.add("was-validated")
})