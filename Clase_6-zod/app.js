const { z } = window.Zod;

const registerSchema = z.object({
    name: z.string().min(1, "El nombre es requerido"),
    email: z.string().email("Ingresa un correo electrónico válido"),
    password: z.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .refine(
        (value) => /[0-9]/.test(value),
        'La contraseña debe contener al menos un número'
    )
    .refine(
        (value)=> /[!@#$%^&*(),.?":{}|<>]/.test(value),'La contraseña debe contener al menos un carácter especial')	
    });

document.getElementById("regi_form").addEventListener("submit", (event) => {
    event.preventDefault();  
    const formData = {
        name: document.getElementById("nombre").value,
        email: document.getElementById("correo").value,
        password: document.getElementById("password").value,
    };

    try {
        registerSchema.parse(formData);
        document.getElementById("errors").textContent = "";
        alert("¡Registro exitoso!");
    } catch (error) {
        if (error instanceof window.Zod.ZodError) {
        document.getElementById("errors").textContent = 
            error.errors.map(e => e.message).join(", ");
        }
    }
    });