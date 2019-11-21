const connection = require("./connection");

const orm = {
    /**
     * Insert one row into a table.
     * @param {string} table - the table to select from
     * @param {Function} cb - the call back function
     */
    selectAll : function(table, cb){
        const queryStr = "SELECT * FROM ??";

        connection.query(queryStr, [table], cb);
    },
    /**
     * Insert one row into a table.
     * @param {string} table - the table to insert into
     * @param {string} column - the column to set
     * @param {string} columnValue - the value of the column
     * @param {Function} cb - the call back function
     */
    insertOne : function(table, column, columnValue, cb){
        const queryStr = "INSERT INTO ?? (??) VALUES (?)";

        connection.query(queryStr, [table, column, columnValue], cb);
    },
    /**
     * Update one column of a table when the condition is met.
     * @param {string} table - the table to update
     * @param {string} column - the column to update
     * @param {string} columnValue - the value of the column
     * @param {string} condition - the property which will be checked
     * @param {string} conditionValue - the value to compare to the property
     * @param {Function} cb - the call back function
     */
    updateOne : function(table, column, columnValue, condition, conditionValue, cb){
        const queryStr = "UPDATE ?? SET ?? = ? WHERE ?? = ?"

        connection.query(queryStr, [table, column, columnValue, condition, conditionValue], cb);
    }
};

module.exports = orm;