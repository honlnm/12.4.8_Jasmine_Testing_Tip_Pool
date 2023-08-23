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

//calculateTipPercent already tested with createCurPayment tests in payments.test.js

describe('appendDeleteBtn function test', function () {

    beforeEach(function () {
        serverNameInput.value = "John";
    });

    fit('should return new td with text of X', function () {
        submitServerInfo();
        let serverRow = document.getElementById('serverTable').rows[1];
        expect(serverRow.cells.length).toEqual(3);
        expect(serverRow.cells[2].innerText).toEqual('X');
    });

    afterEach(function () {
        serverNameInput.value = "";
        allServers = {};
        serverId = 0;

        //to clear updateServerTable()
        let serverTable = document.getElementById('serverTable');
        serverTable.deleteRow(-1);
    });
});