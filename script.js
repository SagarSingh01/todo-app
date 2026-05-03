// TO DO APP

function list(e) {
    e.target.parentElement.classList.toggle("list-check");
}

function Todolist() {
        let inputValue = document.querySelector(".input-container>input").value;
        let element = document.createElement("li");

        if (inputValue.trim() === "") {
            return alert("Enter Input!");
        }

        element.innerHTML = `<span onclick="list(event)">${inputValue}</span>
            <div class="input-edit">
                <input type="text">
                <i class="fa-regular fa-floppy-disk" onclick="save(event)"></i>
            </div>
            <div>
        <i class="fa-regular fa-trash-can" onclick = "removeList(event)"></i>
        <i class="fa-regular fa-pen-to-square" onclick="Edit(event)"></i> 
            </div>`;
        document.querySelector(".list-container").append(element);
        document.querySelector(".input-container>input").value = "";
}

function removeList(e) {
    e.target.parentElement.parentElement.remove();
}

function Edit(e) {
    e.target.parentElement.previousElementSibling.classList.toggle("input-edit-show");
}

function save(e) {
    let saveVal = e.target.previousElementSibling.value;
    if (saveVal.trim() === "") return alert("Enter Value to Edit");
    e.target.parentElement.previousElementSibling.innerHTML = saveVal;
    e.target.parentElement.remove();
}

document.addEventListener("keydown" , (e) => {
    if(e.key === "Enter") {
        Todolist();
    }
})