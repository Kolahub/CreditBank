import { app } from "./firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where, onSnapshot } from "firebase/firestore";
import { format, formatDistanceToNow, parse } from "date-fns";
import { errorDisplay, hideLoader, showLoader } from "./formSubmitted";

const db = getFirestore();
const auth = getAuth();

const welMsg = document.querySelector("#welMsg");
const balance = document.getElementById("balance");
const accHolder = document.getElementById("accHolder");
const accNumber = document.getElementById("accNumber");
const transactionHistoryElement = document.getElementById("transactionHistory");
const timeRange = document.getElementById("timeRange");
const transactionForm = document.getElementById("transactionForm");

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userRef = doc(db, "usersData", user.uid);
    onSnapshot(userRef, (snapshot) => {
      const balanceValue = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(snapshot.data().totalAmount);

      welMsg.textContent = `Welcome, ${snapshot.data().userName}`;
      balance.textContent = balanceValue;
      accHolder.textContent = snapshot.data().fullName;
      accNumber.textContent = snapshot.data().accNo;
      const debt = snapshot.data().debt;
      const transactionHistory = snapshot.data().transactionHist;
      histDisplay(transactionHistory);
      doughnutChart(transactionHistory);
      updateDashboard(transactionHistory);
      timeRange.addEventListener("change", function () {
        updateDashboard(transactionHistory);
      });

      if (debt && Object.keys(debt).length !== 0) {
        document.getElementById("debtAmount").textContent = `${new Intl.NumberFormat("en-NG", {
          style: "currency",
          currency: "NGN",
        }).format(debt.amount)}`;

        document.getElementById("loanPurpose").textContent = debt.purpose;
        document.getElementById("repayment").textContent = `${new Intl.NumberFormat("en-NG", {
          style: "currency",
          currency: "NGN",
        }).format(debt.repayment)}`;

        document.getElementById("displayAmount").textContent = debt.amount;
        document.getElementById("displayRepayment").textContent = debt.repayment;
        document.getElementById("displayLoanType").textContent = debt.loanType;
        document.getElementById("displayDuration").textContent = debt.duration;
        document.getElementById("displayPurpose").textContent = debt.purpose;
        document.getElementById("displayIncome").textContent = debt.income;
        document.getElementById("loanInfo").classList.remove("hidden");
      } else {
        document.getElementById("debtAmount").textContent = "--- ---";
        document.getElementById("loanPurpose").textContent = "--- ---";
        document.getElementById("repayment").textContent = "--- ---";
      }
    });
  }
});

