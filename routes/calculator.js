const express = require('express');
const router = express.Router();
const controller = require('../controllers/calculator')
const db = require('../config/db')

router.get('/',(req,res)=>{
    db.all(`SELECT * FROM history`,[], (err, rows) => {
        if (err) {
            console.error('Error in fetching:', err);
        }
        else{
            res.render('main', { rows : rows });
        }
    });
});
router.post('/add',controller.add);


module.exports=router;