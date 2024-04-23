document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("postulacion-form");
    const cartaTextArea = document.getElementById("carta");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        alert("Formulario enviado con éxito");
    });

    document.getElementById("crear-carta").addEventListener("click", function() {
        const rut = document.getElementById("rut").value;
        const apellidoPaterno = document.getElementById("apellido-paterno").value;
        const apellidoMaterno = document.getElementById("apellido-materno").value;
        const nombre = document.getElementById("nombre").value;
        const fechaNacimiento = document.getElementById("fecha-nacimiento").value;
        const edad = document.getElementById("edad").value;
        const genero = document.getElementById("genero").value;
        const email = document.getElementById("email").value;
        const celular = document.getElementById("celular").value;
        const profesion = document.getElementById("profesion").value;
        const motivacion = document.getElementById("motivacion").value;

        const carta = `Estimados,

        Me llamo ${nombre} ${apellidoPaterno} ${apellidoMaterno}, RUT ${rut}, de ${edad} años de edad, ${genero}, con profesión en ${profesion}. 
        Nací el ${fechaNacimiento}. Mi correo electrónico es ${email} y mi número de celular es ${celular}.
        
        ${motivacion}

        Quedo atentamente a su disposición para cualquier consulta adicional.

        Saludos cordiales,
        ${nombre}`;
        
        cartaTextArea.value = carta;
    });
});















  