const histDisplay = (arr) => {
  let data = "";
  arr.forEach((el, i) => {
    let typeClass = "bg-gradient-to-r text-white px-8 py-1 rounded-full";
    const type = el.amount > 0 ? "deposit" : "withdrawal";
    if (type === "deposit") {
      typeClass += " from-green-500 to-green-700";
    } else {
      typeClass += " from-red-500 to-red-700";
    }
    data =
      `
      <div class="rcpt flex justify-between items-center gap-3 border-b-2 border-blue-400 py-3 last:border-none" data-index=${i}>
        <div class="text-white text-lg">
          <p>${new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
          }).format(el.amount)}</p>
          <p>${el.description}</p>
        </div>
        <div class="flex items-center gap-2 lg:flex-col xl:flex-row">
          <p class="text-white">${formatDistanceToNow(new Date(el.date))} ago</p>
          <div class="${typeClass}" id="transactionType">
            ${type}
          </div>
        </div>
      </div>
    ` + data;
  });

  transactionHistoryElement.innerHTML = data;

  const rcptTranDetails = document.getElementById('rcptTranDetails')
  const rcptAccDetails = document.getElementById('rcptAccDetails')
  let transaction = arr[arr.length - 1]

  function rcptUpdDisplay (transaction) {
          // Parse the date string into a JavaScript Date object
          const parsedDate = parse(transaction.date, 'yyyy-MM-dd HH:mm:ss', new Date());

          // Format the date to US format
          const formattedDate = format(parsedDate, 'MM/dd/yyyy');
    
          // Extract the time
          const formattedTime = format(parsedDate, 'HH:mm:ss');
    
          const TranData = `
            <li><p class="font-medium text-lg">Date: <span class="font-normal">${formattedDate}</span></p></li>
            <li><p class="font-medium text-lg">Time: <span class="font-normal">${formattedTime}</span></p></li>
            <li><p class="font-medium text-lg">Time: <span class="font-normal">${transaction.description}</span></p></li>
            <li><p class="font-medium text-lg">Amount: <span class="font-normal">${new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN"
            }).format(transaction.amount)}</span></p></li>
            <li><p class="font-medium text-lg">Status: <span class="font-normal">Successful</span></p></li>
            <li><p class="font-medium text-lg">Type: <span class="font-normal">${transaction.amount > 0 ? 'Credit' : 'Debit'}</span></p></li>`;
    
            const accData = `
            ${
              transaction && transaction.rcvrFullName && transaction.amount < 0 ?
              `<li><p class="font-medium text-lg">Sender Name: <span class="font-normal">${transaction.senderName}</span></p></li>
            <li><p class="font-medium text-lg">Sender Account Number: <span class="font-normal">${transaction.senderAccNo}</span></p></li>
            <li><p class="font-medium text-lg">Receiver Name: <span class="font-normal">${transaction.rcvrFullName}</span></p></li>
            <li><p class="font-medium text-lg">Receiver Account Number: <span class="font-normal">${transaction.rcvrAccNo}</span></p></li>
            <li><p class="font-medium text-lg">Narration: <span class="font-normal">${transaction.rcvrFullName ? transaction.rcvrFullName : 'Nil'}/${transaction.description}</span></p></li>` :
            
            `<li><p class="font-medium text-lg">Narration: <span class="font-normal">${transaction.rcvrFullName ? transaction.rcvrFullName : 'Nil'}/${transaction.description}</span></p></li>`
            }`
    
            rcptTranDetails.innerHTML = TranData;
            rcptAccDetails.innerHTML = accData
  }

  rcptUpdDisplay(transaction)

  transactionHistoryElement.addEventListener('click', function (e) {
    if (e.target.closest('.rcpt')) {
      const index = e.target.closest('.rcpt').dataset.index;
      transaction = arr[index];
      // console.log(transaction);
  rcptUpdDisplay(transaction)
    }
  });

};

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const sections = document.querySelectorAll(".sec");

  menu.addEventListener("click", function (event) {
    const button = event.target.closest(".comp");
    if (button) {
      const index = button.getAttribute("data-index");
      if (index !== null) {
        sections.forEach((section) => {
          section.classList.add("hidden");
        });
        const activeSection = document.querySelector(`.sec[data-index='${index}']`);
        if (activeSection) {
          activeSection.classList.remove("hidden");
        }
      }
    }
  });
});

let myDoughnutChart = null; // Declare a variable to hold the Chart instance globally

