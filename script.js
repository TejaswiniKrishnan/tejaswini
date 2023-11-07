const btn=document.getElementById("btn");
const list=document.getElementById("list");
const inputField=document.getElementById("inputField");
const letter=document.createElement("li");
letter.textContent=btn;
let count=1;
function addToList(){
    const listItem=document.createElement("li");
    listItem.textContent = inputField.value;
    list.appendChild(listItem);
    inputField.value="";
}