
const handleLocal = document.getElementById("balance-field");
if(typeof(Storage)==undefined){
    localStorage.setItem("totalBalance", "00")
    handleLocal.innerHTML = localStorage.getItem("totalBalance");
}
else{
    handleLocal.innerHTML = localStorage.getItem("totalBalance");
}

// cash in button on click part
document.getElementById("cash-in-btn").addEventListener('click', function(){
    // calculation of cash in part 
    const cashInputAmount = document.getElementById("cash-in-inpt");
    const parseCashAmount = parseFloat(cashInputAmount.value);

    if(parseCashAmount > 0){
        const warning = document.getElementById("warning");
        warning.style.display = "none";

        const cashAmountSCR = document.getElementById("cash-in-field");
        const parseCashAmountSCR = parseFloat(cashAmountSCR.innerText);

        cashAmountSCR.innerHTML= parseCashAmount + parseCashAmountSCR;
        // clear input field
        cashInputAmount.value = "";

        // calculation of balance part 
        const balanceSCR = document.getElementById("balance-field");
        const parseBalanceSCR = parseFloat(balanceSCR.innerText);

        balanceSCR.innerHTML = parseBalanceSCR + parseCashAmount;
        localStorage.setItem("totalBalance", balanceSCR.innerText);
    }
    else{
        const warning = document.getElementById("warning");
        console.log("vaijan")
        warning.style.display = "block"
    }

    
})

// buy button on click part

document.getElementById("buy-btn").addEventListener('click', function(){

    // calcultaion of cash out part with buy part
    const bookNo = document.getElementById("no-books");
    const parseBookNo = parseFloat(bookNo.value);

    const bookPrice = document.getElementById("books-price");
    const parseBookPrice = parseFloat(bookPrice.value);

    const multiplyBoth = parseBookNo * parseBookPrice;

    const totalBalanceSCR = document.getElementById("balance-field");
    const parsetotalBalanceSCR = parseFloat(totalBalanceSCR.innerText);

    // console.log(multiplyBoth, parseCashOutSCR);
    if(parseBookNo > 0 && parseBookPrice > 0 && multiplyBoth < parsetotalBalanceSCR){

        const warning = document.getElementById("warning-buy");
        warning.style.display = "none"

        const cashOutSCR = document.getElementById("cash-out-field");
        const parseCashOutSCR = parseFloat(cashOutSCR.innerText);

        cashOutSCR.innerHTML = parseCashOutSCR + multiplyBoth;

        // clear both input field
        bookNo.value = "";
        bookPrice.value = "";

        // menaging the balance part
        totalBalanceSCR.innerHTML = parsetotalBalanceSCR -  multiplyBoth;
        localStorage.setItem("totalBalance", totalBalanceSCR.innerText);
    }
    else{
        const warning = document.getElementById("warning-buy");
        warning.style.display = "block"
    }
})