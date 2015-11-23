var assert = require("assert");
var Invoice = require("../app/invoince");


describe('Teste Invoice', function() {
    var calc;
    beforeEach(function() {
        calc = new Invoice();
    });

    it('Receber os valores R$ 5800,00 e taxas padrao retornar 356.70 total de imposta a pagar,', function() {
        var resultado = calc.sumTax(5800);
        assert.equal(resultado, 356.70);
    });

    it('Receber os valores R$ 1300,00 e taxas padrao retornar 19.50 total de imposta a pagar,', function() {
        var resultado = calc.sumTax(1300);
        assert.equal(resultado, 19.50);
    });

    it('Receber um valor 5000.00  e taxa padrão retornar COFINS:0.00,CSLL:0.00,IR:75.00,PCC:0.00,PIS:0.00,SOMA:75.00,VALOR :5000.00, VALOR A RECEBER:4925.00', function() {
        var resultado = calc.Invoice(5000);
        //console.log(resultado)
        assert.deepEqual(resultado, {
            'PIS RETIDO': "0.00",
            'COFINS RETIDO': "0.00",
            'CSLL RETIDO': '0.00',
            'IR RETIDO': "75.00",
            PCC: "0.00",
            'RETENCAO': "75.00",
            VALOR: "5000.00",
            'TOTAL NOTA': "4925.00"
        });
    });
    it('Receber um valor 5800.00  e taxa padrão retornar COFINS:0.00,CSLL:0.00,IR:75.00,PCC:0.00,PIS:0.00,SOMA:75.00,VALOR :5000.00, VALOR A RECEBER:4925.00', function() {
        var resultado = calc.Invoice(5800);
        //console.log(resultado)
        assert.deepEqual(resultado, {
            'PIS RETIDO': "37.70",
            'COFINS RETIDO': "174.00",
            'CSLL RETIDO': '58.00',
            PCC: "269.70",
            'IR RETIDO': "87.00",
            'RETENCAO': "356.70",
            VALOR: "5800.00",
            'TOTAL NOTA': "5443.30"
        });
    });

    it('Receber um valor 5800.00  e taxa não padrão retornar PIS RETIDO: 116.00,COFINS RETIDO: 232.00,CSLL RETIDO: 40.60, PCC: "388.60",IR RETIDO: 58.00,RETENCAO: 446.60, VALOR: 5800.00,TOTAL NOTA: 5353.40', function() {

        calc.setPIS(0.02);
        calc.setCOFINS(0.04);
        calc.setCSLL(0.007);
        calc.setIR(0.010);
        var resultado = calc.Invoice(5800);
        console.log(resultado)
        assert.deepEqual(resultado, {
            'PIS RETIDO': "116.00",
            'COFINS RETIDO': "232.00",
            'CSLL RETIDO': '40.60',
            PCC: "388.60",
            'IR RETIDO': "58.00",
            'RETENCAO': "446.60",
            VALOR: "5800.00",
            'TOTAL NOTA': "5353.40"
        });
    });



});
