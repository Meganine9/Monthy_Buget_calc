let totalIncome = 0;
let rentExpense = 0;
let utilitiesExpense = 0;
let groceriesExpense = 0;
let transportationExpense = 0;
let entertainmentExpense = 0;


function addSalary() {
  let salaryInput = document.getElementById("salaryInput");
  let salary = Number(salaryInput.value);
  if (salary > 0) {
    totalIncome = salary;
    updateSummary();
    calculateYearlyIncome();
    salaryInput.value = "";
  }
}

function addRent() {
  let input = document.getElementById("rentInput");
  let amount = Number(input.value);
  if (amount > 0) {
    rentExpense = amount;
    updateSummary();
    input.value = "";
  }
}

function addUtilities() {
  let input = document.getElementById("utilitiesInput");
  let amount = Number(input.value);
  if (amount > 0) {
    utilitiesExpense = amount;
    updateSummary();
    input.value = "";
  }
}

function addGroceries() {
  let input = document.getElementById("groceriesInput");
  let amount = Number(input.value);
  if (amount > 0) {
    groceriesExpense = amount;
    updateSummary();
    input.value = "";
  }
}

function addTransportation() {
  let input = document.getElementById("transportationInput");
  let amount = Number(input.value);
  if (amount > 0) {
    transportationExpense = amount;
    updateSummary();
    input.value = "";
  }
}

function calculateHousingExpenses() {
  return rentExpense + utilitiesExpense;
}
function calculateLivingExpenses() {
  return groceriesExpense + transportationExpense;
}
function calculateTotalExpenses() {
  return calculateHousingExpenses() + calculateLivingExpenses();
}
function calculateRemainingBuget(){
    return totalIncome - calculateTotalExpenses();
}
function calculateYearlyIncome(){
  return totalIncome * 12;
}
function calculateYearlyExpenses(){
  return calculateTotalExpenses() * 12;
}

function calculateYearlySavings(){
  return calculateYearlyIncome() - calculateYearlyExpenses();
}

function updateSummary() {
    document.getElementById("totalIncome").innerHTML = "Total Income: $" + totalIncome
    let housingExpenses = calculateHousingExpenses();
    document.getElementById("housingExpenses").innerHTML =
    "Housing Expenses: $" + housingExpenses;
    let livingExpenses = calculateLivingExpenses();
    document.getElementById("livingExpenses").innerHTML = "Living Expenses: $" + livingExpenses;
    let totalExpenses = calculateTotalExpenses();
    document.getElementById("totalExpenses").innerHTML = "Total Expenses: $" + totalExpenses;
    let Buget= calculateRemainingBuget();
    document.getElementById("Budget").innerHTML = "Buget for further spending: $" + Buget;
    let yearlyIncome = calculateYearlyIncome();
  document.getElementById("yearlyIncome").innerHTML = "Yearly Income: $" + yearlyIncome;
  let yearlyExpenses = calculateYearlyExpenses();
  document.getElementById("yearlyExpenses").innerHTML = "Yearly Expenses: $" + yearlyExpenses;
  let yearlySavings = calculateYearlySavings();
  document.getElementById("yearlySavings").innerHTML = "Yearly Savings: $" + yearlySavings
}
