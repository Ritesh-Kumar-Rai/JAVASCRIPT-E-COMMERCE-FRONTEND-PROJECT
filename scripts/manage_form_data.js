// function to set Register form inside an sign-in modal body
DisplayRegisterForm = () => {
        let sign_in_modal_header =  document.getElementById("user-sign-in-modal-label");
        let sign_in_modal_body = document.getElementById("sign-in-modal-body");
        sign_in_modal_header.innerText = "REGISTER NOW";
        sign_in_modal_body.innerHTML = `
            <form id="register-form">

                <div class="formcontrol mb-3">
                    <label for="InputUsernameforRegister" class="form-label" onclick="HapticOn()">Username</label>
                    <input type="text" class="form-control" id="InputUsernameforRegister" aria-describedby="RegisterUsernameHelp" onchange="HapticOn()">
                    <span id="RegisterUsernameHelp" class="form-text"></span>
                </div>
                <div class="formcontrol mb-3">
                    <label for="InputEmailforRegister" class="form-label" onclick="HapticOn()">Email address</label>
                    <input type="email" class="form-control" id="InputEmailforRegister" aria-describedby="RegisterEmailHelp" onchange="HapticOn()">
                    <span id="RegisterEmailHelp" class="form-text">We'll never share your email with anyone else.</span>
                </div>
                
                <div class="formcontrol mb-3">
                    <label for="InputPasswordforRegister" class="form-label" onclick="HapticOn()">Password</label>
                    <input type="password" class="form-control" id="InputPasswordforRegister" aria-describedby="RegisterPasswordHelp" onchange="HapticOn()">
                    <span id="RegisterPasswordHelp" class="form-text text-danger"></span>
                </div>
                <div class="formcontrol mb-3">
                    <label for="InputConfirmPasswordforRegister" class="form-label" onclick="HapticOn()">Confirm Password</label>
                    <input type="password" class="form-control" id="InputConfirmPasswordforRegister" aria-describedby="RegisterCPasswordHelp" onchange="HapticOn()">
                    <span id="RegisterCPasswordHelp" class="form-text text-danger"></span>
                </div>
                
                <button type="submit" class="btn btn-dark" onclick="HapticOn()">CREATE ACCOUNT</button>
               
            </form>
            <div class="mb-3 form-check mt-3" style="border-radius: 3px;">
                    <span class="btn btn-link text-danger" style="cursor: pointer; font-size: 14px;" onclick="HapticOn(); DisplayLoginForm();">GO TO LOGIN PAGE</span>
            </div>
        `;
        scanForRegisterFormAvailability(); // this function only called when the register form get attached inside signin modal body
}


// function to set login form when user clicks on go to login page inside login modal
DisplayLoginForm = () => {
    let sign_in_modal_header =  document.getElementById("user-sign-in-modal-label");
    let sign_in_modal_body = document.getElementById("sign-in-modal-body");
    sign_in_modal_header.innerText = "SIGN IN";

    sign_in_modal_body.innerHTML = `
            
    <form id="login-form">
        <div class="formcontrol mb-3">
            <label for="InputEmail1" class="form-label" onclick="HapticOn()">Email address</label>
            <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" onchange="HapticOn()">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="formcontrol mb-3">
            <label for="InputPassword1" class="form-label" onclick="HapticOn()">Password</label>
            <input type="password" class="form-control" id="InputPassword1" onchange="HapticOn()">
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" onclick="HapticOn()">
            <label class="form-check-label" for="exampleCheck1" onclick="HapticOn()">Remember Me</label>
        </div>
        <button type="submit" class="btn btn-dark" onclick="HapticOn()">LOG IN</button>
    </form>

    <div class="mb-3 form-check mt-3" style="border-radius: 3px;">
        <span class="btn btn-link text-danger" style="cursor: pointer; font-size: 14px;" onclick="HapticOn(); DisplayRegisterForm();">Haven't created an account, Click here to CREATE ACCOUNT</span>
    </div>
    `;
}

// function which is used to validate email
function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
  }

// function which is used to validate password
  function validatePassword(password) {
    // Password should be at least 8 characters long
    if (password.length < 8) {
        return "Password must be at least 8 characters long.";
    }

    // Password should contain at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return "Password must contain at least one lowercase letter.";
    }

    // Password should contain at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }

    // Password should contain at least one digit
    if (!/\d/.test(password)) {
        return "Password must contain at least one digit.";
    }

    // Password should contain at least one special character
    if (!/[$@$!%*?&#^]/.test(password)) {
        return "Password must contain at least one special character.";
    }

    // If all criteria are met, the password is valid
    return "Password is valid.";
}
  

// function which is used to perform validation on Register Form Data 
function validateRegisterFormData(username,email,password,cpassword,Register_form){
    // all the parameters like username,email,... we are receiving are the html documents(tags) not data
    // now we will extract actual data from this raw elements like below :
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let cpasswordValue = cpassword.value.trim();
    
    if(usernameValue === ""){
        displayError(username, "Username must not be empty!");
    }else if(usernameValue.length < 3){
        displayError(username, "Username must contains min. 3 character!");
    }else{
        displaySuccess(username);
    }

    if(emailValue === ""){
        displayError(email, "Email ID must not be empty!");
    }else if(!validateEmail(emailValue)){
        displayError(email, "Oops! Your email id is incorrect");
    }else{
        displaySuccess(email);
    }

    const pRes = validatePassword(passwordValue); 

    if(pRes !== "Password is valid."){
        displayError(password, pRes);
    }else{
        displaySuccess(password);
    }
    
    if(cpasswordValue === ""){
        displayError(cpassword, "password must not be empty!");
    }else if(cpasswordValue !== passwordValue){
        displayError(cpassword, "password does not match");
    }else{
        displaySuccess(cpassword);
    }

    finalizeRegisterSuccess(Register_form);
    
}


function displayError(inputElement, msg){
        let parentElem = inputElement.parentElement;
        inputElement.className = "form-control is-invalid";
        let span = parentElem.querySelector('span');
        span.className = "form-text text-danger";
        span.innerText = msg;
}

function displaySuccess(inputElement){
        let parentElem = inputElement.parentElement;
        inputElement.className = "form-control is-valid";
        let span = parentElem.querySelector('span');
        span.innerText = "";
}

function showAlert(count, totalElemOfRegisterForm, msg){
        console.log("count : "+count+" and total :"+totalElemOfRegisterForm)
    if(count.length === totalElemOfRegisterForm){
        swal("Good job!", msg, "success");

    }
}

// function to check is the total elements of register form are valid or not
function finalizeRegisterSuccess(Register_form){
    
    let totalElemOfRegisterForm = Register_form.length - 1;
    let count = [];
    for(let i = 0; i < Register_form.length -1; i++){

            if(Register_form[i].className === "form-control is-valid"){
                count.push(i);
                showAlert(count,totalElemOfRegisterForm, 'Registration Completed!');
            }else{
                return false;
            }
            console.log(i);
    }
}


// function to scan and get html document of Register form after setting of register form 
function scanForRegisterFormAvailability(){

    const Register_form = document.getElementById('register-form');
    
    // adding event listener to Register_form
    Register_form.addEventListener('submit', (event)=>{
        event.preventDefault();

        let username = document.getElementById('InputUsernameforRegister');
        let email = document.getElementById('InputEmailforRegister');
        let password = document.getElementById('InputPasswordforRegister');
        let cpassword = document.getElementById('InputConfirmPasswordforRegister');

        validateRegisterFormData(username,email,password,cpassword,Register_form); // call the function which perform validation on register form data, and finally register-form tag for last operation
    });


} // why this function, because of error like fetching form element before setting it





