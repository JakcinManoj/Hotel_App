const assert = require('assert');
const net = require('net');

describe('Application Port Test', function() {
  it('should check if application is running on port 9000', function(done) {
    const port = 7000;
    const server = net.createServer();

    server.once('error', function(err) {
      if (err.code === 'EADDRINUSE') {
        assert.fail(`Port ${port} is already in use. Application is not running on this port.`);
      } else {
        assert.fail(`Error occurred while checking port ${port}: ${err}`);
      }
      done();
    });

    server.once('listening', function() {
      server.close();
      assert.ok(true, `Application is running on port ${port}`);
      done();
    });

    server.listen(port);
  });
});