function doughnutChart(data) {
  const categories = {
    Groceries: 0,
    Utilities: 0,
    Entertainment: 0,
    Debts: 0,
    Others: 0,
  };

  data.forEach((item) => {
    categories[item.description] += item.amount;
  });

  const doughnutCtx = document.getElementById("doughnutChart").getContext("2d");

  // Check if myDoughnutChart exists and destroy it before creating a new chart
  if (myDoughnutChart) {
    myDoughnutChart.destroy();
  }

  myDoughnutChart = new Chart(doughnutCtx, {
    type: "doughnut",
    data: {
      labels: Object.keys(categories),
      datasets: [
        {
          data: Object.values(categories),
          backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(54, 162, 235, 0.2)"],
          borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)", "rgba(255, 206, 86, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}

const ctx = document.getElementById("lineChart").getContext("2d");
let lineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Daily Transactions",
        data: [],
        borderColor: "rgba(29,78,216, 1)",
        backgroundColor: "rgba(29,78,216, .2)",
        fill: true,
        tension: 0.1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
          tooltipFormat: "MMM dd, yyyy",
        },
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Amount",
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  },
});

function updateDashboard(data) {
  const timeRangeVal = timeRange.value;
  const now = new Date();
  let filteredData = [];

  switch (timeRangeVal) {
    case "7days":
      filteredData = data.filter((item) => new Date(item.date) >= new Date(now.setDate(now.getDate() - 7)));
      break;
    case "30days":
      filteredData = data.filter((item) => new Date(item.date) >= new Date(now.setDate(now.getDate() - 30)));
      break;
    case "2months":
      filteredData = data.filter((item) => new Date(item.date) >= new Date(now.setMonth(now.getMonth() - 2)));
      break;
    case "1year":
      filteredData = data.filter((item) => new Date(item.date) >= new Date(now.setFullYear(now.getFullYear() - 1)));
      break;
    case "overall":
    default:
      filteredData = data;
  }

  const dates = filteredData.map((item) => item.date);
  const amounts = filteredData.map((item) => item.amount);

  const totalSpending = filteredData.filter((item) => item.amount < 0).reduce((sum, item) => sum + item.amount, 0);
  const totalReceived = filteredData.filter((item) => item.amount > 0).reduce((sum, item) => sum + item.amount, 0);

  document.getElementById("totalSpending").innerText = `${new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(Math.abs(totalSpending).toFixed(2))}`;
  document.getElementById("totalReceived").innerText = `${new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(totalReceived.toFixed(2))}`;

  lineChart.data.labels = dates;
  lineChart.data.datasets[0].data = amounts;
  lineChart.update();
}

transactionForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = auth.currentUser;
  const userRef = doc(db, "usersData", user.uid);
  const userData = await getDoc(userRef);

  const fd = new FormData(transactionForm);
  const data = Object.fromEntries(fd.entries());

  for (const [key, value] of Object.entries(data)) {
    if (!value) {
      errorDisplay(`The field "${key}" is empty. Please fill it out.`);
      return;
    }
  }

  if (Number(data.amount) > Number(userData.data().totalAmount)) {
    errorDisplay("Insuffienct funds.");
    return;
  }

  if (data.pin !== userData.data().pin) {
    errorDisplay("Wrong pin or password. Please try again");
    return;
  }

  const keys = Object.keys(data);
  const lastKey = keys[keys.length - 1];
  delete data[lastKey];

  try {
    showLoader();
    const newSenderTotalAmount = userData.data().totalAmount - Number(data.amount);
    const now = new Date();
    const formattedDate = format(now, "yyyy-MM-dd HH:mm:ss");
    data.date = formattedDate;

    const senderData = { ...data };
    const recevierData = { ...data };
    senderData.amount = -senderData.amount;
    senderData.senderName = userData.data().fullName
    senderData.senderAccNo = userData.data().accNo
    recevierData.amount = +recevierData.amount;
    recevierData.rcvrFullName = userData.data().fullName

    const accountQuery = query(collection(db, "usersData"), where("accNo", "==", data.accountNumber));
    const snapshot = await getDocs(accountQuery);

    const accountData = snapshot.docs.map((doc) => doc.data());

    if(accountData.length === 0) {
      hideLoader();
      errorDisplay('Account Number not valid.')
      return
    }
    const [receiverDoc] = accountData;
    const firstDoc = snapshot.docs[0];
    const docId = firstDoc.id;
    const docRef = doc(db, "usersData", docId);
    const newRecvrTotalAmount = Number(receiverDoc.totalAmount) + Number(data.amount);


    senderData.rcvrFullName = receiverDoc.fullName
    senderData.rcvrAccNo = receiverDoc.accNo

    await updateDoc(userRef, {
      totalAmount: newSenderTotalAmount,
      transactionHist: [...userData.data().transactionHist, senderData],
    });

    await updateDoc(docRef, {
      totalAmount: newRecvrTotalAmount,
      transactionHist: [...receiverDoc.transactionHist, recevierData],
    });

    hideLoader();
    transactionForm.reset();
  } catch (err) {
    errorDisplay(err.message);
    hideLoader();
  }
});

