const welcomePage = document.getElementById("App");



const myApp = () => {

    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    let span = document.createElement("span");
    let br = document.createElement("br");
    let btn = document.createElement("button");
       
    let addToBasket = document.createElement("input");
    addToBasket.setAttribute("id", "entry");
    
    div.classList.add("inputDiv");
    h1.classList.add('headh1');
    p.classList.add("para");
    btn.classList.add("mybtn");

   

    h1.innerHTML = "Add A List";
    p.innerHTML = "We are here to learn JavaScript ";
    span.innerHTML = " Try it now";
    btn.innerHTML = "Add A List";

    div.appendChild(addToBasket);
    span.appendChild(btn)
    p.appendChild(br);
    p.appendChild(span);
   

    welcomePage.appendChild(h1);
    welcomePage.appendChild(p); 
    welcomePage.appendChild(div);



    btn.addEventListener('click', () => {
        const Input = document.getElementById("entry");
        let divOut = document.createElement("div");
        let showMessage = document.createElement("p");
        let WarnMessage = document.createElement("h4");
        let WarnMessageDiv = document.createElement("div");
        let deleteBtn = document.createElement("button");
        

        divOut.classList.add("outPutCss");
        deleteBtn.classList.add("outPutBtn");
        showMessage.classList.add("outPut");
        WarnMessage.classList.add("WarnMssg");

        deleteBtn.innerHTML = "X";
        WarnMessage.innerHTML = "Please add a todo list ...";

        WarnMessageDiv.appendChild(WarnMessage);

       
        divOut.appendChild(showMessage);
        divOut.appendChild(deleteBtn);
        divOut.appendChild(WarnMessageDiv);
        divOut.appendChild(deleteBtn);
        welcomePage.appendChild(divOut);

        if (Input.value === "") {
            WarnMessageDiv;
        } else {
            
            showMessage.innerHTML = Input.value;
            divOut.removeChild(WarnMessageDiv);
            Input.value = "";
        }


        deleteBtn.addEventListener('click', () => {
            showMessage.remove();
            WarnMessage.remove();
            deleteBtn.remove();
            
        console.log("clicked delete button");
        })
    
    })
  
}




const nums = 7

if (nums === 7) {
    myApp();
} else {
    alert("Something went wrong, please come back soon");
}