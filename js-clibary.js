let figlet = require('figlet')
let chalk = require('chalk')

function printSplashScreen(callback) {
  figlet.text('Bitvision', {
    font: 'Univers',
    horizontalLayout: 'default',
    verticalLayout: 'default'
  }, function(err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(chalk.blue.bold(data));
    console.log(chalk.red.bold("Written by Jon Shobrook"), chalk.blue("(https://github.com/shobrook)"), chalk.red.bold("and Aaron Lichtman"), chalk.blue("(https://github.com/alichtman)"))
    console.log(chalk.red.bold("Source code:"), chalk.blue("https://github.com/shobrook/BitVision"), "\n")
    callback()
  })

}

