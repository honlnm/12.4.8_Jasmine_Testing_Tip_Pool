describe('sumPaymentTotal funciton test', function () {

    beforeEach(function () {

    });

    fit('should return zero', function () {
        billAmtInput.value = 0;
        tipAmtInput.value = 0;
        submitPaymentInfo();
        expect(sumPaymentTotal(billAmt)).toEqual(0);
        expect(sumPaymentTotal(tipAmt)).toEqual(0);
    });

    afterEach(function () {
        allPayments = {};
        total = 0;
    });

});