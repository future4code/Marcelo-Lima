```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    let salarioFinal = 2000
    salarioFinal = salarioFinal + valorTotalVendas *5/100
        for(let i = 0; i < qtdeCarrosVendidos; i++){
            salarioFinal += 100
        }
  return salarioFinal
}
```