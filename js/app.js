function getIncomeAmount() {
    const incomeInput = document.getElementById('income-input');
    const incomeInputText = incomeInput.value;
    const incomeAmountValue = parseFloat(incomeInputText);
    return incomeAmountValue;
}
// expenses amount..!
function getTotalExpenses() {
    // food amount
    const foodInput = document.getElementById('food-input');
    const foodInputText = foodInput.value;
    const foodAmountValue = parseFloat(foodInputText);
    // rent amount
    const rentInput = document.getElementById('rent-input');
    const rentInputText = rentInput.value;
    const rentAmountValue = parseFloat(rentInputText);
    // clothes amount 
    const clothesInput = document.getElementById('clothes-input');
    const clothesInputText = clothesInput.value;
    const coltheAmountValue = parseFloat(clothesInputText);
    if(!isNaN(foodAmountValue) && !isNaN(rentAmountValue) && !isNaN(coltheAmountValue)) {
        const expensesItemAmount = foodAmountValue + rentAmountValue + coltheAmountValue;
    // total expenses amount..!
        const expensesAmount = document.getElementById('expenses-amount');
        const expensesAmountText = expensesAmount.innerText;
        const expensesAmountValue = parseFloat(expensesAmountText);
        const expensesTotalAmount = expensesAmountValue + expensesItemAmount;
        const updateExpensesTotalAmount = expensesAmount.innerText = expensesTotalAmount;
        return updateExpensesTotalAmount;
    }
    else {
        alert ('Please enter the number..!')
        const valueCencle = document.getElementById('expenses-amount').innerText = null;
        return valueCencle;
    }

}

function totalBalance() {
    const expensesTotalAmount = getTotalExpenses();
    const totalIncomeAmount = getIncomeAmount();
    if(totalIncomeAmount < expensesTotalAmount || totalIncomeAmount < 0) {
        alert('Sorry the balance of expenses is not possible');
        getTotalExpenses();
    }
    else {
        const totalBalance = document.getElementById('total-balance');
        const totalBalanceText = totalBalance.innerText;
        const totalBalanceValue = parseFloat(totalBalanceText);
        const newTotalBalance = totalIncomeAmount + totalBalanceValue;
        
        const updateTotalBalance = newTotalBalance - expensesTotalAmount;
        totalBalance.innerText = updateTotalBalance;
    }
}
// saving total amount..!
function getSavingAmount() {
    const totalIncomeAmount = getIncomeAmount();
    const savingInput = document.getElementById('save-input');
    const savingInputText = savingInput.value;
    const savingInputValue = parseFloat(savingInputText);
    const savingTotalAmount = (totalIncomeAmount / 100) * savingInputValue;
    document.getElementById('saving-amount').innerText = savingTotalAmount;
} 

// handle calculate button event..!
document.getElementById('calculate-button').addEventListener('click', function (){    
    totalBalance();
})

// handle save button event..!
document.getElementById('save-button').addEventListener('click', function (){
    getSavingAmount();
    const saveAmountTotal = document.getElementById('saving-amount').innerText;
    const expensesAmount = document.getElementById('total-balance').innerText;

    if(expensesAmount > saveAmountTotal){
        const remaining = document.getElementById('remaining-balance');
        const sum = parseFloat(expensesAmount) - parseFloat(saveAmountTotal);
        remaining.innerText = sum;
    }
    else{
        alert('Please enter the number..!')
    }
})