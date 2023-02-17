
const { apiResponse, errorHandle } = require('../common/index');
const { getAllTodos, addTodosToDB, deleteTodosFromDB, updateTodosinDB } = require('./todos.dal');

/**
 * @module TODOS
 * @route {GET} /todos
 * @description Method to Get All the Todos
 * @method getTodos
 * @returns {Array}
 */
exports.getTodos = errorHandle(async (req, res, next) => {
    let { page } = req.query ? req.query : 1;
    let offSet = ((page - 1) * 100);
    const allTodos = await getAllTodos(offSet);
    apiResponse(res, allTodos, 200, 'success');
})

/**
 * @module TODOS
 * @route {POST} /todos
 * @description Method to add Todos to the DB
 * @body [{"todoName":"New Todo"}, {"todoName":"One more Todo"}]
 * @method addTodos
 * @returns {String}
 */
exports.addTodos = errorHandle(async ({ body }, res, next) => {
    let todosToBeAdded = JSON.parse(body)
    await addTodosToDB(todosToBeAdded);
    return apiResponse(res, "Todos has Been Added", 200, 'success');

})
/**
 * @module TODOS
 * @route {DELETE} /todos
 * @description Method to Delete Todos from the DB
 * @body {ids:[1,2,3]} or {todoNames:["New Todo", "One more Todo"]}
 * @method deleteTodos
 * @returns {String}
 */
exports.deleteTodos = errorHandle(async ({ body }, res, next) => {
    let { ids, todoNames } = JSON.parse(body)
    let todosToBeDeleted = (ids) ? ids : todoNames;
    ids ? await deleteTodosFromDB(todosToBeDeleted, mode = "id") : deleteTodosFromDB(todosToBeDeleted, mode = "todoName");
    apiResponse(res, "Todos Deleted SuccessFully", 200, 'success')
})

/**
 * @module TODOS
 * @route {PATCH} /todos
 * @description Method to Update Todos from the DB
 * @body [{id:1,todoName:"New Todo", status:true}]
 * @method updateTodos
 * @returns {String}
 */
exports.updateTodos = errorHandle(async ({ body }, res, next) => {
    let todosToBeUpdated = JSON.parse(body)
    await updateTodosinDB(todosToBeUpdated);
    apiResponse(res, "Todos Has been updated", 200, 'success')
})