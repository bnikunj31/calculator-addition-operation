const db = require('../config/db');
exports.add = async (req,res) =>{
    const { num1, num2 } = req.body;
    const a = parseInt(num1);
    const b = parseInt(num2);
    const result = a+b;
    db.run(`Insert into history (num1,num2,result) VALUES('${num1}', '${num2}', '${result}')`),(err) =>{
        if (err) {
            console.error('Error in storing:', err);
        }
        res.json({ id: this.lastID, num1, num2, result });
    }
    res.redirect('/');
}
exports.history = async (req,res)=> {
    db.all(`SELECT * FROM history`,[], (err, rows) => {
        if (err) {
            console.error('Error in fetching:', err);
        }
        else{
            res.render('main', { rows : rows });
        }
    });
}