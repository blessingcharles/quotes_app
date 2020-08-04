var data = [{item:'love is the most blessed and cursed thing to get'}];

const bodyParser = require('body-parser');

urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = (app)=>{

    app.get('/quotes',(req , res)=>{

        res.render('todo',{todos:data});

    });

    app.post('/quotes',urlencodedParser,(req , res)=>{
            console.log(req);
            data.push(req.body);
            res.redirect('/quotes')
            res.json();
        
    });

    app.delete('/quotes',(req , res)=>{
      data = data.filter((todo)=>{

        return todo.item.replace(/ /g , '-') !== req.params.item ;

      });
        res.redirect('/quotes');
        res.json();
    });

}