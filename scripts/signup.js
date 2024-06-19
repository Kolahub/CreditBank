const { v4: uuidv4 } = require("uuid");
import { app } from "./firebase";
import { collection, doc, getDocs, getFirestore, setDoc, query, where } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { errorDisplay, showLoader, hideLoader } from "./formSubmitted";

// Initialize service
const db = getFirestore();
const auth = getAuth();

async function generateUniqueAccountNumber() {
  let accountNumber;
  let accountExists = true;

  // Keep generating account numbers until a unique one is found
  while (accountExists) {
    // Generate a UUID and take only the numeric parts
    const uuid = uuidv4().replace(/\D/g, "");
    // Optionally, trim it to a specific length
    accountNumber = uuid.substring(0, 10); // Example: 10-digit account number

    // Check if the account number already exists in the database
    const accountQuery = query(collection(db, "usersData"), where("accNo", "==", accountNumber));
    const snapshot = await getDocs(accountQuery);

    if (snapshot.empty) {
      // If the snapshot is empty, the account number is unique
      accountExists = false;
    }
  }

  return accountNumber;
}

const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const fd = new FormData(signupForm);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
        // Check if any of the input fields are empty
        for (const [key, value] of Object.entries(data)) {
            if (!value) {
                errorDisplay(`The field "${key}" is empty. Please fill it out.`);
                return; // Prevent form submission if any field is empty
            }
        }

    try {
        showLoader()
        // Generate a unique account number
        const accountNumber = await generateUniqueAccountNumber();
        
        // Create user account
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
        const user = userCredential.user;

        // Save user data with the generated account number
        const userRef = doc(db, 'usersData', user.uid);
        await setDoc(userRef, {
            fullName: data.fullName,
            userName: data.userName,
            pin: data.pin,
            phoneNo: data.phoneNo,
            userImgUrl: '',
            accNo: accountNumber,
            totalAmount: 30000,
            transactionHist: [
                { amount: 1200.00, date: '2024-05-01 10:15:30', description: 'Groceries' },
                { amount: -1500.75, date: '2024-05-03 12:20:45', description: 'Utilities' },
                { amount: 2000.00, date: '2024-05-05 14:30:50', description: 'Entertainment' },
                { amount: -1300.00, date: '2024-05-07 16:45:00', description: 'Others' },
                { amount: 1750.00, date: '2024-05-09 18:55:15', description: 'Groceries' },
                { amount: -1100.00, date: '2024-05-11 20:10:25', description: 'Utilities' },
                { amount: 2500.00, date: '2024-05-13 22:25:35', description: 'Entertainment' },
                { amount: -1400.00, date: '2024-05-15 23:35:45', description: 'Others' },
                { amount: 1600.00, date: '2024-06-01 09:05:05', description: 'Groceries' },
                { amount: -1800.00, date: '2024-06-03 11:15:10', description: 'Utilities' },
                { amount: 2200.00, date: '2024-06-05 13:25:20', description: 'Entertainment' },
                { amount: -1900.00, date: '2024-06-07 15:35:30', description: 'Others' },
                { amount: 1300.00, date: '2024-06-09 17:45:40', description: 'Groceries' },
                { amount: -1200.00, date: '2024-06-11 19:55:50', description: 'Utilities' },
                { amount: 3000.00, date: '2024-06-13 21:05:55', description: 'Entertainment' },
                { amount: -2500.00, date: '2024-06-14 23:15:05', description: 'Others' },
            ],
            debt: null
        });
        signupForm.reset()
        // console.log("User signed up:", user);
        hideLoader()
        window.open('/dashboard.html')
    } catch (error) {
        errorDisplay(err.message)
        hideLoader()
    }
});
