/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// if(confirm(`Você quer jogar o jogo BlackJack?`)){
//    console.log(`Boas vindas ao jogo de Blackjack!!!`)
   
//    // Se o usuário responder Ok, o programa deve iniciar uma nova rodada. 
// } else {
//    console.log(`O jogo acabou!!!`)
// }


// const cartaUsuario = comprarCarta()
// const cartaComputador = comprarCarta()

// console.log(`Usuário - cartas: ${cartaUsuario.texto} - pontuação:  ${cartaUsuario.valor}`)
// console.log(`Usuário - cartas: ${cartaComputador.texto} - pontuação:  ${cartaComputador.valor}`)

// if(cartaUsuario.valor > cartaComputador.valor && cartaUsuario.valor < 22) {
//    console.log(`O usuário venceu!`)
// } else if (cartaComputador.valor > cartaUsuario.valor && cartaComputador.valor < 22){
//    console.log(`O computador venceu!`)
// } else {
//    console.log(`Empatou!`)
// }



if(confirm(`Você quer jogar o jogo BlackJack?`)){
      console.log(`Boas vindas ao jogo de Blackjack!!!`)
   
      // Se o usuário responder Ok, o programa deve iniciar uma nova rodada. 
      const cartaUsuario = comprarCarta()
      const cartaComputador = comprarCarta()

      console.log(`Usuário - cartas: ${cartaUsuario.texto} - pontuação:  ${cartaUsuario.valor}`)
      console.log(`Usuário - cartas: ${cartaComputador.texto} - pontuação:  ${cartaComputador.valor}`)

      if(cartaUsuario.valor > cartaComputador.valor && cartaUsuario.valor < 22) {
            console.log(`O usuário venceu!`)
         } else if (cartaComputador.valor > cartaUsuario.valor && cartaComputador.valor < 22){
            console.log(`O computador venceu!`)
         } else 
            console.log(`Empatou!`) 
} else   {
   console.log(`O jogo acabou!!!`)}