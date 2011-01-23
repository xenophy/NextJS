var Client = require('mysql').Client,
    client = new Client(),
    TEST_DATABASE = 'nextjs',
    TEST_TABLE = 'test';

client.user = 'root';
client.password = 'root';

try {
client.connect();

client.query('CREATE DATABASE '+TEST_DATABASE, function(err) {
  if (err && err.number != Client.ERROR_DB_CREATE_EXISTS) {
    throw err;
  }
});

// If no callback is provided, any errors will be emitted as `'error'`
// events by the client
client.query('USE '+TEST_DATABASE);

client.query(
  'SELECT * FROM '+TEST_TABLE,
  function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }

    console.log(results);
    console.log(fields);
    client.end();
  }
);
} catch(e) {
console.log("dsads");

}
