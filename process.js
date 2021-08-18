document.getElementById("cash-in-btn").addEventListener('click', function(){
    // calculation of cash in part 
    const cashInputAmount = document.getElementById("cash-in-inpt");
    const parseCashAmount = parseFloat(cashInputAmount.value);

    const cashAmountSCR = document.getElementById("cash-in-field");
    const parseCashAmountSCR = parseFloat(cashAmountSCR.innerText);

    cashAmountSCR.innerHTML= parseCashAmount + parseCashAmountSCR;
    // clear input field
    cashInputAmount.value = "";

    // calculation of balance part 
    const balanceSCR = document.getElementById("balance-field");
    const parseBalanceSCR = parseFloat(balanceSCR.innerText);

    balanceSCR.innerHTML = parseBalanceSCR + parseCashAmount;
})