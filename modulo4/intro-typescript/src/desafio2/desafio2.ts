function converterDna(dna: string):string {
    const converter: {[index: string]: string} = {
        A: 'U',
        T: 'A',
        C: 'G',
        G: 'C'
    }
    const rna: string = dna.split('').map((s) => {return converter[s]}).join('')
    
    return rna
}

console.log(converterDna('ATTGCTGCGCATTAACGACGCGTA')) 