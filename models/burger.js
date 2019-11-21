const orm = require("../config/orm");

const burger = {
    /**
     * 
     * @param {function} cb - The callback function.
     */
    selectAllBurgers : function(cb){
        orm.selectAll("burger", cb);
    },
    /**
     * 
     * @param {string} col - The column to insert into
     * @param {string} colValue - The value to insert into the column
     * @param {function} cb - The callback function
     */
    insertOneBurger : function(col, colValue, cb){
        orm.insertOne("burger", col, colValue, cb);
    },
    /**
     * 
     * @param {number} burger_ID - The ID of the burger to be updated.
     * @param {function} cb - The callback function
     */
    devourOneBurger : function(burger_ID, cb){
        orm.updateOne("burger", "devoured", true, "id", burger_ID, cb);
    }
}

module.exports = burger;