var express = require ('express');//require do express
var app = express();


app.set('view engine', 'ejs');//setando engine
app.use(express.static('public'));//definindo pasta pública


app.get('/', function(req,res){//mapeando raiz para index;novas paginas podem ser colocadas aqui
	res.render("../views/index");
});


/*
app.get('/page2', function(req, res) {
    res.render("../views/page2");
});

app.get('/', function(req, res) {
    res.render("../views/index");
})

*/


app.listen(3000, function(){//porta a rodar
	console.log('Executando na porta 3000');

});