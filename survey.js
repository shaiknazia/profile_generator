const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :)`, (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);
  rl.question(`What's an activity you like doing?`, (answer2) => {
    console.log(`Thank you for your valuable feedback: ${answer2}`);
    rl.question(`What's your favourite thing to eat for that meal?`, (answer3) => {
      console.log(`Thank you for your valuable feedback: ${answer3}`);
      rl.question(`What do you listen to?`, (answer4) => {
        console.log(`Thank you for your valuable feedback: ${answer4}`);
        rl.question(`WWhich meal is your favourite (eg: dinner, brunch, etc.?`,(answer5) => {
          console.log(`Thank you for your valuable feedback: ${answer5}`);
          rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer6) => {
            console.log(`Thank you for your valuable feedback: ${answer6}\n`);
            rl.write(`${answer1} loves listening to ${answer4}, devouring ${answer3} for brunch, prefers ${answer2} over any other sport, and is amazing at ${answer6} at inopportune times.\n`);
            rl.close();
          });
        });
      });
    });
  });
});
