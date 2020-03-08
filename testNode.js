var spawn = require('child_process').spawn;

var child = spawn('python', ['test.py']);

child.stdout.on('data', function (data) {   process.stdout.write(data.toString());  });