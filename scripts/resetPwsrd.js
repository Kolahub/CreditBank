import { app } from "./firebase";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { errorDisplay, sucxDisplay, showLoader, hideLoader } from "./formSubmitted";

const auth = getAuth()

const resetPwsrdForm = document.getElementById('resetPwsrdForm')

resetPwsrdForm.addEventListener('submit', async function (e) {
    e.preventDefault()
    const email = resetPwsrdForm.email.value

    try {
        showLoader()
        await sendPasswordResetEmail(auth, email)
        sucxDisplay('Email sent successfully!')
        resetPwsrdForm.reset()
        hideLoader()
    } catch(err) {
        errorDisplay(err.message)
        hideLoader()
    }
})