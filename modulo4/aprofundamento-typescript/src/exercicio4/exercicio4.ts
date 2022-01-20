
type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b)  Como você faria, já com a extensão instalada, para transpilar(converter) 
// esse arquivo typescript em um arquivo javascript?

// R: no arquivo package.json colocaria na parte de scripts o "exercicio-4": "tsc && node ./build/exercicio-4/exercicio-4.js",
// depois executaria o comando npm run exercicio-4

