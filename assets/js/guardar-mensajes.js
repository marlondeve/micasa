/**
 * guardar-mensajes.js
 * Guarda los formularios de contacto en localStorage en formato JSON
 */

console.log("🟢 guardar-mensajes.js cargado correctamente");

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contact_form");
    if (!form) {
        console.warn("⚠️ No se encontró ningún formulario con el ID #contact_form en esta página.");
        return;
    }

    console.log("✅ Formulario detectado:", window.location.pathname);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = form.querySelector("#name")?.value.trim();
        const email = form.querySelector("#email")?.value.trim();
        const telefono = form.querySelector("#phone")?.value.trim();
        const motivo = form.querySelector("#motivo")?.value.trim();
        const aceptaTerminos = form.querySelector("#choice_terms")?.checked;

        if (!nombre || !email || !telefono || !motivo) {
            alert("⚠️ Por favor completa todos los campos antes de enviar.");
            return;
        }

        if (!aceptaTerminos) {
            alert("⚠️ Debes aceptar los términos y condiciones para continuar.");
            return;
        }

        const nuevoMensaje = {
            id: Date.now(),
            nombre,
            email,
            telefono,
            motivo,
            pagina: window.location.pathname.split("/").pop() || "index.html",
            fecha: new Date().toISOString()
        };

        const mensajes = JSON.parse(localStorage.getItem("mensajes_formulario") || "[]");
        mensajes.push(nuevoMensaje);
        localStorage.setItem("mensajes_formulario", JSON.stringify(mensajes));

        console.log("💾 Mensaje guardado:", nuevoMensaje);
        alert("✅ Tu mensaje ha sido enviado correctamente.");
        form.reset();
    });
});
