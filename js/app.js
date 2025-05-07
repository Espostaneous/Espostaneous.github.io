// filepath: c:\Users\Lloyd Philip\Documents\School\NBSC Codings\Espostaneous.github.io\js\app.js
const incomeForm = document.getElementById('income-form');
const expenseForm = document.getElementById('expense-form');
const incomeList = document.getElementById('income-list');
const expenseList = document.getElementById('expense-list');
const totalIncomeEl = document.getElementById('total-income');
const totalExpensesEl = document.getElementById('total-expenses');
const balanceEl = document.getElementById('balance');

let totalIncome = 0;
let totalExpenses = 0;

incomeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const source = e.target[0].value;
    const amount = parseFloat(e.target[1].value);
    totalIncome += amount;
    totalIncomeEl.textContent = totalIncome;
    balanceEl.textContent = totalIncome - totalExpenses;
    const li = document.createElement('li');
    li.textContent = `${source}: $${amount}`;
    incomeList.appendChild(li);
    e.target.reset();
});

expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const category = e.target[0].value;
    const amount = parseFloat(e.target[1].value);
    totalExpenses += amount;
    totalExpensesEl.textContent = totalExpenses;
    balanceEl.textContent = totalIncome - totalExpenses;
    const li = document.createElement('li');
    li.textContent = `${category}: $${amount}`;
    expenseList.appendChild(li);
    e.target.reset();
});