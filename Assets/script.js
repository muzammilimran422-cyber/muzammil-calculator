function str(num) {
    document.getElementById("inp").value += num;

    document.getElementById("live-display").innerText = document.getElementById("inp").value || "0";
}

function clr() {
    document.getElementById("inp").value = "";

    document.getElementById("live-display").innerText = "0";
}

function del() {
    let a = document.getElementById("inp").value;
    document.getElementById("inp").value = a.slice(0, -1);

    document.getElementById("live-display").innerText = document.getElementById("inp").value || "0";
}

function eql() {
    try {
        let b = eval(document.getElementById("inp").value);
        document.getElementById("inp").value = b;
        document.getElementById("live-display").innerText = b;
    } 
    
    catch {
        document.getElementById("live-display").innerText = "Error";
    }
}