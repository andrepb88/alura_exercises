const idade = 28;
const pi = 3.14;

var a = 10;
var b = 0;
console.log(a/b); // Infinity

var a = 0;
var b = 0;
console.log(a/b); // NaN

/* function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes);

    return Math.round(salarioHora);

  }

console.log(ganhoPorHora(3150, 160)); */

/* function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes);

    const total = salarioHora.toFixed(2);

    return total;

  }

console.log(ganhoPorHora(3150, 160)); */

function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes);

    const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return formatado;

  }

  console.log(ganhoPorHora(3150, 160));
