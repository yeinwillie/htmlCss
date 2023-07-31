// validacion de la edad en la fecha de nacimiento , mayor a 18 años

export function validate(input) {
    const inputType = input.dataset.type;
    if(validators[inputType]){
        validators[inputType](input)
    }
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = showError(inputType, input);
    }
}

const errorMessage = {
    name: {
        valueMissing: "this entry name cannot be empty"
    },
    email:{
        valueMissing: "this entry email cannot be empty",
        typeMismatch: "no vaild email"
    },
    password:{
        valueMissing: "this entry password cannot be empty",
        patternMismatch: "Usar 6 a 12 caracteres, 1 minuscula , 1 mayuscula, 1 numero, 1 caracter especial."// no muestra este error
    },
    birth: {
        //valueMissing: "this entry birth cannot be empty", no se muestra ya que utiliza el mismo tipo para el calculo y saca el ultimo error
        customError: "Must be adult"
    },
    number: {
        valueMissing: "this entry password cannot be empty",
        patternMismatch: "required format XXXXXXXXXX 10 numeros" // no muestra este error tampoco
    },
    direction: {
        valueMissing: "this entry direction cannot be empty",
        patternMismatch: "required format 10 to 40 characters"// no muestra este error tampoco
    },
    city: {
        valueMissing: "this entry city cannot be empty",
        patternMismatch: "required format 4 to 30 characters"// no muestra este error tampoco
    },
    state: {
        valueMissing: "this entry state cannot be empty",
        patternMismatch: "required format 4 to 30 characters"// no muestra este error tampoco
    }
}

const errorType = [
    "valueMissing",
    "typeMismatch",
    "patterMissmatch",
    "customError"

];


function showError (inputType, input){
    let message = "";

    errorType.forEach((error) => {
        if (input.validity[error]){
            console.log(errorMessage[inputType][error]);
            message = errorMessage[inputType][error];
        }
    })

    return message;
}


const validators = {
    birth: (input) => validateBirth(input),
};

/*const inputbirth = document.querySelector("#birth");

    inputbirth.addEventListener("blur", (evento)=> 
    validateBirth(evento.target)
)*/



function validateBirth(inputbirth){
    const clientDate = new Date(inputbirth.value);
    let message = "";
    if (!adult(clientDate)){
        message = "Must be adult";
    }
    //console.log(message)
    inputbirth.setCustomValidity(message); 

}

function adult(date) {
    const actualDate = new Date();
    const confirmationDate = new Date(
        date.getUTCFullYear() + 18, 
        date.getUTCMonth(),
        date.getUTCDate()
        );

    return( confirmationDate <= actualDate)
}