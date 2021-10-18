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

// let cartasUsuario = []
// let cartasComputador = []
// if(confirm(`Você quer jogar o jogo BlackJack?\nQuer começar uma rodada?`)) {
//    for(let i = 0; i< 2; i++){
//       cartasUsuario.push(comprarCarta())
//       cartasComputador.push(comprarCarta())
//    }
//    while(cartasUsuario[0].valor + cartasUsuario[1].valor === 22  && cartasComputador[0].valor + cartasComputador[1].valor === 22){
//       cartasUsuario = []
//       cartasComputador = []
//       for (let i = 0; i < 2; i++){
//          cartasUsuario.push(comprarCarta())
//          cartasComputador.push(comprarCarta())
//       }
//    }
//    if(confirm(`Suas cartas são ${cartasUsuario[0].texto} ${cartasUsuario[1].texto}. A carta revelada do computador é ${cartasComputador[0].texto}\nDeseja comprar mais uma carta?`)){
//       for(let i = 0; i< 1; i++){
//          cartasUsuario.push(comprarCarta())
//       } 
//    } else (alert(`Suas cartas são ${cartasUsuario[0].texto} ${cartasUsuario[1].texto}. sua pontuação é ${cartasUsuario[0].valor + cartasUsuario[1].valor}\nAs cartas do computador são ${cartasComputador[0].texto} ${cartasComputador[1].texto}. A pontuação do computador é ${cartasComputador[0].valor + cartasComputador[1].valor}\n`))
// }

// console.log(cartasUsuario)