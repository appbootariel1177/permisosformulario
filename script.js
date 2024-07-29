document.addEventListener("DOMContentLoaded", function() {
    const fechaSolicitud = document.getElementById("fechaSolicitud");
    const today = new Date().toISOString().split('T')[0];
    fechaSolicitud.value = today;

    const form = document.getElementById("solicitudForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        // Aquí puedes añadir la lógica para enviar los datos al backend
        alert("Formulario enviado!");
    });
});
