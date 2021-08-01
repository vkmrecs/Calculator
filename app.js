function add(data) {
    document.getElementById("screen").value += data;
}

function clrAll() {
    document.getElementById("screen").value = "";
}

function clr() {
    let x = document.getElementById("screen").value;
    document.getElementById("screen").value = x.substr(0, x.length - 1);
}

function calculate() {
    let text = document.getElementById("screen").value;
    let result = eval(text);
    document.getElementById("screen").value = result;
}