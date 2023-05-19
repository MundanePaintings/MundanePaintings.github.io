
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
      title: "WELCOME!",
      text: "The password is valid, click OK to view your data.",
      icon: "success",
      confirmButtonText: "OK"
    })
    .then((willDelete) => {
      if (willDelete) {
        var objJS = {
          name: nombre , 
          lastname : apellido , 
          email : email ,
          password : contraseña
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
        text: "The password is not valid!",
        icon: "error",
      }); 
    return false;        
   }   
 }

  function checkForm(form){
     if(form.name.value == ""){
        swal({
          title: "ERROR!",
          text: "The name field is empty!",
          icon: "error",
        }); 
    }else if(form.lastname.value == ""){
        swal({
          title: "ERROR!",
          text: "The last name field is empty!",
          icon: "error",
        }); 
    }else if(form.email.value == ""){
        swal({
          title: "ERROR!",
          text: "The email field is empty!",
          icon: "error",
        }); 
    }else if(!form.accept.checked){
        swal({
          title: "ERROR!",
          text: "You must accept the terms of use!",
          icon: "error",
        }); 
    }else if(form.pwd1.value == ""){
        swal({
          title: "ERROR!",
          text: "Passwords are empty!",
          icon: "error",
        }); 

    }else if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
      if(!checkPassword(form.pwd1.value)) {
        swal({
          title: "ERROR!",
          text: "Password is not valid!",
          icon: "error",
        }); 
        form.pwd1.focus();
        return false;
      }
    }else {
       swal({
          title: "ERROR!",
          text: "Passwords do not match!",
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