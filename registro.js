function validar(){
    let formulario = document.getElementById("formulario");
    let formData = new FormData(formulario);

    // Convertir FormData a un objeto simple
    let datos = {};
    formData.forEach(function(value, key){
        datos[key] = value;
    });

    const checkbox = document.getElementById("condiciones");
    const errorMesasge = document.querySelector(".error");
    
    if(datos["correo"] === "" || datos["contraseña"] === ""){
        errorMesasge.textContent = "Correo o contraseña invalidos";
        errorMesasge.hidden = false;
    }else{
        if(!checkbox.checked){
            errorMesasge.textContent = "Debes aceptar los terminos y condiciones";
            errorMesasge.hidden = false;
        }else{
            errorMesasge.hidden = true;
            window.location.href = './index.html';
        }
    }


    

    // Mostrar los datos en la consola (puedes hacer lo que quieras con ellos)
    console.log(datos);

}