const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost",
  },
  fixturesFolder: false, // Evitar que criei a pasta "fixtures" ao rodar cypress open
  video: false, // Desligando a geração de videos dos testes realizados
});
