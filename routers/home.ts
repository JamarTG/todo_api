let express3  = require('express');
let router = express3.Router()

router.get("/", (request: any,response: { json: (arg0: { message: string; }) => void; }) => {
    response.json({
        message : "go to the todo Route For The Action"
    })
});


module.exports = router