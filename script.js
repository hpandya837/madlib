let adjective = prompt('enter an adjective:')
let noun = prompt('enter an noun:')
let verb = prompt('enter an verb:')
let adverb = prompt('enter an adverb:')

let story = `Once upon a time, in a ${adjective} ${noun}, a ${verb} ${noun} ${adverb} ${verb}`


let madLibOutputDiv = document.querySelector('#madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`