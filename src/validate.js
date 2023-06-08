function validate_username(){
    let username_elem = document.getElementById('username');
    let value = username_elem.value.length;
    return value >= 3 && value <= 25;

}
function validate_email(){
    const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])+\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])*$/gi;
    let email_elem = document.getElementById('email');
    let email = email_elem.value;
    return regexExp.test(email);
}
function validate_password_len(){
    let password_elem = document.getElementById('password');
    let value = password_elem.value.length;
    return value >= 8;
}
function validate_password_format(){
    let password_elem = document.getElementById('password');
    let value = password_elem.value;
    return /[A-Z]/.test(value) && /[a-z]/.test(value) &&/[0-9]/.test(value)&&/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value);
}
function change_message(target,check_function,index = 0){
    var message = target.parentNode.querySelectorAll('p')[index];
    if(message == undefined){
        var message = target.parentNode.parentNode.querySelectorAll('p')[index];

    }
    if(check_function()){
        target.style.borderColor = "green";
        message.style.display= 'none';
    } else{
        target.style.borderColor = "red";
        message.style.display = 'block';
    }

}
function confirm_password(){
    let password_elem = document.getElementById('password');
    let check1 = password_elem.value;
    let re_password_elem = document.getElementById('rePassword');
    let check2 = re_password_elem.value;
    return check1===check2;

}
function show_hidden(input,button){
    button.classList.toggle("fa-eye-slash");
    button.classList.toggle('fa-eye');
    const type = input.getAttribute("type") ==="password" ? "text" : "password";
    input.setAttribute("type",type)
}

document.getElementById('username').addEventListener('input',(event)=>{change_message( target = event.target,validate_username)});
document.getElementById('email').addEventListener('input',(event)=>{change_message( target = event.target,validate_email)});
document.getElementById('password').addEventListener('input',(event)=>{change_message( target = event.target,validate_password_len,0);change_message( target = event.target,validate_password_format,1)});
document.getElementById('rePassword').addEventListener('input',(event)=>{change_message( target = event.target,confirm_password)});
document.getElementById('togglePassword').addEventListener('click',(e)=>{show_hidden(document.getElementById('password'),e.target);});
document.getElementById('reTogglePassword').addEventListener('click',(e)=>{show_hidden(document.getElementById('rePassword'),e.target);});
document.getElementById('form').addEventListener('input',()=>{let check = validate_username() && validate_email() && validate_password_len() && validate_password_format() && confirm_password();
                                                                if(check){document.getElementById('signup').disabled = false;}
                                                                else{document.getElementById('signup').disabled = true;}});
document.getElementById('form').addEventListener('submit',(e)=>{e.preventDefault();
                                                                let modal = document.getElementById("modal");
                                                                modal.classList.toggle("popup-hide");});
document.getElementById("popup-close").addEventListener('click',()=>{document.getElementById('modal').classList.toggle("popup-hide")});