//LOAN REQUEST
const loanForm = document.querySelector("#loanForm");
loanForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  showLoader()
  const user = auth.currentUser;
  const userRef = doc(db, "usersData", user.uid);
  const userData = await getDoc(userRef);
  const fd = new FormData(loanForm);
  const data = Object.fromEntries(fd.entries());
  const now = new Date();
  const formattedDate = format(now, "yyyy-MM-dd HH:mm:ss");
  data.repayment = Number(data.amount) + Number(data.amount * 0.07);

  const obj = {
    amount: Number(data.amount),
    date: formattedDate,
    description: 'Debts',
  }

  for (const [key, value] of Object.entries(data)) {
    if (!value) {
      errorDisplay(`The field "${key}" is empty. Please fill it out.`);
      loanForm.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
  }

  const minIncomeThreshold = 10000;

  if (userData.data().debt && Object.keys(userData.data().debt).length !== 0) {
    errorDisplay("Please pay off your previous loan before applying for a new one.");
    loanForm.scrollIntoView({ behavior: "smooth", block: "start" });
    loanForm.reset();
    return;
  }

  if (Number(userData.data().totalAmount) < 5000) {
    errorDisplay(`Your balance, ${new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(userData.data().totalAmount)}, is too low. You must have at least \u20A610,000 in your account balance
    }`);
    loanForm.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (Number(data.income) < minIncomeThreshold) {
    errorDisplay(`Your monthly income must be at least ${new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(minIncomeThreshold)}.`);
    loanForm.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  console.log(data);

  const newBalance = Number(userData.data().totalAmount) + Number(data.amount);

  try {
    await updateDoc(userRef, {
      totalAmount: newBalance,
      transactionHist: [...userData.data().transactionHist, obj],
      debt: data,
    });
    await activeLoanRepayment(data.duration);
    loanForm.reset();
    hideLoader()
  } catch (err) {
    errorDisplay(err.message);
    hideLoader()
  }
});

document.getElementById("downloadBtn").addEventListener("click", function () {
  const downloadBtn = document.getElementById("downloadBtn");
  downloadBtn.style.display = "none";

  const element = document.getElementById("loanInfo");
  html2pdf()
    .from(element)
    .save("Loan_Request.pdf")
    .then(() => {
      downloadBtn.style.display = "block";
    });
});

document.getElementById("downloadRcptBtn").addEventListener("click", function () {
  const downloadBtn = document.getElementById("downloadRcptBtn");
  const element = document.getElementById("rcptCard");

  // Hide the download button
  downloadBtn.style.display = "none";

  // Temporarily adjust the element's width class for PDF generation
  const originalClass = element.className;
  element.classList.remove('lg:w-1/2');
  element.classList.add('w-full');

  // Generate PDF from the element and save it
  html2pdf()
    .from(element)
    .save("Receipt.pdf")
    .then(() => {
      // Restore the original width class
      element.className = originalClass;

      // Restore the display of the download button
      downloadBtn.style.display = "block";
    })
});


async function activeLoanRepayment(time) {
  const user = auth.currentUser;
  const userRef = doc(db, "usersData", user.uid);
  const userData = await getDoc(userRef);
  const newBalance = Number(userData.data().totalAmount) - Number(userData.data().debt.repayment);
  setTimeout(async () => {
    const now = new Date();
    const formattedDate = format(now, "yyyy-MM-dd HH:mm:ss");


    const obj = {
      amount: Number(-userData.data().debt.repayment),
      date: formattedDate,
      description: 'Debts',
    }

    await updateDoc(userRef, {
      totalAmount: newBalance,
      transactionHist: [...userData.data().transactionHist, obj],
      debt: {},
    });
  }, 3000 * time);
  console.log("LOAN TIMER ACTIVATED");
}


document.getElementById('logoutBtn1').addEventListener('click', async function () {
  try {
  await signOut(auth)
  window.location.href = 'landingPage.html'
  } catch(err) {
    errorDisplay(err.message)
  }
})
