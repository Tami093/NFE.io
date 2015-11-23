var assert = require("assert");
var TaxRates = require("../app/taxrates");



describe('Questão Teste ', function() {
    var calc;
    beforeEach(function() {
        calc = new TaxRates({
            PIS: 0.0065,
            COFINS: 0.1,
            CSLL: 0.03,
            IR: 0.08
        });
    });
    it('Receber o valor da nota R$ 1000 e taxas padrão  retornar 80.00 valor do IR com duas casas decimais depois da virgula', function() {
        var resultado = calc.caclIR(1000);
        assert.equal(resultado, 80.00);
    });
    it('Receber o valor da nota R$ 1000.00 retornar  3000*0.08 =240.00 ', function() {
        var resultado = calc.caclIR(3000);
        assert.equal(resultado, 240.00);
    });

    it('Receber o valor da nota R$ 1000.00 e taxa não padrão retornar  1000*0.001 = 0.00 abaixo de  10.00', function() {
        calc.setIR(0.001)
        var resultado = calc.caclIR(1000);
        assert.equal(resultado, 0.00);
    });

    it('Receber o valor da nota R$ 1000 e TxPIS padrão retornar 1000*0.2 = 200 ', function() {
        var resultado = calc.caclPIS(1000);
        assert.equal(resultado, 6.50);
    });
    it('Receber o valor da nota R$ 1000 e TxPIS  naõ padrão 0.05 retornar  1000*0.05 = 50 ', function() {
        calc.setPIS(0.05);
        var resultado = calc.caclPIS(1000);
        assert.equal(resultado, 50);
    });

    it('Receber o valor da nota R$ 2000 e TxPIS padrão retornar  2000*0.01 = 200,00 com duas casas decimais depois da virgula ', function() {
        var resultado = calc.caclPIS(2000);
        assert.equal(resultado, 13.00);
    });

    it('Receber o valor da nota R$ 1000 e TxCofis padrão retornar  1000*0.1 = 100 ', function() {
        var resultado = calc.caclCOFINS(1000);
        assert.equal(resultado, 100);
    });

    it('Receber o valor da nota R$ 2000 e TxCofis padrão retornar  1000*0.1 = 200,00 com duas casas decimais depois da virgula ', function() {
        var resultado = calc.caclCOFINS(2000);
        assert.equal(resultado, 200.00);
    });

    it('Receber o valor da nota R$ 1000 e TxCofis não  padrão 0.08 retornar  1000 * 0.018 = 18.00 ', function() {
        calc.setCOFINS(0.018);
        var resultado = calc.caclCOFINS(1000);
        assert.equal(resultado,18.00);
    });

    it('Receber o valor da nota R$ 2000 e TxPIS padrão retornar  2000*0.03 = 60,00 com duas casas decimais depois da virgula ', function() {
        var resultado = calc.calCSLL(2000);
        assert.equal(resultado, 60.00);
    });


    it('Receber o valor da nota R$ 1000 e TxCSLL padrão retornar  1000*0.03= 30 ', function() {
        var resultado = calc.calCSLL(1000);
        assert.equal(resultado, 30.00);
    });

    it('Receber o valor da nota R$ 1000 e TxCSLL não padrão retornar  1000*0.04 = 40 ', function() {
        calc.setCSLL(0.04)
        var resultado = calc.calCSLL(1000);
        assert.equal(resultado, 40.00);
    });
    it('Receber o valor da nota R$ 5258 e taxas padrão  retornar 5258*0,0065+0,1+0,03=717,72 com duas casas decimais', function() {
        var resultado = calc.PCC(5258);
        assert.equal(resultado, 717.72);
    });

    it('Receber o valor da nota R$ 5258 e taxas padrão retornar 5258*0,0065+0,1+0,03=717,72 o valor do PCC', function() {
        var resultado = calc.PCC(5258);
        assert.equal(resultado, 717.72);
    });

    it('Receber o valor da nota R$ 5000 e taxas padrão  retornar 0.00 valor do PCC abaixo de 5.000.00', function() {
        var resultado = calc.PCC(5000);
        assert.equal(resultado, 0.00);
    });


    it('Receber o valor da nota R$ 5258 e taxas padrão retornar 5258 *0,01+0.0010,0.0065=92.02 valor do PCC ', function() {
        calc.setPIS(0.01);
        calc.setCSLL(0.0010);
        calc.setCOFINS(0.0065);
        var resultado = calc.PCC(5258);
        assert.equal(resultado, 92.02);
    });


});
