let assert = require("chai").assert;
describe("Calcula Porcentagem Sorteio", function () {
  it("Teste Assinante E Nao Assinante", function () {
    assert.deepEqual(
      calculaPorcentagemSorteio([true, false], [60, 120]),
      [50, 50]
    );
  });
});
