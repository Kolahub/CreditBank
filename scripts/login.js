import { app } from "./firebase";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { errorDisplay, showLoader, hideLoader } from "./formSubmitted";

const auth = getAuth()

onAuthStateChanged(auth, (user) => {
    // console.log(user); 
    if(user) {
        // window.open('/dashboard.html')
    }
})

const loginForm = document.getElementById('loginForm')
loginForm.addEventListener('submit', async function (e) {
    e.preventDefault()
    const fd = new FormData(loginForm)
    const data = Object.fromEntries(fd.entries()) 

    for (const [key, value] of Object.entries(data)) {
        if (!value) {
            errorDisplay(`The field "${key}" is empty. Please fill it out.`);
            return; // Prevent form submission if any field is empty
        }
    }

    const loader = e.target.closest('#loginForm').querySelector('#loginLoader')
    const btn = e.target.closest('#loginForm').querySelector('#loginBtn')

    try {
        showLoader(loader)
    btn.classList.add('cursor-not-allowed')

        await signInWithEmailAndPassword(auth, data.email, data.password)
        loginForm.reset()
        hideLoader(loader, 'Login')
    btn.classList.remove('cursor-not-allowed')

        window.open('/dashboard.html')
    } catch (err) {
        errorDisplay(err.message)
        hideLoader(loader, 'Login')
    btn.classList.remove('cursor-not-allowed')

    }
})