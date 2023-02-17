
const client = require('../db/connection');
exports.getAllTodos = async (offSet) => {
    let Result = await client.query(`Select * from "public"."Todos" ORDER BY "id" LIMIT 100 OFFSET ${offSet}`)
        .catch(err => console.log(err));
    return Result.rows;

}
exports.addTodosToDB = async (todosToBeAdded) => {
    for (let todo of todosToBeAdded) {
        await client.query(`INSERT INTO "public"."Todos"("todoName") VALUES ('${todo.todoName}')`)
            .catch((err) => console.log(err));
    }
}
exports.deleteTodosFromDB = async (todosToBeDeleted, mode) => {

    mode === "id" ? await client.query(`DELETE FROM "public"."Todos" WHERE id IN (${todosToBeDeleted});`)
        : await client.query(`DELETE FROM "public"."Todos" WHERE "todoName" IN ('${todosToBeDeleted}');`)
}
exports.updateTodosinDB = async (todosToBeUpdated) => {
    for (let todo of todosToBeUpdated) {
        const { id, todoName, status } = todo;
        await client.query(`INSERT INTO "public"."Todos" ("id","todoName","completionStatus") values(${id},'${todoName}', TRUE ) on CONFLICT ("todoName",id) do UPDATE set "completionStatus"=${status};  `)
    }
}
