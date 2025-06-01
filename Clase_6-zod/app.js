const { z } = window.Zod;

// Esquema de validación mejorado
const registerSchema = z.object({
    name: z.string()
        .min(1, "El nombre es requerido")
        .min(3, "El nombre debe tener al menos 3 caracteres"),
    email: z.string()
        .email("Ingresa un correo electrónico válido")
        .endsWith(".com", "El correo debe terminar en .com"),
    password: z.string()
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .refine(value => /[0-9]/.test(value), {
            message: 'La contraseña debe contener al menos un número'
        })
        .refine(value => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
            message: 'La contraseña debe contener al menos un carácter especial'
        })
});

document.getElementById("regi_form").addEventListener("submit", (event) => {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById("nombre").value.trim(),
        email: document.getElementById("correo").value.trim(),
        password: document.getElementById("password").value
    };

    const result = registerSchema.safeParse(formData);
    
    if (!result.success) {
        // Mostrar errores de manera más amigable
        const errorMessages = result.error.errors.map(err => err.message);
        document.getElementById("errors").innerHTML = errorMessages
            .map(msg => `• ${msg}`)
            .join("<br>");
    } else {
        document.getElementById("errors").textContent = "";
        alert("¡Registro exitoso! Bienvenido a Óptica Xoloc");
        // Aquí podrías agregar el envío real del formulario
        // document.getElementById("regi_form").submit();
    }
});