const button = document.querySelector("button");
const theListHolder = document.querySelector("ul");
let inputBox =  document.querySelector("input")
// let li = document.createElement("li");

function addItem(){
  if(inputBox.value === ""){
    alert("You should put something 👿");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = `<span class="text">${inputBox.value}</span>`;
    theListHolder.append(li);
    // store();

   
    
    let span = document.createElement("span");
    span.classList.add("delete");
    // store();

    span.innerHTML = "\u00d7";


    li.appendChild(span);
    inputBox.value = "";

    store();
  }
}

button.addEventListener("click",addItem);
inputBox.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        addItem();

    }
})

theListHolder.addEventListener("click", (event) => {
  if (
    event.target.tagName === "LI" ||
    event.target.classList.contains("text")
  ) {
    let li = event.target.closest("li");
    li.classList.toggle("checked");
  } else if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
    del();
  }
});


function store() {
  localStorage.setItem("task", theListHolder.innerHTML);
}
function del() {
  store();
  // localStorage.removeItem("task");
}
function display() {
  theListHolder.innerHTML = localStorage.getItem("task");
}
display();

