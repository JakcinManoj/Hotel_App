const { defineConfig } = require("cypress");
module.exports = defineConfig({
projectId: 'Hotel app',
e2e: {
setupNodeEvents(on, config) {
// implement node event listeners here
},
},
});