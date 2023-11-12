let saldoVitorias = rank(20, 5)
let nivel = level()



function rank(vitorias, derrotas) {
    return vitorias - derrotas
}

function level() {
    levelrank = ""
    if (saldoVitorias <= 10){
        levelrank = "Ferro"
    }
    if (saldoVitorias >= 11 && saldoVitorias <= 20){
        levelrank = "Bronze"
    }
    if (saldoVitorias >= 21 && saldoVitorias <= 50){
        levelrank = "Prata"
    }
    if (saldoVitorias >= 51 && saldoVitorias <= 80){
        levelrank = "Ouro"
    }
    if (saldoVitorias >= 81 && saldoVitorias <= 90){
        levelrank = "Diamante"
    }
    if (saldoVitorias >= 91 && saldoVitorias <= 100){
        levelrank = "Lendário"
    }
    if (saldoVitorias >= 101){
        levelrank = "Imotal"
    }
    return levelrank
}
console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${levelrank}`)