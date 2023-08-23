describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  fit('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function () {
    // teardown logic
    serverNameInput.value = "";
    allServers = {};
    serverId = 0;
  });

});

describe("updateServerTable Function Tests", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "John";
    billAmtInput.value = 1000;
    tipAmtInput.value = 240;
    submitServerInfo();
    submitPaymentInfo();
    serverNameInput.value = "Jane";
    billAmtInput.value = 750;
    tipAmtInput.value = 120;
    submitServerInfo();
    submitPaymentInfo();
    serverNameInput.value = "Alice";
    billAmtInput.value = 400;
    tipAmtInput.value = 90;
  });

  fit('should calculate tipAverage per server', function () {
    submitServerInfo();
    submitPaymentInfo();

    expect(Object.keys(allServers).length).toEqual(3);
    expect(sumPaymentTotal('tipAmt') / Object.keys(allServers).length).toEqual(150);
  });

  afterEach(function () {
    //to clear submitServerInfo()
    serverNameInput.value = "";
    allServers = {};
    serverId = 0;

    //to clear updateServerTable()
    let serverTable = document.getElementById('serverTable');
    serverTable.deleteRow(-1);
    serverTable.deleteRow(-1);
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
    paymentTable.deleteRow(-1);
    paymentTable.deleteRow(-1);

    //to clear updateSummary()
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
  });
});
