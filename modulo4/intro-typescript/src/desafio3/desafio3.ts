function reverter (texto: string):void {
    const revertido = texto.split('').reverse().join('')

  console.log(revertido)
}

reverter('abcd')