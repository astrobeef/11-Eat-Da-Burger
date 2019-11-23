const express = require("express");

const router = express.Router();

const burger = require("../models/burger");


router.get("/", function (req, res) {

    burger.selectAllBurgers(function (data) {
        const hbsObject = {
            burgers: data
        };

        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOneBurger(req.body.colName, req.body.colVal, function (result) {
        res.sendStatus(200);
    });
});

router.put("/api/burgers/:id", function (req, res){
    burger.devourOneBurger(req.params.id, function(err, result){
        if(err) throw err;
        res.sendStatus(200);
    });
});

module.exports = router;