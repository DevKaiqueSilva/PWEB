module.exports = function(application){ 
    application.get('/admin/adicionar_professor', function(req,res){ 
        res.render('admin/adicionar_professor'); 
    });
    application.post('/professor/salvar', function(req,res){
        var professor = req.body;
        var connection = application.config.dbConnection();
        var professoresModel = application.models.professorModel;

        professoresModel.salvarProfessor(professor, connection, function(error, results){
            if(error){
                console.log('Erro ao inserir no banco:' + error);
                res.status(500).send(error);
            } else {
                console.log('professor criado!!!');
                res.redirect('/informacao/professores');
            }
        });
    });
}