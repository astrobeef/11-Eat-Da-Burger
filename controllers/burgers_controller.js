const express = require("express");

const router = express.Router();

const burger = require("../models/burger");


router.get("/", function (req, res) {
    burger.selectAllBurgers(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        console.log("^^^ hbsObject");

        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {

    burger.insertOneBurger(req.body.colName, req.body.colVal, function (result) {
        res.json({ id: result.insertId });
    });

});

module.exports = router;