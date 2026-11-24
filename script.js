const MIN_INCOME = 15000;

function num(id) {
    return parseFloat(document.getElementById(id).value);
}

function checkEligibility() {
    let age = num("age");
    let income = num("income");
    let loan = num("loanAmt");
    let score = num("score");
    let msg;

    if (age < 21 || age > 60) {
        msg = "Not eligible: age must be between 21 and 60";
    } else if (income < MIN_INCOME) {
        msg = "Not eligible: income too low";
    } else {
        if (score >= 650) {
            let maxLoan = income * 20;
            msg = loan <= maxLoan ? "Eligible for the loan" : "Not eligible: maximum loan is Rs. " + maxLoan;
        } else {
            msg = "Not eligible: credit score too low";
        }
    }
    document.getElementById("eligibleResult").innerText = msg;
}

function calculateEMI(p, rate, years) {
    let r = rate / 12 / 100;
    let n = years * 12;
    return (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function showEMI() {
    let emi = calculateEMI(num("emiPrincipal"), num("emiRate"), num("emiYears"));
    document.getElementById("emiResult").innerText = "Monthly EMI: Rs. " + emi.toFixed(2);
}

function showInterestTable() {
    let p = num("intPrincipal");
    let rate = num("intRate");
    let years = num("intYears");
    let html = "<table><tr><th>Year</th><th>Simple Interest</th><th>Compound Amount</th></tr>";

    for (let i = 1; i <= years; i++) {
        let si = p * rate * i / 100;
        let ci = p * Math.pow(1 + rate / 100, i);
        html += "<tr><td>" + i + "</td><td>" + si.toFixed(2) + "</td><td>" + ci.toFixed(2) + "</td></tr>";
    }
    document.getElementById("interestResult").innerHTML = html + "</table>";
}

function showSummary() {
    let balance = num("openBal");
    let dep = num("monthDep");
    let months = num("months");
    let m = 1;
    let html = "<table><tr><th>Month</th><th>Balance</th></tr>";

    while (m <= months) {
        balance += dep;
        html += "<tr><td>" + m + "</td><td>" + balance + "</td></tr>";
        m++;
    }
    document.getElementById("summaryResult").innerHTML = html + "</table>";
}

function savingsGoal() {
    let saved = num("curSave");
    let monthly = num("monSave");
    let target = num("target");
    let count = 0;

    do {
        saved += monthly;
        count++;
    } while (saved < target);

    document.getElementById("goalResult").innerText = "You will reach the target in " + count + " months";
}

function accountDetails() {
    let type = document.getElementById("accType").value;
    let text;

    switch (type) {
        case "savings":
            text = "Interest 3.5%, minimum balance Rs. 1000";
            break;
        case "current":
            text = "No interest, minimum balance Rs. 10000";
            break;
        case "salary":
            text = "Interest 3%, zero balance account";
            break;
        case "fd":
            text = "Interest 6.5%, minimum deposit Rs. 5000";
            break;
        default:
            text = "Select an account type";
    }
    document.getElementById("accResult").innerText = text;
}

function scopeDemo() {
    let out = "";

    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
        out += "Inside block: " + a + " " + b + " " + c + "\n";
    }

    out += "var a outside block: " + a + "\n";
    out += "let b outside block: " + typeof b + "\n";
    out += "const c outside block: " + typeof c;
    document.getElementById("scopeResult").innerText = out;
}

function operatorDemo() {
    let balance = num("opBal");
    let withdraw = num("opWith");
    let allowed = balance >= withdraw && (balance - withdraw) >= 500;
    let out = "Transaction: " + (allowed ? "Allowed" : "Denied") + "\n";

    if (allowed) {
        balance -= withdraw;
        balance -= 10;
        out += "New balance (after Rs. 10 charge): " + balance + "\n";
    }
    out += "Rs. 500 notes: " + Math.floor(withdraw / 500) + ", remaining: " + withdraw % 500;
    document.getElementById("opResult").innerText = out;
}























// function checkloaneligibility(){
//     let age= Number(document.getElementById("age").value);
//     let monthlyincome= Number(document.getElementById("monthlyincome").value);
//     let creditscore= Number(document.getElementById("creditscore").value);

//     let result="";

//     if(age<=0 || monthlyincome<=0 || creditscore<=0){
//         result="Please Enter Valid Input Values.";
//     }
//     document.getElementById("message").textContent = result;
// }

// document.querySelector("button").addEventListener("click", function(event){
//     event.preventDefault();
// });