const {Router} = require("express");
const {
    getOfferts,getCategorys,getCitysByFrom,getAnyDictionary
} = require('../controllers/MainController');


const router = Router();


router.get('/offerts',[] ,getOfferts);
router.get('/categorys',[] ,getCategorys);
router.get('/provinces',[] ,getCitysByFrom);
router.get('/get-dictionary/:dictionary',[] ,getAnyDictionary);
module.exports = router;
