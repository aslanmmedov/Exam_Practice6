const express = require('express');
const router = express.Router();

const {
    GetAllProduct,
    GetDataById,
    AddData,
    DeleteDataById,
} = require("../controllers/productController");


router.get('/',GetAllProduct);
router.get('/:id',GetDataById);
router.post('/',AddData);
router.delete('/:id',DeleteDataById);

module.exports = router;