function TaxRates(config) {
    config = config || {};
    this.PIS = config.PIS || 0;
    this.COFINS = config.COFINS || 0;
    this.CSLL = config.CSLL || 0;
    this.IR = config.IR || 0;
}
module.exports = TaxRates;
TaxRates.prototype.caclIR = function(value) {
    if (value * this.IR > 10) {
        var irWithheld = value * this.IR;
    } else
        return 0;
    return irWithheld.toFixed(2);
}
TaxRates.prototype.caclPIS = function(value) {
    return (value * this.PIS).toFixed(2);
}
TaxRates.prototype.caclCOFINS = function(value) {
    return (value * this.COFINS).toFixed(2);
}
TaxRates.prototype.calCSLL = function(value) {
    return (value * this.CSLL).toFixed(2);
}
TaxRates.prototype.PCC = function(value) {
    var pisWithheld;
    var cofinsWithheld;
    var csllWithheld
    var result;
    if (value > 5000) {
        pisWithheld = parseFloat(this.caclPIS(value));
        cofinsWithheld = parseFloat(this.caclCOFINS(value));
        csllWithheld = parseFloat(this.calCSLL(value));
        var taxes = pisWithheld + cofinsWithheld + csllWithheld;
        result = taxes.toFixed(2);
    } else
        return 0
    return result;
}
/* modificadores */
TaxRates.prototype.setPIS = function(value) {
    this.PIS = value;
}
TaxRates.prototype.setCOFINS = function(value) {
    this.COFINS = value;
}
TaxRates.prototype.setCSLL = function(value) {
    this.CSLL = value;
}
TaxRates.prototype.setIR = function(value) {
    this.IR = value;
}
