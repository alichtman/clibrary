let figlet = require('figlet')
let chalk = require('chalk')
let inquirer = require('inquirer')

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

function getLoginInfo() {
  inquirer.prompt([
  {
    type: 'input',
    name: 'key',
    message: "What's your Coinbase Pro key?",
    validate: function(value) {
      return validateInput(value)
    }
  },
  {
    type: 'input',
    name: 'secret',
    message: "What's your Coinbase Pro secret?",
    validate: function(value) {
      return validateInput(value)
    }
  },
  {
    type: 'input',
    name: 'passphrase',
    message: "What's your Coinbase Pro passphrase?",
    validate: function(value) {
      return validateInput(value)
    }
  }
  ]).then(answers => {
  // TODO: Store answers["key"], answers["secret"], answers["passphrase"] in "~/.BitVision"
  console.log(answers)
});
}

