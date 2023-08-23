describe('sumbitPaymentInfo Function test', function () {

    beforeEach(function () {
        billAmt = 1000;
        tipAmt = 250;
    });

    it('should ')

    afterEach(function () {
        billAmt = "";
        tipAmt = "";
    });

});

describe('createCurPayment Function test', function () {

    beforeEach(function () {
        // initialization logic
        billAmtInput.value = 900;
        tipAmtInput.value = 240;
    });

    fit('should return bill amount', function () {
        let result = createCurPayment();
        expect(+result['billAmt']).toEqual(900);
    });

    fit('should return tip amount', function () {
        let result = createCurPayment();
        expect(+result['tipAmt']).toEqual(240);
    });

    fit('should return tip percent', function () {
        let result = createCurPayment();
        expect(+result['tipPercent']).toEqual(Math.round((240 / 900) * 100));
    });

    afterEach(function () {
        billAmtInput.value = "";
        tipAmtInput.value = "";
        allPayments = {};
        paymentId = 0;
    });

});

describe('appendPaymentTable Function test', function () {

    beforeEach(function () {

    });



    afterEach(function () {

    });

});

describe('updateSummary Function test', function () {

    beforeEach(function () {
        //updateSummary is run insdie the submitPaymentInfo function

    });

    fit('should have tipPercentAvg equal zero', function () {
        allPayments = {};
        expect(summaryTds[2].innerHTML).toEqual('0%');
    });

    fit('should have tipPercentAvg not equal 0', function () {
        billAmtInput.value = 500;
        numberOfPayments = 6;
        submitServerInfo();
        submitPaymentInfo();
        expect(summaryTds[2].innerHTML).toEqual('83%');
    });

    afterEach(function () {
        billAmtInput.value = "";
        allPayments = {};
    });
});