const connection = require("./connection");

const orm = {
    /**
     * Insert one row into a table.
     * @param {string} table - the table to select from
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
     */
    updateOne : function(table, column, columnValue, condition, conditionValue, cb){
        const queryStr = "UPDATE ?? SET ?? = ? WHERE ?? = ?"

        connection.query(queryStr, [table, column, columnValue, condition, conditionValue], cb);
    }
}

orm.selectAll("burgers", function(err, res){
    if(err) throw err;

    console.log("Successfully selected all burgers");
});
orm.insertOne("burgers", "burger_name", "hawaii burger", function(err, res){
    if(err) throw err;

    console.log("Successfully selected all burgers");
});
orm.updateOne("burgers", "devoured", true, "id", 1, function(err, res){
    if(err) throw err;

    console.log("Successfully selected all burgers");
});

module.exports = orm;