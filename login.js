let inicio_click = document.getElementById("btn_ingresar");
var valoresAceptadosUsuario = /^[0-9]+$/;
var valoresAceptadosContraseña = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

let usuario = document.getElementById("txb_usuario");
let contraseña  =  document.getElementById("txb_contraseña");

inicio_click.onclick=function(){   
    validarIngreso(usuario.value,contraseña.value)
};

function validarIngreso(usuario, contraseña)
{
    debugger;
    if (usuario.match(valoresAceptadosUsuario) && contraseña.match(valoresAceptadosContraseña))
         location.href = "./index.html";
    else
        document.getElementById("p_error").innerHTML = "usuario o contraseña incorrecto"; 
}; 
