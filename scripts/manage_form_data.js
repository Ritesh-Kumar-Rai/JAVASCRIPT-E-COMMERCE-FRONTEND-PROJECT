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
                    <div id="RegisterUsernameHelp" class="form-text"></div>
                </div>
                <div class="formcontrol mb-3">
                    <label for="InputEmailforRegister" class="form-label" onclick="HapticOn()">Email address</label>
                    <input type="email" class="form-control" id="InputEmailforRegister" aria-describedby="RegisterEmailHelp" onchange="HapticOn()">
                    <div id="RegisterEmailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                
                <div class="formcontrol mb-3">
                    <label for="InputPasswordforRegister" class="form-label" onclick="HapticOn()">Password</label>
                    <input type="password" class="form-control" id="InputPasswordforRegister" aria-describedby="RegisterPasswordHelp" onchange="HapticOn()">
                    <div id="RegisterPasswordHelp" class="form-text text-danger"></div>
                </div>
                <div class="formcontrol mb-3">
                    <label for="InputConfirmPasswordforRegister" class="form-label" onclick="HapticOn()">Confirm Password</label>
                    <input type="password" class="form-control" id="InputConfirmPasswordforRegister" aria-describedby="RegisterCPasswordHelp" onchange="HapticOn()">
                    <div id="RegisterCPasswordHelp" class="form-text text-danger"></div>
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


// function which is used to perform validation on Register Form Data 
function validateRegisterFormData(username,email,password,cpassword){
    // all the parameters like username,email,... we are receiving are the html documents(tags) not data
    // now we will extract actual data from this raw elements like below :
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let cpasswordValue = cpassword.value.trim();
    
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

        validateRegisterFormData(username,email,password,cpassword); // call the function which perform validation on register form data
    });


} // why this function, because of error like fetching form element before setting it





