function word(word: string): number {
    const wordArray = word.split('')

    let letters = word.length

    for (let i = wordArray.length; i > 1; i--) {
        letters = letters * (i - 1)
    }

    return letters
}

console.log(word('marcelo'))