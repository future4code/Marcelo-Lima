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

if(confirm(`Você quer jogar o jogo BlackJack?`)){
   console.log(`Boas vindas ao jogo de Blackjack!!!`)

   // Se o usuário responder Ok, o programa deve iniciar uma nova rodada. 
   const carta1Usuario = comprarCarta()
   const carta1Computador = comprarCarta()
   const carta2Usuario = comprarCarta()
   const carta2Computador = comprarCarta()

   const valorUsuario = carta1Usuario.valor + carta2Usuario.valor
   const valorComputador = carta1Computador.valor + carta2Computador. valor

   console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação:  ${valorUsuario}`)
   console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - pontuação:  ${valorComputador}`)

   if(valorUsuario > valorComputador) {
         console.log(`O usuário venceu!`)
      } else if (valorComputador > valorUsuario){
         console.log(`O computador venceu!`)
      } else 
         console.log(`Empatou!`) 
   } else   {
   console.log(`Boas vindas ao jogo de Blackjack!!!`)
   console.log(`O jogo acabou!!!`)
}