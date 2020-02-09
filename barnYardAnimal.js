function isBarnYardAnimal(animal) {
  const barnYardAnimals = [ '🐑', '🐐', '🐖', '🐄', '🐓' ]

  return barnYardAnimals.includes(animal)
}

module.exports = { isBarnYardAnimal }
