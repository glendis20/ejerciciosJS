const mensajeNombre = document.getElementById('mensajeAlertaNombre')

const mensajeTyC = document.getElementById('mensajeAlertTyc')


function validarFormulario(event) {
    event.preventDefault()
    let inputName = document.getElementById('name').value
    
    const inputTyC = document.getElementById('mi-checkboxInput')
   

    if (inputName.value == '') {
        mensajeNombre.innerText = "Complete el campo nombre"
        inputName.classList.add('bgcAlert')
        swal("Error", "Ingrese nombre!", "error");

    }
    if (inputTyC.checked == false) {
        mensajeAlertTyC.innerText = "Acepte los terminos y condiciones"
        swal("Error", "Acepte los terminos y condiciones!", "error");
    }

    if (inputName != "" && inputTyC.checked) {

        swal("Muy bien!","registro existoso","success");
        setTimeout(() =>{
            window.location = "https://glendis20.github.io/calculadoraBasica/"
        },3000)
        
    }


}