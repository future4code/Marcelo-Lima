
const num1: number = Number(process.argv[2])
const num2: number = Number(process.argv[3])

function results ():number[]{
    const soma: number = num1 + num2
    const sub: number = num1 - num2
    const mult: number = num1 * num2
    let comparar: number;
    if(num1 > num2){
        comparar = num1
    }else{
        comparar = num2
    }
    return [soma, sub, mult, comparar]
}

console.log(results())