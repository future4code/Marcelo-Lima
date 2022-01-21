// PRE HISTORIA = ANTES DE 4000 AC
// IDADE ANTIGA = 4000 AC ATÉ 476 DC
// IDADE MEDIA = 476 DC ATÉ 1453 DC 
// IDADE MODERNA = 1453 DC ATÉ 1789 DC
// IDADE CONTEMPORÂNEA = 1789 ATÉ AGORA

enum Ano {
    AC = 'ac',
    DC = 'dc'
}

type Epoca = { ano: number, epoca: string | undefined }

const epoca: Epoca = {
    ano: -4000,
    epoca: ''
}

function qualAno(epoca: Epoca):void {

    if (epoca.ano > 0 && epoca.epoca === '' ||
        epoca.ano > 0 && epoca.epoca === Ano.DC.toLowerCase() ||
        epoca.ano < 0 && epoca.ano >= -4000 && epoca.epoca === '' ||
        epoca.ano < 0 && epoca.ano >= -4000 && epoca.epoca === Ano.AC.toLowerCase()) {
        if (epoca.ano >= -4000 && epoca.ano < 476) {
            console.log('Idade antiga')
        } else if (epoca.ano >= 476 && epoca.ano < 1453) {
            console.log('Idade média')
        } else if (epoca.ano >= 1453 && epoca.ano < 1789) {
            console.log('Idade moderna')
        } else if (epoca.ano >= 1789) {
            console.log('Idade contemporânea')
        }
    } else if (epoca.ano < -4000 && epoca.epoca === '' || epoca.ano < -4000 && epoca.epoca === Ano.AC.toLowerCase()) {
        console.log('Pré-história')
    } else {
        console.log('Algum parâmetro faltando ou errado')
    }
}

qualAno(epoca)