
var myStore = []
function valueOnScreen(parameter) {
    
    if (switchInput.checked == false) {
        alert("Please turn on the switch to use the Calculator")
    } else {
        myInput.value += parameter
        myStore.push(myInput.value)
    }
}

function equals() {
        myInput.value = eval(myInput.value)
}

function memoryPlus() {
    myStore = myStore + myInput.value
}

function memoryRemember() {
    myInput.value = myStore
}

function memoryMinus() {
    myStore = myStore.pop()
}

function clearAll() {
    myInput.value = ""
    myStore = ""
}

function delTodo() {
    myInput.value = myInput.value.substring(0, myInput.value.length - 1);
    // valueOnScreen()
};

function switchType() {
    if (switchInput.checked == true) {
        lights.style.backgroundColor = "white";
        myInput.style.backgroundColor = "rgb(162, 161, 161)"
    } else {
        lights.style.backgroundColor = "black";
        myInput.style.backgroundColor = "black"
        myInput.value = ""
    }
}