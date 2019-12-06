class World {
  width = 0
  height = 0

  player = null
  frutis = null
  
  constructor(nome) {
    this.nome = nome
  }
  show() {
    console.log(this.nome)
  }
} 

module.exports = World