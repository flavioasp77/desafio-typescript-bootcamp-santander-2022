"use strict";
;
var profissao;
(function (profissao) {
    profissao[profissao["padeiro"] = 0] = "padeiro";
    profissao[profissao["atriz"] = 1] = "atriz";
})(profissao || (profissao = {}));
;
const pessoa1 = {};
pessoa1.nome = 'Maria';
pessoa1.idade = 30;
pessoa1.profissao = profissao.atriz;
const pessoa2 = {
    nome: 'Carlos',
    idade: 45,
    profissao: profissao.padeiro
};
console.log(pessoa2);
