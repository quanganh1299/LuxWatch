function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}

var firstSize = document.getElementById("34-36");
firstSize.addEventListener("click", function(){
firstSize.classList.toggle("active");
secondSize.classList.remove("active");
thirdSize.classList.remove("active");
})

var secondSize = document.getElementById("37-39");
secondSize.addEventListener("click", function(){
secondSize.classList.toggle("active");
firstSize.classList.remove("active");
thirdSize.classList.remove("active");
})

var thirdSize = document.getElementById("40-42");
thirdSize.addEventListener("click", function(){
thirdSize.classList.toggle("active");
firstSize.classList.remove("active");
secondSize.classList.remove("active");
})

const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const modalClose = document.querySelector(".js-modal-close");
var modalIcon = document.getElementById("modal-icon");
var modalInfor = document.getElementById("modal-infor");

document.getElementById("buttonAddProduct").addEventListener("click", function(){
var amount = parseInt(document.getElementById('lblCartCount').innerHTML);
var value = parseInt(document.getElementById('number').value, 10);
if (value==0 || isNaN(value)){
  alert("Bạn chưa nhập số lượng cho sản phẩm!");
}
else if(!firstSize.classList.contains("active")&&!secondSize.classList.contains("active")&&!thirdSize.classList.contains("active")){
    alert("Bạn chưa chọn size cho sản phẩm!");
}
else {
  amount++;
  modal.classList.add("open");
  setTimeout(function(){
    modalIcon.src = "./assets/img/describe-product/V-Vector.svg";
    modalInfor.innerHTML = "Đã thêm sản phẩm vào giỏ hàng";
    modal.classList.remove("open");
    document.getElementById('lblCartCount').innerHTML = amount;
  }, 2000);
}
  
})


// Modal


function changeHeartIcon() {
  var icon  = document.getElementById("favorite-icon");
  if(icon.classList.contains("fa-solid")){
    modal.classList.add("open");
    setTimeout(function() {
        modal.classList.remove("open");
        modalIcon.src = "./assets/img/describe-product/V-Vector.svg";
        modalInfor.innerHTML = "Đã lưu sản phẩm";
        icon.classList.toggle("fa-solid");
        icon.classList.toggle("fa-regular");
    }, 2000);
  }
  else if(icon.classList.contains("fa-regular")){
    modal.classList.add("open");
    setTimeout(function() {
        modal.classList.remove("open");
        modalIcon.src = "./assets/img/describe-product/X-vector.svg";
        modalInfor.innerHTML = "Đã hủy lưu sản phẩm";
        icon.classList.toggle("fa-solid");
        icon.classList.toggle("fa-regular");
    }, 2000);
  }

}
