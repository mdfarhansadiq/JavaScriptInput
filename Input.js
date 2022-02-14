/// *******In the name of Allah*******;

var readline = require('readline');

var rl = readline.createInterface(
	process.stdin, process.stdout);

rl.question('', (test) => {
    while(test--)
        console.log('786');
  
    rl.close(); ///close to take input
});
