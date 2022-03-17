const incomeSalary = document.getElementById('income-salary');
const incomeFreelance = document.getElementById('income-freelance');
const incomeExtra1 = document.getElementById('income-extra-1');
const incomeExtra2 = document.getElementById('income-extra-2');

const rentFlat = document.getElementById('costs-flat');
const costHouseServices = document.getElementById('costs-house-services');
const priceTransport = document.getElementById('costs-transport');
const loanPrice = document.getElementById('costs-credit');

const totalMonthInput = document.getElementById('total-month');
const totalDayInput = document.getElementById('total-day');
const totalYearInput = document.getElementById('total-year');

const moneyBox = document.getElementById('money-box-range');
const accumulationInput = document.getElementById('accumulation');
const spend = document.getElementById('spend');

let accumulation = 0;
let totalPrecents = 0;

const inputs = document.querySelectorAll('.input');

let totalMonth;
let totalDay;
let totalYear;

for (input of inputs) {
    input.addEventListener('input', () => {
        countAvaliableMoney();
        calculationPrecents();
    })
}

const strToNum = str => str.value ? parseInt(str.value) : 0;

const countAvaliableMoney = () => {
    const totalPerMonth = strToNum(incomeSalary) + strToNum(incomeFreelance) + strToNum(incomeExtra1) + strToNum(incomeExtra2);
    const totalCosts = strToNum(rentFlat) + strToNum(costHouseServices) + strToNum(priceTransport) + strToNum(loanPrice);

    totalMonth = totalPerMonth - totalCosts;
    totalMonthInput.value = totalMonth;
}

moneyBox.addEventListener('input', element => {
    const totalPrecent = document.getElementById('total-precents');
    totalPrecents = element.target.value;
    totalPrecent.innerHTML = totalPrecents;
    calculationPrecents();
})

const calculationPrecents = () => {
    accumulation = ((totalMonth * totalPrecents) / 100).toFixed();
    accumulationInput.value = accumulation;

    spend.value = totalMonth - accumulation;
    totalDay = (spend.value / 30).toFixed();
    totalDayInput.value = totalDay;

    totalYear = accumulation * 12;
    totalYearInput.value = totalYear;
}