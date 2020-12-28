let inputAdultos = document.getElementById("adultos");
let inputCriacas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriacas.value;
    let duracao = inputDuracao.value;
    let carnePP = (duracao);

    let qtdTotalCarne = carnePP(duracao) * adultos * (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * adultos);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} kg de Carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garrafas de bebidas </p>`

    function carnePP(duracao) {
        if (duracao >= 6) {
            return 650;
        } else {
            return 400;
        }
    }

    function cervejaPP(duracao) {
        if (duracao >= 6) {
            return 2000;
        } else {
            return 1200;
        }
    }

    function bebidasPP(duracao) {
        if (duracao >= 6) {
            return 1000;
        } else {
            return 1500;
        }
    }
