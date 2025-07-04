
const fs = require('fs');

expect([26, 27]).toContain(output.length);

// check relative asset references worked out
expect(fs.readFileSync(__dirname + "/dist/modules/main.js").toString()).toContain(`ab+"asset`);
expect(fs.readFileSync(__dirname + "/dist/modules/chunk.js").toString()).toContain(`ab+"asset`);
expect(fs.readFileSync(__dirname + "/dist/modules/chunks/758.js").toString()).toContain(`ab+"asset`);
expect(fs.readFileSync(__dirname + "/dist/modules/chunks/151.js").toString()).toContain(`ab+"asset`);
