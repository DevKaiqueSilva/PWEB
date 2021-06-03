module.exports = function(app){ 
    app.get('/informacao/professores', function(req,res){ 
        var connection = app.config.dbConnection(); // executando a funcao 
        connection.query('select * from professores', function (err, results) { 
            if (err){ 
                console.log(err); 
                res.send(err); 
                return; 
            } 
            res.render('informacao/professores',{profs : results}); 
        }); 
    }); 
}; 
