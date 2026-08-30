// ===== NAVEGACIÓN: SOLO MUESTRA LA SECCIÓN SELECCIONADA =====
const enlacesMenu = document.querySelectorAll('.enlace-menu');
const todasSecciones = document.querySelectorAll('.seccion');

enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();

        // Quitar estado activo de todos los enlaces
        enlacesMenu.forEach(enl => enl.classList.remove('activo'));
        // Agregar estado activo al enlace seleccionado
        this.classList.add('activo');

        // Ocultar todas las secciones
        todasSecciones.forEach(sec => sec.classList.remove('visible'));
        // Mostrar solo la sección elegida
        const idSeccion = this.getAttribute('href');
        document.querySelector(idSeccion).classList.add('visible');
    });
});

// ===== MENSAJE INTERACTIVO DE MOTIVACIÓN =====
const boton = document.getElementById('boton-mensaje');
const cajaRespuesta = document.getElementById('caja-respuesta');

const mensajesMotivacion = [
    "¡Exacto! Tus conocimientos son el capital más valioso.",
    "El primer paso es decidirte: tú puedes lograrlo.",
    "La tecnología en manos de quienes estudian cambia todo.",
    "Empieza pequeño, crece seguro: tu negocio te espera.",
    "Lo que aprendes hoy, es el éxito de tu empresa mañana.",
    "Nadie te pone límites: tú construyes tu propio camino.",
    "Emprender es crear tu propio futuro con lo que sabes."
];

boton.addEventListener('click', () => {
    const indice = Math.floor(Math.random() * mensajesMotivacion.length);
    cajaRespuesta.style.opacity = 0;
    setTimeout(() => {
        cajaRespuesta.textContent = mensajesMotivacion[indice];
        cajaRespuesta.style.opacity = 1;
    }, 150);
});

// ===== CONFIRMACIÓN DE CARGA =====
document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ Proyecto 'Emprende con Tecnología' cargado correctamente");
});
