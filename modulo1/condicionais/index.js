// Exercícios de interpretação de código

//Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, 
//pode rodar no seu computador para analisar e pensar sobre o resultado. 

// 1. Leia o código abaixo:

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza?
// RESPOSTA: Ele ta testando se o número inserido pelo usuário é par tesntando se o resto dele é igual a: 0

// b) Para que tipos de números ele imprime no console "Passou no teste"?
// RESPOSTA: Apenas para números pares

//c) Para que tipos de números a mensagem é "Não passou no teste"?
// RESPOSTA: Apenas para números impares


// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// RESPOSTA: Para saber o preço de cada fruta

// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
// RESPOSTA: O preço da fruta Maçã é R$ 2.25

// c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo 
// acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
// RESPOSTA: O preço da fruta Pêra é R$ 5

// 3. Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
// RESPOSTA: está pedindo um número ao usuário atráves do prompt e convertendo a string em number

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// RESPOSTA: para 10: esse número passou no teste // para -10: undefined, por não existir else

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// RESPOSTA: Haverá erro sim, pois a variável foi declarada no escopo da condicional "if", como não tem o "else", não houve nenhum retorno da "mensagem"

//_____________________________________________________________________________________________________________________________________________

// Exercícios de escrita de código

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

//a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

//b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, 
// caso contrário, imprima `"Você não pode dirigir."`



// const perguntaIdade = Number(prompt("Qual a sua idade"))

// function imprimirIdadeMinima(idade) {
//     if (idade >= 18) {
//         console.log("Você pode dirigir!")
//     } else {
//         console.log("Você não pode dirigir!")
//     }
// }
// imprimirIdadeMinima(perguntaIdade)

//---------------------------------------------------------------------------------------------------------------------------------------------

// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// const perguntaTurno = prompt("Qual o turno no qual você estuda? Responda M para matutino, V para vespertino ou N para noturno").toUpperCase()

// if (perguntaTurno === "M") {
//     console.log("Bom dia!")
// } else if (perguntaTurno === "V") {
//     console.log("Boa tarde!")
// } else {
//     console.log("Boa noite!")
// }

//---------------------------------------------------------------------------------------------------------------------------------------------

// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// const perguntaTurno = prompt("Qual o turno no qual você estuda? Responda M para matutino, V para vespertino ou N para noturno").toUpperCase()

// switch (perguntaTurno) {
//     case "M":
//         console.log("Bom dia!")
//         break
//     case "V":
//         console.log("Boa tarde!")
//         break
//     default:
//         console.log("Boa noite!")
//         break
// }

//---------------------------------------------------------------------------------------------------------------------------------------------

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia 
// e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o 
// preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", 
// caso contrário, imprima "Escolha outro filme :("

// const tipoFilme = prompt("O filme é de fantasia?").toLowerCase()
// const valorIngresso = Number(prompt("Qual o valor do ingresso?"))

// if (tipoFilme === "sim" && valorIngresso <= 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }

//_____________________________________________________________________________________________________________________________________________

// Desafios

// 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual 
// lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando 
// [LANCHINHO] pelo que o usuário colocou no input.

// const lanchinho = prompt("Qual lanchinho você vai comprar?")
// const tipoFilme = prompt("O filme é de fantasia?").toLowerCase()
// const valorIngresso = Number(prompt("Qual o valor do ingresso?"))

// if (tipoFilme === "sim" && valorIngresso <= 15) {
//     console.log("Bom filme!\nAproveite seu(a) " + lanchinho)
// } else {
//     console.log("Escolha outro filme :(")
// }

//---------------------------------------------------------------------------------------------------------------------------------------------

// 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer 
// algumas informações:

// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos

// O seu sistema deve solicitar estas informações ao usuário, através do prompt . Além disso, ele deve imprimir tudo isso, junto com o valor de cada 
// ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela 
// com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos,
// mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

// const nomeCompleto = prompt("Qual o seu nome completo?")
// const tipoJogo = prompt("Qual o tipo de jogo desejado? digite IN para internacional ou DO para doméstico")
// const etapaJogo = prompt("Qual a etapa do jogo desejada? digite SF para semi-final, DT para decisão de terceiro lugar e FI para final.")
// const categoria = Number(prompt("Qual a categoria desejada? as opções são: 1, 2, 3 e 4."))
// const quantidadeIngressos = Number(prompt("Quantos ingressos você vai querer?"))



const nomeCompleto = prompt("Qual o seu nome completo?")
const tipoJogo = prompt("Qual o tipo de jogo desejado? digite IN para internacional ou DO para doméstico") 
const etapaJogo = prompt("Qual a etapa do jogo desejada? digite SF para semi-final, DT para decisão de terceiro lugar e FI para final.")
const categoria = Number(prompt("Qual a categoria desejada? as opções são: 1, 2, 3 e 4."))
const quantidadeIngressos = Number(prompt("Quantos ingressos você vai querer?"))



function resultado (tipoJogo, etapaJogo, categoria, quantidadeIngressos) {
    if (tipoJogo === "IN") {
        switch (etapaJogo) {
            case "SF":
                if(categoria === 1){
                    console.log(`Valor ingresso: R$ ${1320 * 4.1}`)
                    console.log(`Valor total: R$ ${1320 * 4.1 * quantidadeIngressos}`)
                } else if(categoria === 2){
                    console.log(`Valor ingresso: R$ ${880 * 4.1}`)
                    console.log(`Valor total: R$ ${880 * 4.1 * quantidadeIngressos}`)
                } else if(categoria === 3){
                    console.log(`Valor ingresso: R$ ${550 * 4.1}`)
                    console.log(`Valor total: R$ ${550 * 4.1 * quantidadeIngressos}`)
                } else if(categoria === 4){
                    console.log(`Valor ingresso: R$ ${220 * 4.1}`)
                    console.log(`Valor total: R$ ${220 * 4.1 * quantidadeIngressos}`)
                } else{
                    console.log("Ingresso indefinido!")
                }
            
    
        
            }}
}
        

console.log(`
        ---Dados da compra---
        Nome do cliente: ${nomeCompleto}
        Tipo do jogo: ${tipoJogo}
        Etapa do jogo: ${etapaJogo}
        Categoria: ${categoria}
        Quantidade de ingressos: ${quantidadeIngressos} ingressos
        ---Valores---`)
        resultado (tipoJogo, etapaJogo, categoria, quantidadeIngressos)
