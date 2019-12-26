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
        deleteButtons: 'btn-delete'
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

export default els;