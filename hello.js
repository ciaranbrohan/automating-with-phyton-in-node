// program says hello and asks for my name

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Hello, world');

rl.question("What is your name ? ", function(name) { 
	console.log(`It's good to meet you ${name}`)
	console.log(`The length of your name is ${name.length}`)
	rl.question("What is your age? ", function(age) { 
        	console.log(`${age}`)
        	console.log(`You will be ${parseInt(age)+1} in a year`)
        	rl.close();
	})
})

