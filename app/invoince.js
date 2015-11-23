function Invoice() {
    this.TotalInvoice = {};
}
module.exports = Invoice;
var taxrates = require('./taxrates');
var calcTx = new taxrates({
    IR: 0.015,
    PIS: 0.0065,
    COFINS: 0.03,
    CSLL: 0.01
});
Invoice.prototype.sumTax = function(value) {
    var ir = parseFloat(calcTx.caclIR(value));
    var pcc = 0;

    if (value <= 5000) {
        this.TotalInvoice['PIS RETIDO'] = (0).toFixed(2);
        this.TotalInvoice['COFINS RETIDO'] = (0).toFixed(2);
        this.TotalInvoice['CSLL RETIDO'] = (0).toFixed(2);
        this.TotalInvoice['PCC'] = pcc.toFixed(2);
    } else {
        pcc = parseFloat(calcTx.PCC(value));
        this.TotalInvoice['PIS RETIDO'] = (value * parseFloat(calcTx.PIS)).toFixed(2);
        this.TotalInvoice['COFINS RETIDO'] = (value * parseFloat(calcTx.COFINS)).toFixed(2)
        this.TotalInvoice['CSLL RETIDO'] = (value * parseFloat(calcTx.CSLL)).toFixed(2)
        this.TotalInvoice['PCC'] = pcc.toFixed(2);
    }
  
    var sum = (pcc + ir).toFixed(2)
    this.TotalInvoice['IR RETIDO'] = (value * calcTx.IR).toFixed(2);
    

    this.TotalInvoice['VALOR'] = value.toFixed(2);
    this.TotalInvoice['RETENCAO'] = sum;
    this.TotalInvoice['TOTAL NOTA'] = (value - sum).toFixed(2);

    return sum;
};
Invoice.prototype.print = function() {
    return this.TotalInvoice;
}
Invoice.prototype.Invoice = function(value) {
    var sum = this.sumTax(value);
    var print = this.print();
    return print;
}
Invoice.prototype.setPIS = function(value) {
  return calcTx.setPIS(value);
};

Invoice.prototype.setCOFINS = function(value) {
  return calcTx.setCOFINS(value);
};

Invoice.prototype.setCSLL = function(value) {
  return calcTx.setCSLL(value);
};

Invoice.prototype.setIR = function(value) {
  return calcTx.setIR(value);
};
