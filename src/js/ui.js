let selectors = {
    totals: {
        totalSignClass: 'summary__total-sign',
        totalValueId: 'summary__total-amount',
        income: {
            amountId: 'summary__income-amount-income',
        },
        expenses: {
            amountId: 'summary__income-amount-expenses',
            percentageId: 'summary__expenses-percentage'
        }
    },

    input: {
        sign: 'plus-or-minus',
        description: 'description',
        amount: 'amount',
        submit: 'input-container__submit'
    },

    balanceSheet: {
        incomeTable: 'balance-sheet__income-table',
        expensesTable: 'balance-sheet__expenses-table',
        deleteButtons: 'btn-delete',
        td: 'balance-sheet__income-item'
    }
};

let els = {
    totals: {
        totalSign: document.getElementsByClassName(selectors.totals.totalSignClass)[0],
        totalValue: document.getElementById(selectors.totals.totalValueId),
        income: {
            amount: document.getElementById(selectors.totals.income.amountId)
        },
        expenses: {
            amount: document.getElementById(selectors.totals.expenses.amountId),
            percentage: document.getElementById(selectors.totals.expenses.percentageId)
        }
    },

    input: {
        sign: document.getElementById(selectors.input.sign),
        description: document.getElementById(selectors.input.description),
        amount: document.getElementById(selectors.input.amount),
        submit: document.getElementById(selectors.input.submit)
    },

    balanceSheet: {
        incomeTable: document.getElementById(selectors.balanceSheet.incomeTable),
        expensesTable: document.getElementById(selectors.balanceSheet.expensesTable),
        deleteButtons: document.getElementsByClassName(selectors.balanceSheet.deleteButtons) 
    }
}

function setIncomeOrExpenseTotal(amount, el) {
    el.innerHTML = getAmountString(amount);
}

function getAmountString(amount) {
    return (amount >= 0 ? '+' : '') + amount;
}

function addTableRow(description, amount, percentage) {
    let table = els.balanceSheet.incomeTable;

    let isExpense = amount < 0;
    if (isExpense) {
        table = els.balanceSheet.expensesTable;
    }

    var tbody = table.tBodies[0];
    var row = tbody.insertRow();
    var cell = row.insertCell();

    cell.classList.add(selectors.balanceSheet.td);

    let color = isExpense ? 'red' : 'green';

    let percentageSpan = '';
    if (isExpense) {
        percentageSpan = `<span class='balance-sheet__income-item-percentage'>${percentage}%</span>`;
    }

    cell.innerHTML = `
    <span class="balance-sheet__income-item-description">${description}</span>
    <span class="balance-sheet__income-item-amount ${color}">
        <span class="anim-container">
            <span class='balance-sheet__income-value'>${getAmountString(amount)}</span>
            ${percentageSpan}
        </span>
        <i class="btn-delete far fa-times-circle"></i>
    </span>
    `;
}

let ui = {
    totals: {
        setTotal(amount) {
            let sign = '+';
            if (amount < 0) {
                sign = '-';
            }
            els.totals.totalSign.innerHTML = sign;
            els.totals.totalValue.innerHTML = amount;
        },

        setIncomeTotal(amount) {
            setIncomeOrExpenseTotal(els.totals.income.amount);
        },

        setExpenseTotal(amount) {
            setIncomeOrExpenseTotal(els.totals.expenses.amount);
        }
    },

    balanceSheet: {
        addTableRow
    }
};

export default ui;