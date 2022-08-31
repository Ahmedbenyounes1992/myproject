let pwd = document.querySelector('#pwd')
let cin = document.querySelector('#cin')
let form = document.querySelector('#myForm')

  const isRequired = value => value === '' ? false : true;
  const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};
const cinnumbersecure = (cinnumber) => {
  const red = new RegExp(/^[0-9]/);
  return red.test(cinnumber);
}

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  input.classList.remove('is-valid');
  input.classList.add('is-invalid');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  input.classList.remove('is-invalid');
  input.classList.add('is-valid');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
}




const checkPassword = () => {

  let valid = false;

  const password = pwd.value.trim();

  if (!isRequired(password)) {
    showError(pwd, 'Password cannot be blank.');}
     else if (!isPasswordSecure(password)) {
    showError(pwd, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
  } else {
    showSuccess(pwd);  
      valid = true;
  }

  return valid;
};





const checkcin = () =>{
  let valid = false

  const cinnumber = cin.value.trim()

  if (!isRequired(cinnumber)) {
    showError(cin, 'the cin number cannot be blank.');
  }
    else if (cinnumber.length != 8 ){
      showError(cin, 'the cin number should contain 8 digits');
    }

else if ( !cinnumbersecure(cinnumber)){
    showError(cin,'the cin number should contain only number ' );
  }
  else{
    showSuccess(cin);  
      valid = true;
  }

  return valid;
  }





















function signUp(e) {
   
  e.preventDefault(); 

  let isPasswordValid = checkPassword()
  let isCinValid = checkcin()
  if (isPasswordValid && isCinValid){
 

     
      let fname = document.getElementById("fname").value, lname = document.getElementById("lname").value, email = document.getElementById("email").value, pwd = document.getElementById("pwd").value, cin = document.getElementById('cin').value, select = document.getElementById("Select").value;




      let formData = JSON.parse(localStorage.getItem("formData")) || [];
      let exist = formData.length &&
        JSON.parse(localStorage.getItem("formData")).some(
          (data) => data.cin == cin);

  // let cincheck = document.forms["myForm"]["cin"].value
  if (!exist) {
    formData.push({ fname, lname, email, pwd, cin, select });
    localStorage.setItem("formData", JSON.stringify(formData));
    document.querySelector("form").reset();
    document.getElementById("fname").focus();
    alert("Account Created.\n\nPlease Sign In using the link below.");
    location.href = "/signin.html";
  } else {
    alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
  }
  
}   

}


const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
      // cancel the previous timer
      if (timeoutId) {
          clearTimeout(timeoutId);
      }
      // setup a new timer
      timeoutId = setTimeout(() => {
          fn.apply(null, args)
      }, delay);
  };
};


form.addEventListener('input', debounce(function (e) {
  switch (e.target.id) {
      case 'pwd':
          checkPassword();
          break;
      case 'cin':
          checkcin();    
  }
}));
  



