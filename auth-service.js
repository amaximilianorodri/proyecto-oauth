// auth-service.js

function loginUser(email, password) {
  if (!email || !password) {
    console.error("Error: faltan credenciales");
    return;
  }
  console.log("Login exitoso");
}


iniciarSesionConOAuth2("token_de_prueba");
