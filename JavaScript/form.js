var selectedRow = null;

function showAlert(message, className){
    const div = document.createElement("div");
    div.className = 'alert alert-${className}';

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);


}

function clearFields(){
    document.querySelector("#firstName").value = "";
    document.querySelector("#licName").value = "";
    document.querySelector("#rollNo").value = "";
}

document.querySelector("#student-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    const firstName = document.querySelector("#firstName").value;
    const licName = document.querySelector("#licName").value;
    const rollNo = document.querySelector("#rollNo").value;

    if(firstName == "" || licName == "" || rollNo == ""){
        showAlert("Por favor rellene todos los cuadros", "danger");
    }

});

document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Se eliminó elemento", "danger");
    }
});