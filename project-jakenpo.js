// Permitir que eu decida quantas rodadas iremos fazer;
// Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
// Decidir de forma aleatória a decisão do computador;
// Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);
// Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;
// Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
// Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
// Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.
const prompt = require('prompt-sync')()

let getChoiceComputer = 0 // escolha computador
let getMyChoices = '' // escolha usuario
let getAskTimes = 0 // numero de partidas 
let countResultUser = 0 // contador de vitorias do ususario
let countResultComputer = 0 // contador de vitorias do computador
let equalResult = 0 // contador de empates
let continueAfterEnd = '' // verifica se usuario deseja continuar a jogar === SIM ou fim de partida diferente de SIM

timesplay() // chama a funcao para iniciar a partida, verifica numero desejado de partidas

function jakenpoo() { // chamada após a funcao timesplay(), responsavel pela sequencia lógica de excução do codigo
  choices()
  choiceComputer()
  comparaResultado()
  imprimiResult()
}

function choices() { // entrada da escolha do ususario e validação da variavel getMyChoices
  getMyChoices = prompt('Digite PEDRA // PAPEL // TESOURA: ')
  if ((getMyChoices.trim().toUpperCase() === 'PEDRA') || (getMyChoices.trim().toUpperCase() === 'PAPEL') || (getMyChoices.trim().toUpperCase() === 'TESOURA')) {
    return getMyChoices.trim().toUpperCase()
  } else {
    console.log(`Opção invalida // Digite as opçoes: PEDRA // PAPEL // TESOURA:`)
    choices() // caso seja diferente das tres opções chama a funcao choices() novamente
  }
}

function choiceComputer() { // escolha aleatória do computador (1,2,3)
  getChoiceComputer = Math.floor(Math.random() * 3) + 1
  return getChoiceComputer
}

function resolveComputador() { // traansforma o resultado da função choiceComputer() em uma string correspondente
  if (getChoiceComputer === 1) {
    return 'PEDRA'
  } else if (getChoiceComputer === 2) {
    return 'PAPEL'
  } else if (getChoiceComputer === 3) {
    return 'TESOURA'
  }
}

function comparaResultado() { // verificar a combinação das escolhas
  if ((getMyChoices.trim().toUpperCase() === 'PEDRA' && getChoiceComputer === 1) || (getMyChoices.trim().toUpperCase() === 'PAPEL' && getChoiceComputer === 2) || (getMyChoices.trim().toUpperCase() === 'TESOURA' && getChoiceComputer === 3)) {
    return 5 // empate
  } else if ((getMyChoices.trim().toUpperCase() === 'PEDRA' && getChoiceComputer === 3) || (getMyChoices.trim().toUpperCase() === 'PAPEL' && getChoiceComputer === 1) || (getMyChoices.trim().toUpperCase() === 'TESOURA' && getChoiceComputer === 2)) {
    return 6 // vitótia usuario
  } else if ((getChoiceComputer === 1 && getMyChoices.trim().toUpperCase() === 'TESOURA') || (getChoiceComputer === 2 && getMyChoices.trim().toUpperCase() === 'PEDRA') || (getChoiceComputer === 3 && getMyChoices.trim().toUpperCase() === 'PAPEL')) {
    return 7 // vitoria computador
  }
}

function imprimiResult() { // relata a pontuação a cada jogada
  if (comparaResultado() === 5) {
    equalResult++
    console.log(`ESCOLHA COMPUTADOR: ${resolveComputador()} -> NUMERO VITÓRIA COMPUTADOR: ${countResultComputer} // ESCOLHA USUÁRIO: ${getMyChoices.trim().toUpperCase()}-> NUMERO VITÓRIA USUARIO: ${countResultUser} // EMPATE: ${equalResult} \n `)

  } else if (comparaResultado() === 6) {
    countResultUser++
    console.log(`ESCOLHA COMPUTADOR: ${resolveComputador()}-> NUMERO VITÓRIA COMPUTADOR: ${countResultComputer} // ESCOLHA USUÁRIO: ${getMyChoices.trim().toUpperCase()}-> NUMERO VITÓRIA USUARIO: ${countResultUser} // EMPATE: ${equalResult} // \n`)

  } else if (comparaResultado() === 7) {
    countResultComputer++
    console.log(`ESCOLHA COMPUTADOR: ${resolveComputador()}-> NUMERO VITÓRIA COMPUTADOR: ${countResultComputer} // ESCOLHA USUÁRIO: ${getMyChoices.trim().toUpperCase()}-> NUMERO VITÓRIA USUARIO: ${countResultUser} // EMPATE: ${equalResult} // \n`)
  }
}

function timesplay() { // 
  getAskTimes = +prompt('Quantas vezes voce deseja jogar? Numero deve ser maior que zero:  ')
  if ((isNaN(getAskTimes) || (getAskTimes < 1))) { // valida a variavel, se não for numero E for menor que 1 chama a função timesplay() 
    timesplay()
  } else {
    for (let i = 0; i < getAskTimes; i++) {
      jakenpoo() // chama a função jakenpoo enquanto a variavel (getAskTimes(vezes do ususario)) > 0
    }
    endGame() // as vezes se esgotaram , mosta o resultado final

    equalResult = 0 // seto com zero os contadores
    countResultUser = 0 // seto com zero os contadores
    countResultComputer = 0 // seto com zero os contadores

    continueAfterEnd = prompt('Deseja continuar ? NAO OU SIM :  ') // verifica se usuario vai continuar
    if (continueAfterEnd.trim().toUpperCase() === 'SIM') {
      console.clear()
      timesplay()
    } else {

      // encerra a partida
    }
  }
}

function endGame() { // exibe o resultado final
  if ((countResultComputer > countResultUser) && ((countResultComputer > equalResult))) {
    console.log(`COMPUTADOR VENCEU - VITÓRIA(s) ${countResultComputer} EM ${countResultComputer + countResultUser + equalResult} RODADAS // CONTRA VITÓRIA(s) USUÁRIO ${countResultUser} // EMPATE(s) ${equalResult} \n`)
  } else if ((countResultUser > countResultComputer) && ((countResultUser > equalResult))) {
    console.log(`USUÁRIO VENCEU - VITÓRIA(s) ${countResultUser} EM ${countResultComputer + countResultUser + equalResult} RODADAS // VITÓRIA(s) ${countResultComputer} DO COMPUTADOR // EMPATE(s) ${equalResult} \n`)
  } else if (countResultUser === countResultComputer) {
    console.log(`EMPATE!! VITÓRIA(s) USUÁRIO: ${countResultUser} // VITÓRIA(s) COMPUTADOR ${countResultComputer} EM ${countResultComputer + countResultUser + equalResult} RODADAS // EMPATE(S) ${equalResult} \n`)
  }
}