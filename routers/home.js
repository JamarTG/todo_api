"use strict";
let express3 = require('express');
let router = express3.Router();
router.get("/", (request, response) => {
    response.json({
        message: "go to the todo Route For The Action"
    });
});
module.exports = router;
