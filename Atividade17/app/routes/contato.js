module.exports = function(app) {
    app.get('/contato', (req,res) => {
        res.render("contato/index");
    });
}