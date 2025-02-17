var operation = document.getElementById("screen-operation");
var equal = document.getElementById("equal");
var result = document.getElementById("screen-result");
let new_session = true;

document.querySelectorAll(".btn").forEach(function(div) {
    div.addEventListener("click", function() {
        if (new_session) {
            operation.textContent = "";
            new_session = false;
        }

        let value = div.textContent.trim();
        let lastChar = operation.textContent.slice(-1);
        if (value === "/" || value === "*") {
            if (lastChar === "+" || lastChar === "-" || lastChar === "/" || lastChar === "*") {
                operation.textContent = operation.textContent.slice(0, -1);
            } else if (operation.textContent.trim() === "") {
                value = "";
            }
        };

        operation.textContent = operation.textContent + value;
    });
});

document.getElementById("del").addEventListener("click", function() {
    operation.textContent = operation.textContent.slice(0, -1);
});

document.getElementById("reinit").addEventListener("click", function() {
    operation.textContent = "";
    result.textContent = "";
});

equal.addEventListener("click", function() {
    let value = operation.textContent.trim();
    if (value.slice(-1) === "." || value.slice(-1) === "+" || value.slice(-1) === "-" || value.slice(-1) === "*" || value.slice(-1) === "/") {
        result.textContent = "Syntaxe error";
    } else {
        result.textContent = "= " + eval(value);
    }
    
    new_session = true;
});