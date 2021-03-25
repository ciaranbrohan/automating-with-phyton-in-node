const prompt = require('prompt-sync')({sigint: true});
let userName = '';

while (userName === '') {
	let inputName = prompt('Please type your name: ');
	if(inputName != '')
	{
	userName = inputName;	
	console.log(`thanks ${userName}`)
	}
}
