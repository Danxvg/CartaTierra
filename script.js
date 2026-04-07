document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // 📬 FORMULARIO CARTA
    // ==============================
    const formCarta = document.getElementById("formCarta");

    formCarta.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();
        const compromiso = document.getElementById("compromiso").value;

        if (!nombre || !apellido || !correo || !mensaje || !compromiso) {
            alert("Completa todos los campos");
            return;
        }

        // Validación básica correo
        if (!correo.includes("@")) {
            alert("Correo no válido");
            return;
        }

        // Guardar datos
        const nuevaCarta = {
            nombre,
            apellido,
            correo,
            mensaje,
            compromiso,
            fecha: new Date().toLocaleString()
        };

        let cartas = JSON.parse(localStorage.getItem("cartas")) || [];

        cartas.push(nuevaCarta);

        localStorage.setItem("cartas", JSON.stringify(cartas));

        // Mostrar mensaje bonito
        const exito = document.getElementById("mensajeExito");
        exito.style.display = "block";

        formCarta.reset();

        // Ocultar mensaje después de 3s
        setTimeout(() => {
            exito.style.display = "none";
        }, 3000);
    });


    // ==============================
    // 🧠 QUIZ
    // ==============================
    const formQuiz = document.getElementById("formQuiz");

    formQuiz.addEventListener("submit", function (e) {
        e.preventDefault();

        let puntaje = 0;

        const respuestas = document.querySelectorAll('input[type="radio"]:checked');

        if (respuestas.length < 5) {
            alert("Responde todas las preguntas");
            return;
        }

        respuestas.forEach(r => {
            puntaje += parseInt(r.value);
        });

        const resultado = document.getElementById("resultadoQuiz");
        const texto = document.getElementById("puntaje");

        let mensaje = "";

        if (puntaje <= 2) {
            mensaje = "Necesitas aprender más 🌱";
        } else if (puntaje <= 4) {
            mensaje = "Buen nivel 👍";
        } else {
            mensaje = "Excelente 🌎";
        }

        texto.textContent = `Puntaje: ${puntaje}/5 - ${mensaje}`;
        resultado.style.display = "block";
    });

});