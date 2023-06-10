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
    else{
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${firstName}</td>
                <td>${licName}</td>
                <td>${rollNo}</td>
                <td>
                <a href="#" class="btn btn-warning btn-sm edit">Editar</a>
                <a href="#" class="btn btn-danger btn-sm delete">Eliminar</a>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Alumno añadido correctamente", "success");
        }
        else{
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = licName;
            selectedRow.children[2].textContent = rollNo;
            selectedRow = null;
            showAlert("Información del estudiante editada", "info")
        }

        clearFields();
    }
});

document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#firstName").value = selectedRow.children[0].textContent;
        document.querySelector("#licName").value = selectedRow.children[1].textContent;
        document.querySelector("#rollNo").value = selectedRow.children[2].textContent;
    }
})

document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Se eliminó elemento", "danger");
    }
});