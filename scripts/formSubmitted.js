const errorMsg = document.getElementById("errorMsg");
const errorMsgLoan = document.getElementById("errorMsgLoan");
const errorMsgAcc = document.getElementById("errorMsgAcc");
const scxMsgAcc = document.getElementById('scxMsgAcc')
const sucxMsg = document.getElementById("sucxMsg");

export const errorDisplay = (msg) => {
  if (errorMsg) {
    errorMsg.textContent = msg;
  }

  if (errorMsgLoan) {
    errorMsgLoan.textContent = msg;
  }

  if (errorMsgAcc) {
    errorMsgAcc.textContent = msg;
  }

  setTimeout(() => {
    if (errorMsg) {
      errorMsg.textContent = "";
    }
    if (errorMsgLoan) {
      errorMsgLoan.textContent = "";
    }

    if (errorMsgAcc) {
      errorMsgAcc.textContent = "";
    }
  }, 5000);
};

export const sucxDisplay = (msg) => {

  if (scxMsgAcc) {
    scxMsgAcc.textContent = msg
  }
  setTimeout(() => {
    if (sucxMsg) {
        sucxMsg.textContent = '';
      
          }
    if (scxMsgAcc) {
        scxMsgAcc.textContent = ''
      }
  }, 5000);
};

export const showLoader = (loader) => {
  loader.classList.remove("hidden");
  loader.classList.add("inline-block");
  loader.nextElementSibling.textContent = "";
  loader.parentNode.disabled = true;
};

export const hideLoader = (loader, text) => {
  loader.classList.remove("inline-block");
  loader.classList.add("hidden");
  loader.nextElementSibling.textContent = text;
  loader.parentNode.disabled = false;
};
