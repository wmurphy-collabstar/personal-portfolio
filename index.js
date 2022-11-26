document.addEventListener("click", (event) => {
    console.log(event.target.className)
    if (event.target.className === "modal-btn"){
        console.log("Hello")
        const parent = event.target.parentElement
        const children = parent.children
        console.log(children[2])
        children[2].style.display = "block"
    }
})