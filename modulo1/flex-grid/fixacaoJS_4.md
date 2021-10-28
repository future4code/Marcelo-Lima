```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let numero = 0
  for(i of arrayDeNumeros){
    if(i===numeroEscolhido)
    numero++
  }
  if(numero===0){
    return `Número não encontrado`
  }else{
    return `O número ${numeroEscolhido} aparece ${numero}x`
  }
}
```