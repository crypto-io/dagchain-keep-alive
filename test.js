const test = require('tape');
const alive = require('./index');
test('Publishes & resolves', tape => {
  tape.plan(1);
  alive.default('QmRGE6LpXchjcZM5h6grF7cftqPUho5yw5Uya5M8qQF9KG', {time: 2000, once: true}, (error, published) => {
    if (published.name) {
      tape.ok(true);
    } else {
      tape.fail()
    }
  })

});
