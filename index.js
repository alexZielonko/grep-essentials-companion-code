const { isTree } = require('./trees')
const { isLeaf } = require('./leaves')
const { isBarnYardAnimal } = require('./barnYardAnimal')

console.log(`\nIs 🌲 a tree? ${ isTree('🌲') }`) // true
console.log(`Is 🍂 a tree? ${ isTree('🍂') }`) // false
console.log(`Is 🐄 a tree? ${ isTree('🐄') }\n`) // false
console.log(`Is 🌲 a leaf? ${ isLeaf('🌲') }`) // false
console.log(`Is 🍂 a leaf? ${ isLeaf('🍂') }`) // true
console.log(`Is 🐄 a leaf? ${ isLeaf('🐄') }\n`) // false
console.log(`Is 🌲 a barn yard animal? ${ isBarnYardAnimal('🌲') }`) // false
console.log(`Is 🍂 a barn yard animal? ${ isBarnYardAnimal('🍂') }`) // false
console.log(`Is 🐄 a barn yard animal? ${ isBarnYardAnimal('🐄') }\n`) // true
