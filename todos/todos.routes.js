const { Router } = require('express');
const router = new Router();
const { getTodos, addTodos, deleteTodos, updateTodos } = require('./todos.controller');
/**
 * API to get TODOS
 */
router.get('/', getTodos);
router.post('/', addTodos);
router.delete('/', deleteTodos);
router.patch('/', updateTodos);
module.exports = router;