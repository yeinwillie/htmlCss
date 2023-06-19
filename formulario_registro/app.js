// Captura de elementos

const formulario = document.querySelector("#formulario");
const inputs = document.querySelectorAll("#formulario input");
const textarea = document.querySelector("#formulario textarea");                           


// expresiones regulares para comprobar los campos del formulario

const expresiones = {
	
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,	
}

// Funcion que controla el flujo del formulario

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre")

        break;

        case "email":
            validarCampo(expresiones.correo, e.target, "email")
            
        break;
    }
    
}      

// Funciona validadora de campos 

// tipo input
const validarCampo = (expresion, input , campo ) => {
    if (expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-circle-xmark");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-circle-check");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");                

    } else {
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-circle-check");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-circle-xmark");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
    }
}

//tipo textarea

const validarFormularioTextarea =  () => {
    if (textarea.value.length ===0) {
        document.querySelector("#grupo__mensaje .formulario__input-error").classList.add("formulario__input-error-activo");

    } else {
        document.querySelector("#grupo__mensaje .formulario__input-error").classList.remove("formulario__input-error-activo");
    }
}

// Funcion que escucha los eventos keyup y blur en los campos
// eventos en input
inputs.forEach((input)=>{
    input.addEventListener("keyup", validarFormulario );
    input.addEventListener("blur", validarFormulario  );
})

// eventos en textarea
textarea.addEventListener("keyup", validarFormularioTextarea);                                              
textarea.addEventListener("blur", validarFormularioTextarea)                                               

// Funciones que evitan el funcionamiento por defecto del formulario

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
})