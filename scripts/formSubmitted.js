const errorMsg = document.getElementById('errorMsg')
const errorMsgLoan = document.getElementById('errorMsgLoan')
const sucxMsg = document.getElementById('sucxMsg')
const loader = document.getElementById('loader')

export const errorDisplay = (msg) => {
    errorMsg.textContent = msg
    if(errorMsgLoan) {
        errorMsgLoan.textContent = msg
    }
    setTimeout(() => {
        errorMsg.textContent = ''
        if(errorMsgLoan) {
                errorMsgLoan.textContent = ''
        }
    }, 5000)
}

export const sucxDisplay = (msg) => {
    sucxMsg.textContent = msg
    setTimeout(() => {
        sucxMsg.textContent = ''
    }, 5000)
}

export const showLoader = () => {
    loader.classList.remove('hidden')
    loader.classList.add('inline-block')
    loader.nextElementSibling.textContent = ''
    loader.parentNode.disabled = true
}

export const hideLoader = () => {
    loader.classList.remove('inline-block')
    loader.classList.add('hidden')
    loader.nextElementSibling.textContent = 'Send'
    loader.parentNode.disabled = false
}