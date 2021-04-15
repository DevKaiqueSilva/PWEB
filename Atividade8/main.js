var ra = 0030481913024;
var nome = "Kaique Souza Silva";
// PRIMEIRO FORMA
var obj1 = new Object();
obj1["ra"] = ra;
obj1["nome"] = nome;
console.log(obj1);

// SEGUNDA FORMA
var obj2 = {
    ra: ra,
    nome: nome
};
console.log(obj2);

// TERCEIRA FORMA
var obj3 = {};
var nome_prop = "nome";
var ra_prop = "ra";
obj3[nome_prop] = nome;
obj3[ra_prop] = ra;
console.log(obj3);

//QUARTA FORMA 
var obj4 = {};
obj4.ra = ra;
obj4.nome = nome;
console.log(obj4);