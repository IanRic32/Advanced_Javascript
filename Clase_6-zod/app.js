const { z } = window.Zod;

// Esquema de validación mejorado
const registerSchema = z.object({
    name: z.string()
        .min(1, "El nombre es requerido")
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .max(50, "El nombre no puede exceder 50 caracteres")
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre solo puede contener letras y espacios"),
    email: z.string()
        .email("Ingresa un correo electrónico válido")
        .min(5, "El correo debe tener al menos 5 caracteres")
        .max(100, "El correo no puede exceder 100 caracteres")
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Formato de correo inválido"),
    password: z.string()
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .max(30, "La contraseña no puede exceder 30 caracteres")
        .refine(value => /[0-9]/.test(value), {
            message: 'La contraseña debe contener al menos un número'
        })
        .refine(value => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
            message: 'La contraseña debe contener al menos un carácter especial'
        })
        .refine(value => /[A-Z]/.test(value), {
            message: 'La contraseña debe contener al menos una mayúscula'
        })
});

document.getElementById("regi_form").addEventListener("submit", async (event) => {
    event.preventDefault();
    
    // Limpiar errores anteriores
    document.getElementById("errors").textContent = "";
    
    const formData = {
        name: document.getElementById("nombre").value.trim(),
        email: document.getElementById("correo").value.trim().toLowerCase(),
        password: document.getElementById("password").value
    };

    // Mostrar loader
    const button = event.target.querySelector("button");
    const originalText = button.textContent;
    button.innerHTML = '<span class="loader"></span> Procesando...';
    button.disabled = true;

    // Simular delay para demostración
    await new Promise(resolve => setTimeout(resolve, 1000));

    const result = registerSchema.safeParse(formData);
    
    if (!result.success) {
        // Mostrar errores de manera organizada
        const errorMessages = result.error.errors.map(err => `• ${err.message}`);
        document.getElementById("errors").innerHTML = errorMessages.join("<br>");
    } else {
        // Simular éxito de registro
        document.getElementById("errors").textContent = "";
        alert("¡Registro exitoso! Bienvenido a Óptica Xoloc");
        // Aquí iría el envío real del formulario
        // document.getElementById("regi_form").submit();
    }

    // Restaurar botón
    button.textContent = originalText;
    button.disabled = false;
});

// Validación en tiempo real
document.querySelectorAll("#regi_form input").forEach(input => {
    input.addEventListener("input", function() {
        document.getElementById("errors").textContent = "";
    });
});