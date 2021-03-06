const button = document.getElementById("button")
const toast  = document.getElementById("toasts")

const messeage = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four",
    "Message Five"
]
const types = [
    "info",
    "error",
    "succes"
]
button.addEventListener("click", ()=>{
    randomMeassege()

})
function randomMeassege(messege = null, type = null){
    const createNotif = document.createElement("div")
    createNotif.classList.add("toast")
    createNotif.classList.add(type ? type : randomtype())
    createNotif.innerText = messege ? messege: random()
    toast.appendChild(createNotif)
    setTimeout(()=>{
        createNotif.remove()
    }, 2000)
}

function random(){

    return messeage[Math.floor(Math.random()  * messeage.length)]
}

function randomtype(){

    return types[Math.floor(Math.random()  * types.length)]
}