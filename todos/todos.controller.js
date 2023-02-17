/**
 * @module TODOS
 */

const { getTodos, addTodos, deleteTodos, updateTodos } = require('./todos.services');

/**
 * Method to Get All the TODOS From the DB
 * @method getTodos
 */
exports.getTodos = (req, res, next) => {

    getTodos(req, res, next);
}

/**
 * Method to Add the Todos in the DB
 * @method addTodos
 */
exports.addTodos = (req, res, next) => {
    addTodos(req, res, next);
}

/**
 * Method to Delete the Todos from the DB
 * @method deleteTodos
 */
exports.deleteTodos = (req, res, next) => {

    deleteTodos(req, res, next)
}

/**
 * Method TO Update the Todos in the DB
 * @method updateTodos
 */
exports.updateTodos = (req, res, next) => {

    updateTodos(req, res, next);
}