
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

//create a 'td' with the value 'X'. When clicked it will delete the table row it belongs to
function appendDeleteBtn(tr) {
  let newBtn = document.createElement('td');
  newBtn.setAttribute('class', 'deleteBtn');
  newBtn.innerText = "X";
  tr.append(newBtn);
};

let serverTable = document.getElementById('serverTable');
serverTable.addEventListener('click', deleteServer);

function deleteServer(evt) {
  if (evt) evt.preventDefault();
  if (evt.target.className === 'deleteBtn') {
    const btnParent = evt.target.closest('tr');
    const idx = btnParent.rowIndex;
    serverTable.deleteRow(idx);
  };
};


