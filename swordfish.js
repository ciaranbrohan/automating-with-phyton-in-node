const prompt = require('prompt-sync')({sigint: true});

while(true) { 
	let name = prompt('Who are you? ');
	if(name != 'Joe') continue;
	
	let password = prompt('Hello joe. What is the password? ');
	if(password === 'swordfish')
	{
	console.log('Access Granted');
	break;
	}
}
