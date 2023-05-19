
function checkPassword(valor){
    var myregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])(?!\s)[a-zA-Z\d#$@!%&*?]{8,16}$/; 
   if(myregex.test(valor)){

    // Obtenemos los valores ingresados en el formulario
    var nombre = document.getElementsByName('name')[0].value;
    var apellido = document.getElementsByName('lastname')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var contraseña = document.getElementsByName('pwd1')[0].value;
    var accept = document.getElementsByName('accept')[0].checked;

    // Construimos un mensaje personalizado
    var mensaje = "Nombre: " + nombre + "\n";
    mensaje += "Apellido: " + apellido + "\n";
    mensaje += "Contraseña: " + contraseña + "\n";
    mensaje += "Email: " + email;    

    swal({
      title: "BIENVENIDO!",
      text: "Las contraseña es valida , pulse OK para ver sus datos",
      icon: "success",
      confirmButtonText: "OK"
    })
    .then((willDelete) => {
      if (willDelete) {
        var objJS = {
          nombre: nombre , 
          apellido : apellido , 
          email : email ,
          contraseña : contraseña
        }
        var objJSON = JSON.stringify(objJS);   
        swal("Estos son los datos de registro : ", {
          text: objJSON
        });
      }
    });    
    return true;        
   
  }else{
      swal({
        title: "ERROR!",
        text: "Las contraseña no es valida!",
        icon: "error",
      }); 
    return false;        
   }   
 }

  function checkForm(form){
     if(form.name.value == ""){
        swal({
          title: "ERROR!",
          text: "El campo nombre esta vacio!",
          icon: "error",
        }); 
    }else if(form.lastname.value == ""){
        swal({
          title: "ERROR!",
          text: "El campo apellido está vacio!",
          icon: "error",
        }); 
    }else if(form.email.value == ""){
        swal({
          title: "ERROR!",
          text: "El campo email está vacio!",
          icon: "error",
        }); 
    }else if(!form.accept.checked){
        swal({
          title: "ERROR!",
          text: "Debes aceptar las condiciones de uso!",
          icon: "error",
        }); 
    }else if(form.pwd1.value == ""){
        swal({
          title: "ERROR!",
          text: "Las contraseñas estan vacias!",
          icon: "error",
        }); 

    }else if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
      if(!checkPassword(form.pwd1.value)) {
        swal({
          title: "ERROR!",
          text: "La contraseña no es valida!",
          icon: "error",
        }); 
        form.pwd1.focus();
        return false;
      }
    }else {
       swal({
          title: "ERROR!",
          text: "Las contraseñas no coinciden!",
          icon: "error",
        }); 
      form.pwd1.focus();
      return false;
    }
    return true;
  }


const pwdInput = document.querySelector('input[name="pwd1"]');
const requirements = document.querySelectorAll('.requirements li');

const validatePassword = () => {
  const password = pwdInput.value;

  if (password.match(/[a-z]/)) {
    requirements[0].classList.add('completed');
  } else {
    requirements[0].classList.remove('completed');
  }

  if (password.match(/[A-Z]/)) {
    requirements[1].classList.add('completed');
  } else {
    requirements[1].classList.remove('completed');
  }

  if (password.match(/\d/)) {
    requirements[2].classList.add('completed');
  } else {
    requirements[2].classList.remove('completed');
  }

  if (password.match(/[#$@!%&*?]/)) {
    requirements[3].classList.add('completed');
  } else {
    requirements[3].classList.remove('completed');
  }

  if (password.length >= 8 && password.length <= 16){
  requirements[4].classList.add('completed');
  } else {
  requirements[4].classList.remove('completed');
  }
  }

pwdInput.addEventListener('input', validatePassword);