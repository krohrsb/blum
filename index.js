// Load modules

var blum = require('./lib'),
    argv = require('./lib/cli/argv').argv;


// Run the command-line client

blum.compose(argv);
