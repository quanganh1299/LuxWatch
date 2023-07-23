
    var iconFirst = document.getElementById("password-first");
    var iconSecond = document.getElementById("password-second");
    var iconThird = document.getElementById("password-third");
    var passWordFirst = document.getElementById("fpassword-first");
    var passWordSecond = document.getElementById("fpassword-second");
    var passWordThird = document.getElementById("fpassword-third");

    iconFirst.addEventListener("click", function(){
        iconFirst.classList.toggle("fa-eye");
        iconFirst.classList.toggle("fa-eye-low-vision");
        if(passWordFirst.type === "password"){
            passWordFirst.type = "text";
        } else {
            passWordFirst.type = "password";
        }     
    })

    iconSecond.addEventListener("click", function(){
        iconSecond.classList.toggle("fa-eye");
        iconSecond.classList.toggle("fa-eye-low-vision");
        if(passWordSecond.type === "password"){
            passWordSecond.type = "text";
        } else {
            passWordSecond.type = "password";
        }    
    })

    iconThird.addEventListener("click", function(){
        iconThird.classList.toggle("fa-eye");
        iconThird.classList.toggle("fa-eye-low-vision");
        if(passWordThird.type === "password"){
            passWordThird.type = "text";
        } else {
            passWordThird.type = "password";
        }    
    })


// Modal
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");

function show() {
    const modal = document.querySelector(".js-modal");
    const modalContainer = document.querySelector(".js-modal-container");
    modal.classList.add("open");
    setTimeout(function() {
        window.location="./sign-in.html";
    }, 3000);
}

function showForgotPass(){
    modal.classList.add("open");
    modal.classList.remove("hide");
    extraModal.style.display = "block";
    label.placeholder = "Mời bạn nhập email/ số điện thoại";
    headerModalInputEmail.innerHTML = "Email/ số điện thoại";
    secondModalBtn.style.display="inline-block";
    thirdModalBtn.style.display="none";
}

function hide(){
    modal.classList.add("hide");
    modal.classList.remove("open");
}

function reloadSignIn(){
    setTimeout(function() {
        window.location="./sign-in.html"
    }, 2000);
}




const extraModal = document.querySelector(".modal-extra-infor");
const label = document.getElementById("fname-modal");
const headerModalInputEmail = document.getElementById("fcontact-modal");
const secondModalBtn = document.getElementById("second-modal");
const thirdModalBtn = document.getElementById("third-modal");
const cancelBtn = document.getElementById("cancel-btn");
const signInModalBtn = document.getElementById("signin-modal-btn");
const inputPassWordFirst = document.getElementById("password-modal-first");
const inputPassWordSecond = document.getElementById("password-modal-second");
const inputText = document.getElementById("input-text-modal");


secondModalBtn.addEventListener("click", function(){
    extraModal.style.display = "none";
    label.placeholder = "Mời bạn nhập mã xác nhận";
    headerModalInputEmail.innerHTML = "Nhập mã xác thực";
    secondModalBtn.style.display="none";
    thirdModalBtn.style.display="inline-block";
});

thirdModalBtn.addEventListener("click", function(){
    inputPassWordFirst.style.display = "block";
    inputPassWordSecond.style.display = "block";
    inputText.style.display="none";
    secondModalBtn.style.display="none";
    thirdModalBtn.style.display="none";
    cancelBtn.style.display="none";
    signInModalBtn.style.display="block";
})






