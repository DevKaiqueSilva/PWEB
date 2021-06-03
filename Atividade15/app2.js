var express = require("express");
var app = express(); //executando o express

var texto  = require("./modulo1");//nao precisa colocar o .js ele já entende

app.set("view engine","ejs");

// app.get("/", (req, res) => {
//     res.send("<html><body>Site da Fatec Sorocaba</body></html>")
// });
app.get("/", (req, res) => {
    res.render("home/index")
});
    

app.get("/formular_adicionar_usuario", (req, res) => {
    res.render("admin/adicionar_usuario")
});

app.get("/informacao/historia", (req, res) => {
    res.render("informacao/historia")
});

app.get("/informacao/cursos", (req, res) => {
    res.render("informacao/cursos")
});

app.get("/informacao/professores", (req, res) => {
    res.render("informacao/professores")
});

// app.get("/historia", (req, res) => {
//     res.render("secao/historia")
// });

// app.get("/cursos", (req, res) => {
//     res.render("secao/cursos")
// });

// app.get("/professores", (req, res) => {
//     res.render("secao/professores")
// });

app.listen(3000,(req,res) => {
    // console.log("servidor com express foi carregado");
    console.log(texto);
});