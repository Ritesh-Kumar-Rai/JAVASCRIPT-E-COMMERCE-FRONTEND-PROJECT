(()=>{
    check_for_session();
})();

var session_name = null;
function check_for_session(){
   session_name = sessionStorage.getItem('e-comm_name');
   
   if(session_name){
       let fa_user_icon = document.getElementById('user-icon-setting');
       fa_user_icon.removeAttribute('data-bs-toggle');
       fa_user_icon.removeAttribute('data-bs-target');
    //    fa_user_icon.setAttribute("onmouseleave","OffBLUR()");
    //    fa_user_icon.setAttribute("onmouseover","OnBLUR()");
       fa_user_icon.setAttribute("onclick","OnBLUR();HapticOn()");
        document.getElementById('icon-user').style.visibility = 'visible';
        document.getElementById('tooltipUsernaam').innerText = session_name;
    }
}

function OnBLUR(){
    document.getElementById('pakToolTip').style.visibility = 'visible';
}

function OffBLUR(){
    document.getElementById('pakToolTip').style.visibility = 'hidden';
}


function SignOut(){
    
    sessionStorage.removeItem('e-comm_name');
        let fa_user_icon = document.getElementById('user-icon-setting');
       fa_user_icon.setAttribute('data-bs-toggle','modal');
       fa_user_icon.setAttribute('data-bs-target','#user-sign-in-modal');
       fa_user_icon.removeAttribute("onmouseleave","OffBLUR()");
       fa_user_icon.removeAttribute("onmouseover","OnBLUR()");
       fa_user_icon.setAttribute("onclick","HapticOn()");
        document.getElementById('icon-user').style.visibility = 'hidden';
        document.getElementById('tooltipUsernaam').innerText = '';
        OffBLUR();
}

