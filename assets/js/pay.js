function increaseFirstValue() {
    var value = parseInt(document.getElementById('first-number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('first-number').value = value;
  }
  
  function decreaseFirstValue() {
    var value = parseInt(document.getElementById('first-number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('first-number').value = value;
  }

  function increaseSecondValue() {
    var value = parseInt(document.getElementById('second-number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('second-number').value = value;
  }
  
  function decreaseSecondValue() {
    var value = parseInt(document.getElementById('second-number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('second-number').value = value;
  }


  var orderPay = document.getElementById("order-pay");
  var bankPay = document.getElementById("bank-pay");
  var momoPay = document.getElementById("momo-pay");
  var zaloPay = document.getElementById("zalo-pay");
  const modal = document.querySelector(".js-modal");
  const modalContainer = document.querySelector(".js-modal-container");
  const modalClose = document.querySelector(".js-modal-close");
  var modalIcon = document.getElementById("modal-icon");
  var modalInfor = document.getElementById("modal-infor");
  var modalExtraInfor = document.getElementById("modal-extra-infor");
  var modalExtraAlert = document.getElementById("modal-extra-alert");
  var modalButton = document.getElementById("buy-button");

  orderPay.addEventListener("click", function(){
    orderPay.checked=true;
    bankPay.checked=false;
    momoPay.checked=false;
    zaloPay.checked=false;
  })

  bankPay.addEventListener("click", function(){
    orderPay.checked=false;
    bankPay.checked=true;
    momoPay.checked=false;
    zaloPay.checked=false;
  })

  zaloPay.addEventListener("click", function(){
    orderPay.checked=false;
    bankPay.checked=false;
    momoPay.checked=false;
    zaloPay.checked=true;
  })

  momoPay.addEventListener("click", function(){
    orderPay.checked=false;
    bankPay.checked=false;
    momoPay.checked=true;
    zaloPay.checked=false;
  })

  function hide(){
    modal.classList.remove("open");
  }

  modalClose.addEventListener("click", hide);

  function show() {
    if(orderPay.checked){
      modal.classList.add("open");
      modalClose.style.display="none";
      modalIcon.src="./assets/img/pay/V-vector.svg";
      modalInfor.innerHTML="Đặt hàng thành công!";
      modalExtraInfor.style.display = "block";
      modalExtraInfor.innerHTML = "Cảm ơn bạn đã mua hàng tại Lux Watch";
      modalExtraAlert.style.display="none";
    }
    else if(bankPay.checked){
          modal.classList.add("open");
          modalClose.style.display="none";
          modalIcon.src="./assets/img/pay/qr.svg";
          modalInfor.innerHTML=
          "Chủ tài khoản: Anh Phượng" + "<br>" + "<br>" +
          "Số tài khoản: 104867407231" + "<br>" + "<br>" +
          "Ngân hàng: Viettinbank" + "<br>" + "<br>" +
          "Chi nhánh Đống Đa" + "<br>" + "<br>" +
          "Nội dung chuyển khoản: Họ tên + Số điện thoại + Mã đơn hàng";
          modalInfor.style.fontSize="15px";
          modalInfor.style.fontWeight="400";
          modalInfor.style.textAlign="left";
          modalExtraInfor.style.display="none";
          modalButton.style.display="none";
          modalExtraAlert.style.display="none";
          setTimeout(function(){
            modalIcon.src="./assets/img/pay/V-vector.svg";
            modalInfor.innerHTML = "Thanh toán thành công!";
            modalInfor.style.fontSize="20px";
            modalInfor.style.textAlign="center";
            modalExtraInfor.innerHTML="Cảm ơn bạn đã mua hàng tại Lux Watch"
            modalExtraInfor.style.display="block";
            modalExtraAlert.style.display="block";
            modalButton.style.display="block";
          },3000);
        }
    else if(momoPay.checked||zaloPay.checked){
      modal.classList.add("open");
      modalClose.style.display="none";
      modalIcon.src="./assets/img/pay/15minute.svg"
      modalInfor.innerHTML = 
      "Số ví điện tử: 0901735273" + "<br>" +
      "Tên: Anh Phượng";
      modalInfor.style.textAlign="center";
      modalInfor.style.fontWeight="400";
      modalInfor.style.fontSize="16px";
      modalInfor.style.lineHeight="25px"
      modalExtraInfor.style.display="none";
      modalButton.style.display="none";
      modalExtraAlert.style.display="none"; 
      setTimeout(function(){
        modalIcon.src="./assets/img/pay/14-59.svg";
      },1000);
      setTimeout(function(){
        modalIcon.src="./assets/img/pay/14-58.svg";
      },2000);
      setTimeout(function(){
        modalIcon.src="./assets/img/pay/14-57.svg";
      },3000);
      setTimeout(function(){
        modalIcon.src="./assets/img/pay/V-Vector.svg";
        modalInfor.innerHTML="Thanh toán thành công!";
        modalInfor.style.fontSize="25px";
        modalExtraInfor.style.display="block";
        modalExtraInfor.innerHTML=
        "Cảm ơn bạn đã mua hàng tại Lux Watch" + "<br>" +
        "Thông tin xác nhận đơn hàng sẽ được gửi qua email/số điện thoại của bạn";
        modalExtraInfor.style.fontSize="13px";
        modalExtraInfor.style.lineHeight="25px";
        modalButton.style.display="block";
      },4000);
    }
    else {
      modal.classList.add("open");
      modalIcon.src="./assets/img/pay/warning-icon.svg";
      modalInfor.innerHTML="Bạn chưa chọn phương thức thanh toán!";
      modalInfor.style.fontSize="20px";
      modalInfor.style.fontWeight="400";
      modalClose.style.display="block";
      modalExtraInfor.style.display="none";
      modalButton.style.display="none";
      modalExtraAlert.style.display="none"; 
    }
}