let usuarioValido='admin' ;
let contrasenaValida='adm123';

let user = prompt('ingrese usuario');
let pass = prompt('ingrese contraseña');

if (user==usuarioValido && pass==contrasenaValida){
    console.log('bienvenido usuario:'+user)
}
else{
    console.log('Error en sus credenciales')
}