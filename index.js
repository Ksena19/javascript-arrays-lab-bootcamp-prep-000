const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
   kittens.push(name)
   return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
kittens.unshift(name);
  return kittens
}

function prependKitten(name) {
var newKittens = [ ...kittens, name];
  return kittens
}

function removeLastKitten() {
   var newKittens = kittens.slice(0, kittens.length - 1);
    return kittens
}

function removeFirstKitten() {
   var newKittens = kittens.slice(1);
  return kittens
}
