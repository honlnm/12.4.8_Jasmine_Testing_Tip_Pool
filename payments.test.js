describe('sumbitPaymentInfo Function test', function () {

    beforeEach(function () {
        serverNameInput.value = "John";
        billAmtInput.value = 1000;
        tipAmtInput.value = 240;
    });

    fit('should log new value in allPayments array', function () {
        submitServerInfo();
        submitPaymentInfo();
        expect(allPayments[payment1]).toEqual(createCurPayment());
    });

    afterEach(function () {
        serverNameInput.value = "";
        allServers = {};
        serverId = 0;

        //to clear updateServerTable()
        let serverTable = document.getElementById('serverTable');
        serverTable.deleteRow(-1);

        //to clear submitPaymentInfo()
        billAmtInput.value = "";
        tipAmtInput.value = "";
        allPayments = {};

        allPayments = {};
        paymentId = 0;

        //to clear appendPaymentTable
        let paymentTable = document.getElementById('paymentTable');
        paymentTable.deleteRow(-1);

        //to clear updateSummary()
        summaryTds[0].innerHTML = "";
        summaryTds[1].innerHTML = "";
        summaryTds[2].innerHTML = "";
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
        //appendPaymentTable(curPayment) is run insdie the submitPaymentInfo function
        serverNameInput.value = "John";
        billAmtInput.value = 1000;
        tipAmtInput.value = 240;
    });

    fit('should make one new table row in Payment Table', function () {
        submitServerInfo();
        submitPaymentInfo();
        const paymentTable = document.getElementById('paymentTable');
        const rows = paymentTable.rows.length;
        //reminder that the header row is still a row
        expect(+rows).toEqual(2);
    });

    afterEach(function () {
        serverNameInput.value = "";
        allServers = {};
        serverId = 0;

        //to clear updateServerTable()
        let serverTable = document.getElementById('serverTable');
        serverTable.deleteRow(-1);

        //to clear submitPaymentInfo()
        billAmtInput.value = "";
        tipAmtInput.value = "";
        allPayments = {};

        allPayments = {};
        paymentId = 0;

        //to clear appendPaymentTable
        let paymentTable = document.getElementById('paymentTable');
        paymentTable.deleteRow(-1);

        //to clear updateSummary()
        summaryTds[0].innerHTML = "";
        summaryTds[1].innerHTML = "";
        summaryTds[2].innerHTML = "";
    });

});

describe('updateSummary Function test', function () {

    beforeEach(function () {
        //updateSummary is run insdie the submitPaymentInfo function
        serverNameInput.value = "John";
        billAmtInput.value = 1000;
        tipAmtInput.value = 240;
    });

    fit('should have tipPercentAvg not equal 0', function () {
        submitServerInfo();
        submitPaymentInfo();
        expect(summaryTds[2].innerHTML).toEqual('24%');
    });

    afterEach(function () {
        //to clear submitServerInfo()
        serverNameInput.value = "";
        allServers = {};
        serverId = 0;

        //to clear updateServerTable()
        let serverTable = document.getElementById('serverTable');
        serverTable.deleteRow(-1);

        //to clear submitPaymentInfo()
        billAmtInput.value = "";
        tipAmtInput.value = "";
        allPayments = {};

        allPayments = {};
        paymentId = 0;

        //to clear appendPaymentTable
        let paymentTable = document.getElementById('paymentTable');
        paymentTable.deleteRow(-1);

        //to clear updateSummary()
        summaryTds[0].innerHTML = "";
        summaryTds[1].innerHTML = "";
        summaryTds[2].innerHTML = "";
    });
});