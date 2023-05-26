const {Router} = require("express");
const {
    getOfferts,getCategorys
} = require('../controllers/MainController');


const router = Router();


router.get('/offerts',[] ,getOfferts);
router.get('/categorys',[] ,getCategorys);


module.exports = router;
