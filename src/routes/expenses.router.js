const express = require('express');
const {
  getAllExpensesController,
  getExpenseByIdController,
  delateExpenseController,
  createExpenseController,
  updateExpenseController,
} = require('../controllers/expenses.controller');

const { Router } = express;

const expensesRouter = Router();

expensesRouter.get('/', getAllExpensesController);

expensesRouter.get('/:expenseId', getExpenseByIdController);

expensesRouter.post('/', createExpenseController);

expensesRouter.delete('/:expenseId', delateExpenseController);

expensesRouter.patch('/:expenseId', updateExpenseController);

module.exports = {
  expensesRouter,
};
