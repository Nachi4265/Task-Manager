


window.addEventListener("load",() =>{ //when the page loads we want to get our elements. 
    const form = document.querySelector("#task-form");
    const input= document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");


    form.addEventListener("submit", (e) => { // we are adding a another eventlistener to listen to what going on inside of the form. 
        e.preventDefault(); 

        const task = input.value; //created a const with the name value and its connected to our input (connected to our #new-task-input)

        if (!task) {
            alert("Add a Task");
            return;
        }//if there is no task in the text area , it will send an alert. 

        const task_el = document.createElement("div");//Here we are createing an element called task_el (task element)that creates a div(and the css)
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");//Here we are createing an element called task_content_el (task  content element)that creates a div(ands the content)
        task_content_el.classList.add("content");



        task_el.appendChild(task_content_el);//here we are appedning the task_el to the task_content so that the content is inside of the element.

        const task_input_el = document.createElement('input');//Making and adding the value of an input (like in html)"
        task_input_el.classList.add("text"); //this adds the styling from the task_input_el to the text. 
        task_input_el.type ="text";//making it so you can type within it. 
        task_input_el.value = task; //setting the value of it to a task. (this will help satify the varification) 
        task_input_el.setAttribute("readonly", "readonly");//makes it so that the placeholder is readonly and cannot be editded 

        task_content_el.appendChild(task_input_el);//here we are appedning the task_content_el to the task_input_el so that the content is inside of the element.



        //Activation of our buttons. 
        const task_actions_el = document.createElement("div");//made a const called task_actions_el that will create a div and add an action to it
        task_actions_el.classList.add("action");

        const task_edit_el = document.createElement("button");// a const called task_edit_el which will create a button and the innner HTML says Change
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Change?";

        const task_remove_el = document.createElement("button");//a const called task_edit_el which will create a button and when its clicked it will remove task
        task_remove_el.classList.add("remove");
        task_remove_el.innerHTML = "Remove?";

        task_actions_el.appendChild(task_edit_el); //appending the task_actions_el to the task_edit_el which adds actions to our buttons. like an onclick()
        task_actions_el.appendChild(task_remove_el);//appending the task_actions_el to the task_remove_el which adds actions to our buttons. like an onclick()

        task_el.appendChild(task_actions_el);//appending the task_el to the task_actions_el which lets is use our buttons on the task.

         list_el.appendChild(task_el);//appending the list_el to the task_el which allows us to later remove it from our task

         input.value = "";


         



         task_edit_el.addEventListener("click",() => {//when the edit button is clicked it will change the innerhtml ( removes the read only attibute and forcus there to allow us to type )
          if(task_edit_el.innerText.toLowerCase() == 
          "edit"){
            task_edit_el.innerHTML = "Save?";
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
           
          } else {
            task_input_el.setAttribute("readonly","readonly");// Or when it is 
            task_edit_el.innerText = "Edit";
        }
    });
        task_remove_el.addEventListener("click", ()=> {
        list_el.removeChild(task_el);
    });
   });
});



