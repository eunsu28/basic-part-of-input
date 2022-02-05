const form = document.getElementById("search");
const input = form.querySelector("input")

function handleSubmit(event){
    event.preventDefault();
}

form.addEventListener('submit', handleSubmit)