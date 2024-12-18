function setup(){
    let buttons = document.getElementById("buttons");
    let ok = document.createElement("button");
    ok.innerHTML = "ok";
    buttons.appendChild(ok);
    let cancel = document.createElement("button");
    cancel.innerHTML = "cancel";
    buttons.appendChild(cancel);
    alert("did this work");
}
