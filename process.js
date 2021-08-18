
// cash in button on click part
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

// buy button on click part

document.getElementById("buy-btn").addEventListener('click', function(){

    // calcultaion of cash out part with buy part
    const bookNo = document.getElementById("no-books");
    const parseBookNo = parseFloat(bookNo.value);

    const bookPrice = document.getElementById("books-price");
    const parseBookPrice = parseFloat(bookPrice.value);

    const multiplyBoth = parseBookNo * parseBookPrice;

    const cashOutSCR = document.getElementById("cash-out-field");
    const parseCashOutSCR = parseFloat(cashOutSCR.innerText);

    cashOutSCR.innerHTML = parseCashOutSCR + multiplyBoth;

    // clear both input field
    bookNo.value = "";
    bookPrice.value = "";

    // menaging the balance part
    const totalBalanceSCR = document.getElementById("balance-field");
    const parsetotalBalanceSCR = parseFloat(totalBalanceSCR.innerText);
    totalBalanceSCR.innerHTML = parsetotalBalanceSCR -  multiplyBoth;
})