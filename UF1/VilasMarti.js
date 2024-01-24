  // Inicializamos la funcion contraseñaSegura la cual nos va a servir para filtrar todos los requisitos para que la constraseña sea segura.
function contraseñaSegura(contraseña) {

  // Este if sirve para asegurarse de que la contraseña tenga una longitus entre 8 i 20

  if (contraseña.length < 8 || contraseña.length > 20) {
    return "La contraseña debe tener entre 8 y 20 caracteres.";
  }

  //  Definimos las variables

  let countMinusculas = 0;
  let tieneMayuscula = false; 
  let tieneDigito = false;

  //  En este bucle for nos aseguramos de que la contraseña contenga minúsculas, mayúsculas y un dígito usando el codigo ascii, y el charCodeAt para que asigne un numero del codigo ascii diferente en cada posicion.

  for (const char of contraseña) {
    const code = char.charCodeAt(0);
    if (code >= 97 && code <= 122) countMinusculas++;
    else if (code >= 65 && code <= 90) tieneMayuscula = true;
    else if (code >= 48 && code <= 57) tieneDigito = true;
  }

  //  Este if verifica que la contraseña contenga mínimo 2 minúsculas, una mayúsculña y un dígito.

  if (countMinusculas < 2 || !tieneMayuscula || !tieneDigito) {
    return "La contraseña debe incluir al menos dos minúsculas, una mayúscula y un dígito.";
  }

  //  El siguiente bucle verifica si hay tres caracteres iguales seguidos.

  for (let i = 0; i < contraseña.length - 2; i++) {
    if (contraseña[i] === contraseña[i + 1] && contraseña[i] === contraseña[i + 2]) {
      return "La contraseña no puede contener tres o más caracteres iguales seguidos.";
    }
  }

  //  Este if comprueba que no haya espacios en blanco en medio de la contraseña, si los hay devuelve el mensaje del return

  if (contraseña.includes(" ")) {
    return "La contraseña no puede contener espacios en blanco.";
  }

  // En caso de que la contraseña cumpla todos los requisitos devuelve este mensaje.

  return "Felicidades!! Ahora, tu contraseña es segura.";
}

 // inicializamos la funcion que se lanzará cuando pulsemos el boton de "Verificar Contraseña" y lanzara todo el codigo anterior.

function verificarContraseña() {
  const contraseña = document.getElementById("password").value;
  const resultado = contraseñaSegura(contraseña);
  document.getElementById("resultado").textContent = resultado;
  const contraseñaMostrada = document.getElementById("contraseñaMostrada");
  contraseñaMostrada.textContent = resultado === "Felicidades!! Ahora, tu contraseña es segura." ? "Contraseña obtenida: " + contraseña : "";
}
