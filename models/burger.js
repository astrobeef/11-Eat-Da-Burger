const orm = require("../config/orm");

const mTableName = "burgers";

const burger = {
    /**
     * 
     * @param {function} cb - The callback function.
     */
    selectAllBurgers : function(cb){
        orm.selectAll(mTableName, function(rAllBurgers){
            console.log(rAllBurgers);
            console.log("^^^ All burgers from burger.js");
            cb(rAllBurgers);
        });
    },
    /**
     * 
     * @param {string} col - The column to insert into
     * @param {string} colValue - The value to insert into the column
     * @param {function} cb - The callback function
     */
    insertOneBurger : function(col, colValue, cb){
        orm.insertOne(mTableName, col, colValue, function(rNewBurger){
            cb(rNewBurger);
        });
    },
    /**
     * 
     * @param {number} burger_ID - The ID of the burger to be updated.
     * @param {function} cb - The callback function
     */
    devourOneBurger : function(burger_ID, cb){
        orm.updateOne(mTableName, "devoured", true, "id", burger_ID, function(rUpdatedBurger){
            cb(rUpdatedBurger);
        });
    }
}

module.exports = burger;