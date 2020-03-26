var quotes = ['NOOOOOOOOOOOOO',
	'Nolan',
	'Nop',
	'No, malparido',
	'¿preguntas lo mismo en día de elecciones?',
	'que no care verga',
	'no entiendes que no carita e verga',
	'jodaaaa loco que no',
	'hey malparido tú no entiendes o que',
	'al patio es que vas a ir care mondá',
	'cole que no, no entiendes',
	'deja el azare y entiende que no',
	'care mondá NO PUEDES SALIR',
	'¿qué mondá vas a buscar en la calle?',
	'oye care verga no puedes salir',
	'obvio no bobo',
	'sí, si calle = cama. care trola',
	'no, no y no boca e verga',
	'oye que no eche',
	'eche y es que no entiendes que no',
	'no cole, no',
	'tú si eres pata e perro pero no puedes salir',
	'NOOOOOOOO eche',
	'eche que no',
	'nojodaaaaaaaa que no',
	'hey no puedes salir en esa mondá',
	'SIIIIIIIIgue creyendo bobo hp',

]


function newQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
		document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

}
