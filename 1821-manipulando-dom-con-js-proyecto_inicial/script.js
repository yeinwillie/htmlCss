    (()=> { 
        const btn = document.querySelector("[data-form-btn]"); 

    //todos los elementos son objetos y tienen metodos
    // colocar un data para linkear los eventos es bueno ya que permite cambiar la sclases sin romper la logica

    // listener (escuchara un click sobre el elemento)

    // una vez que se tiene seleccionado el elemnto, se necesita agregar el listener para que este atento 
    // cuando el usuario interactue con ese elemento

    // sintaxis antigua
    /*
    btn.addEventListener("click",function(evento){
        evento.preventDefault();
        const input = document.querySelector("[data-form-input");
        console.log(input.value)
    })*/

    //como arrow function o funciones anonimas

    // funcion que crea la tarea y la agrega el html

    const createTask = evento => {
        evento.preventDefault(); // evita que se recargue la pagina

        const input = document.querySelector("[data-form-input]"); // selecciona lo que s escribe en input

        const  value = input.value; // se captura asigna el valor del input a la variable value

        // const task = document.querySelector("[data-task]"); se selecciona la card trabajaba solo estatico

        const list = document.querySelector("[data-list]"); // selecciona la lista en la variable list

        const task = document.createElement("li"); // crea el elemnto li donde van las actividades pero hay que complementarlo con el elemento padre

        task.classList.add ("card"); // se agregan las clases sacadas al borrar la parte estatica para que se mantengan los estilos

        // se asigna el html a content y se coloca el valor de la variable value para asignar interactividad y poder mostrarlo 
        //luego en el html  
        // usando templateString

        const taskContent = document.createElement("div");

        taskContent.appendChild(checkComplete());
        

        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText =  value;
        taskContent.appendChild(titleTask);
        
        

        input.value = ""; // reinicia el valor del input a un string vacio

        //task.innerHTML = content; // agrega el texto del input tomaod en variable content al html de task

        task.appendChild(taskContent);

        
        task.appendChild(deleteIcon());
        // hay que agregar a list el hijo li
        list.appendChild(task); 

        

       // console.log(content);
     }

    //evento que escucha los click en el boton y ejecuta la funcion createTask
    btn.addEventListener("click", createTask);


    // agregar el check de lista realizada

    const checkComplete = () => {
        const i = document.createElement("i");
        i.classList.add("far" ,"fa-check-square", "icon" );
        i.addEventListener("click", completeTask);
        return i;
    }

    const completeTask = (event)=> {
        //console.log (event.target);
        const element = event.target;
        element.classList.toggle("fas");
        element.classList.toggle("completeIcon");
        element.classList.toggle("far");
    }

    const deleteIcon = () => {

        const i = document.createElement("i");
        i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon" );
        
        i.addEventListener("click", deleteTask );
        return i;
    }

    const deleteTask = (event)=> {
        const parent = event.target.parentElement;
        parent.remove();
        
    }
    
    ; } )();

