function signIn(e) {
    let cin = document.getElementById('cin'), pwd = document.getElementById('pwd');
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.cin.toLowerCase() == cin.value.toLowerCase() && data.pwd.toLowerCase() == pwd.value.toLowerCase());
    if(!exist){
        alert("Incorrect login credentials");
        cin.focus();
    }
    else{
        let current_user = formData.filter(data => data.cin.toLowerCase() == cin.value.toLowerCase() && data.pwd.toLowerCase() == pwd.value.toLowerCase())[0]
        // localStorage.setItem('profile', {fname, lname, email, cin, pwd})
        console.log(current_user)
       
       localStorage.setItem('current_user',JSON.stringify(current_user))
       window.location.href = "index.html";
    }
    e.preventDefault();
}
