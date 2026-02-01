
const addTaskBtn = document.getElementById("btn");
const Lists = document.getElementById("list");
const inputArea = document.getElementById("inputF");
const tableBody = document.querySelector("#table-body");


// function showTable(){
//     tableBody.innerHTML = `
//     <tr>
//         <td>${id}</td>
//         <td>${Task}</td>
//         <td>
//             <button class="delete-button" onclick="deleteUser()">REMOVE</button>
//         </td>
//     </tr>
//     `}


//     function addUser(){
//         inputArea.value.trim();
//         if(inputArea.value == ""){
//             alert("Input Field must be filled out!");
//         } else{
//             inputArea.value = "";
//             showTable();
//         }
//     }

addTaskBtn.addEventListener("click", ()=> {
    let pop = document.createElement("li");
    pop.textContent = inputArea.value;
    Lists.appendChild(pop);
    inputArea.value = "";

})