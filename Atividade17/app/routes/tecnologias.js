module.exports = function(app) {
    app.get('/tecnologias', (req,res) => {
        res.render("tecnologias/index");
    });
}