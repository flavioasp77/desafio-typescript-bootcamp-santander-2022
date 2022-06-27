interface IPessoa {
  nome: string;
  idade: number;
  profissao: profissao
};

enum profissao {
  padeiro,
  atriz
};

const pessoa1 = {} as IPessoa;
pessoa1.nome = 'Maria';
pessoa1.idade = 30;
pessoa1.profissao = profissao.atriz;

const pessoa2: IPessoa = {
  nome: 'Carlos',
  idade: 45,
  profissao: profissao.padeiro
};

console.log(pessoa2);
