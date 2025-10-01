// auth-service.js

function iniciarSesionConOAuth2(token) {
  if (!token) {
    throw new Error("Token inválido o ausente");
  }
  console.log("Autenticación exitosa con OAuth2 🎉");
  return true;
}

iniciarSesionConOAuth2("token_de_prueba");
"// auth-service.js" 
