// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const editFuild = document.querySelector(".rename");

// onkeyup event
inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; //getting user entered value
  if(userEnteredValue.trim() != 0){ //if the user value isn't only spaces
    addBtn.classList.add("active"); //active the add button
  }else{
    addBtn.classList.remove("active"); //unactive the add button
  }
}
showTasks(); //calling showTask function

addBtn.onclick = ()=>{ //when user click on plus icon button
  let userEnteredValue = inputBox.value; //getting input field value
  let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
  if(getLocalStorageData == null){ //if localstorage has no data
    listArray = []; //create a blank array
  }else{
    listArray = JSON.parse(getLocalStorageData);  //transforming json string into a js object
  }
  listArray.push(userEnteredValue); //pushing or adding new value in array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
  showTasks(); //calling showTask function
  addBtn.classList.remove("active"); //unactive the add button once the task added
}

function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += 
    `<li>${element} 
    <button onclick="deleteTask(${index})">DEL</button> 
    <button onclick="editTask(${index})">EDIT</button> 
    <button onclick="comlTask(${index})">C</button> 
    </li>`;
});
  todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
  inputBox.value = ""; //once task added leave the input field blank
}

// delete task function
function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); //delete or remove the li
  var completeStyle = document.createElement('style'); 
  completeStyle.innerText = `li:nth-child(${index+1}) {text-decoration: none;}`; 
  document.body.appendChild(completeStyle); 
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); //call the showTasks function
}

function comlTask(index){ 
  var completeStyle = document.createElement('style'); 
  completeStyle.innerText = `li:nth-child(${index+1}) {text-decoration: line-through;}`; 
  document.body.appendChild(completeStyle); 
  showTasks(); //call the showTasks function 
  }

  function editTask(index){

  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  let newEditField = "";
  listArray.forEach(() => {
    newEditField = 
    `<div>
    <input type="text" id="Input""></input>  
    <button id="OK">OK</button>
    </div>`;
});
  editFuild.innerHTML = newEditField;
  let bt = document.getElementById('OK');

  bt.onclick = ()=>{
    let a = document.getElementById('Input').value;
    if (a === '')
    {
      deleteTask(index);
      editFuild.innerHTML = '';
    }
    else{
      listArray.splice(index, 1, a);
      localStorage.setItem("New Todo", JSON.stringify(listArray));
      editFuild.innerHTML = '';
      showTasks(); //call the showTasks function
    }
  }
}
