var timeHr = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
//var places = [];
function Store(name, minHr, maxHr, avgCups, pounds) {
  this.loc = name;
  this.minHr = minHr;
  this.maxHr = maxHr;
  this.avgCups = avgCups;
  this.pounds = pounds;
  this.hourlyCust = [];
  this.hourlyCups = [];
  this.cupsBeansLbs = [];
  this.totalBeans = [];
  this.go = [];
  this.combined = 0;
  this.hourlyCustomers = function() {
    for (var i = 0; i < timeHr.length; i++){
      this.hourlyCust[i] = (Math.floor((Math.random() * (this.maxHr - this.minHr + 1)) + this.minHr));
      }
    };

this.generateHourlyCups = function() {    //main method that calculates
  this.hourlyCustomers();
    for (var i = 0; i < timeHr.length; i++) {
      this.hourlyCups[i] = Math.floor(this.avgCups * this.hourlyCust[i]);
      this.cupsBeansLbs[i] = (this.hourlyCups[i] / 20);
      this.go[i] = this.hourlyCust[i] * this.pounds;
      this.totalBeans[i] = this.go[i] + this.cupsBeansLbs[i];
      }
      this.totalTotals();
    };
  this.totalTotals = function() {
    for ( var i = 0; i < timeHr.length; i++) {
      this.combined += Math.round(this.totalBeans[i]);
      }
    }
    // places.push(this);
  }
  var pike = new Store('PIKE PLACE', 14, 55, 1.2, 3.7);
  var hill = new Store('CAP HILL', 32, 48, 3.2, 0.4);
  var library = new Store('LIBRARY', 49, 75, 2.6, 0.2);
  var lake = new Store('SLU', 35, 88, 1.3, 3.7);
  var air = new Store('SEATAC', 68, 124, 1.1, 2.7);
  var site = new Store('WEB', 3, 6, 0, 6.7);
  var places = [pike, hill, library, lake, air, site];

  var section = document.getElementById('table');
  var table = document.createElement('table');

  var createTable = function() {
    var times = ['LOCATION', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', 'TOTAL']
    var row1 = document.createElement('tr');

    for (var i = 0; i < times.length; i++) {
      var tableHead = document.createElement('th');
      tableHead.id="tableHead";
      tableHead.textContent = times[i];
      row1.appendChild(tableHead);
    }
    table.appendChild(row1);

    for (var m = 0; m < places.length; m++) {
      places[m].generateHourlyCups();
      var row2 = document.createElement('tr');
      row2.id="row2";
      var pl = document.createElement('th');
      pl.id="pl";
      pl.textContent = places[m].loc;
      row2.appendChild(pl);

    for (var p = 0; p < timeHr.length; p++) {
      var allTotals = document.createElement('td');
      allTotals.textContent = places[m].totalBeans[p].toFixed(1);
      row2.appendChild(allTotals);
      }
      var allTotals = document.createElement('td');
      allTotals.textContent = places[m].combined;
      row2.appendChild(allTotals);

      table.appendChild(row2);
    }
    section.appendChild(table);
}
createTable();

function createNewRow(newSubmission) {
  var row2 = document.createElement('tr');
  var pl = document.createElement('th');
  pl.textContent = places[places.length-1].loc;
  pl.id="tableHead";
  row2.appendChild(pl);
  for (var p = 0; p < timeHr.length; p++) {
    var allTotals = document.createElement('td');
    allTotals.textContent = places[places.length-1].totalBeans[p];
    row2.appendChild(allTotals);
  }
  var allTotal = document.createElement('td');
  allTotal.textContent = places[places.length-1].combined;
  row2.appendChild(allTotal);
  table.appendChild(row2);
  section.appendChild(table);
}

//var dataForm = document.getElementById('dataForm');

function submissionForm(event) {
  event.preventDefault();

  var newName = event.target.co.value;
  var newMin = event.target.min.value;
  var newMax = event.target.max.value;
  var newAvg = event.target.cups.value;
  var newLbs = event.target.lbs.value;

  var newSubmission = new Store(newName, parseInt(newMin), parseInt(newMax), parseInt(newAvg), parseInt(newLbs));
  //newSubmission.generateHourlyCups();

  newSubmission.generateHourlyCups();
  places.push(newSubmission);
  createNewRow(newSubmission);
  //createTable();
  }
dataForm.addEventListener('submit', submissionForm);
