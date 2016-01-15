//THIS IS MY OBJECT CONSTRUCTION MODEL
var storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];


function setting(place, minCust, maxCust, cupsCust, lbsCust) {
  this.place = place;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cupsCust = cupsCust;
  this.lbsCust = lbsCust;

  this.randomCustomers = [];
  this.totalPounds = [];
  this.cups = [];
  this.cupLbs = [];
  this.toGoLbs = [];

//   this.dailyTotalLbs = 0;

//
//     this.amountOfCustomers = function() {
//       for (var i = 0; i < storeHours.length; i++) {
//         var randCust = ((Math.random() * (maxCust - minCust + 1)) + minCust);
//         this.randomCustomers[i] = randCust.toFixed(1);
//     };
//       this.hourlyCupsTotal = function() {
//         for (var j = 0; j < storeHours.length; j++) {
//           var totalCups = randCust * cupsCust;
//           this.cups[j] = totalCups.toFixed(1);
//           }
//         };
//     this.hourlyCupsLbsTotal = function() {
//       for (var k = 0; k < storeHours.length; k++) {
//         var totalCupsLbs = totalCups / 20;
//         this.cupLbs[k] = totalCupsLbs.toFixed(1);
//         }
//       }
//     this.hourlyToGoLbsTotal = function() {
//       for (var l = 0; l < storeHours.length; l++) {
//         var totalToGoLbs = randCust * lbsCust;
//         this.toGoLbs[l] = totalToGoLbs.toFixed(1);
//         }
//       };
//     this.hourlyLbsTotal = function() {
//       for (var m = 0; m < storeHours.length; m++) {
//         var overallLbs = totalCupLbs + totalToGoLbs;
//         this.totalPounds[m] = overallLbs.toFixed(1);
//         }
//       };
//   this.amountOfCustomers();
//   this.hourlyCupsTotal();
//   this.hourlyCupsLbsTotal();
//   this.hourlyToGoLbsTotal();
//   this.hourlyLbsTotal();
// };
//
//
// var tableBg = document.createElement('section');
// tableBg.id = "tablebg";
// document.body.appendChild(tableBg);
//
// var tableBody = document.createElement('section');
// tableBody.id = "tablebody";
// tableBg.appendChild(tableBody);
//
// var table = document.createElement('table');
// tableBody.appendChild(table);
//
// var row1 = document.createElement('tr');
// table.appendChild(row1);
//
// var emptyCell = document.createElement('td');
// emptyCell.id = "cornercell";
// row1.appendChild(emptyCell);
//
// var tableTitle = document.createElement('td');
// tableTitle.id = "tablehead";
// tableTitle.textContent = "COFFEE BEAN CONSUMPTON CHART"
// tableTitle.colSpan = 15;
// row1.appendChild(tableTitle);



var tableBg = document.createElement('section');
tableBg.id = "tablebg";
document.body.appendChild(tableBg);

var tableBody = document.createElement('section');
tableBody.id = "tablebody";
tableBg.appendChild(tableBody);

var table = document.createElement('table');
tableBody.appendChild(table);

var row1 = document.createElement('tr')
table.appendChild(row1);

var emptyCell = document.createElement('td')
emptyCell.id = "cornercell"
row1.appendChild(emptyCell);

var tableTitle = document.createElement('td')
tableTitle.id = "tablehead";
tableTitle.textContent = 'COFFEE BEAN CONSUMPTION BY LOCATION BY HOUR';
tableTitle.colSpan = 15;
row1.appendChild(tableTitle);

var row2 = document.createElement('tr');
row2.id = "row2";
table.appendChild(row2);

var locationCell = document.createElement('td');
locationCell.id = "location"
locationCell.textContent = 'LOCATION';
row2.appendChild(locationCell);

var pike = new setting('Pike Place', 14, 55, 1.2, 3.7);
var capHill = new setting('Capitol Hill', 32, 48, 3.2, 0.4);
var seaPub = new setting('Seattle Public Library', 49, 75, 2.6, 0.2);
var sLake = new setting('South Lake Union', 35, 88, 1.3, 3.7);
var seaTac = new setting('SeaTac', 68, 124, 1.1, 2.7);
var web = new setting('Website', 3, 6, 0, 6.7);

function hourRow() {
  for (var j = 0; j < storeHours.length; j++) {
    var hourCell = document.createElement('td');
    hourCell.id = "hours";
    hourCell.textContent = storeHours[j];
    row2.appendChild(hourCell);
  }
}
hourRow();

function tableData(location) {
  var row3 = document.createElement('tr');
  table.appendChild(row3);

  var locName = document.createElement('td');
  locName.textContent = location.place;
  row3.appendChild(locName);

  for (var k = 0; k < storeHours.length; k++) {
      var tdEl = document.createElement('td');
      tdEl.id = "contents";
      tdEl.textContent = location.totalPounds[k];
      row3.appendChild(tdEl);
    };
}


tableData(pike);
tableData(capHill);
tableData(seaPub);
tableData(sLake);
tableData(seaTac);
tableData(web);

}


//THIS IS MY WORKING CODE FROM JAN11
//
// var pikeHeader = document.createElement('h2');
// pikeHeader.textContent = "Pike Place Market";
// document.body.appendChild(pikeHeader);
//
// var pikeCaption = document.createElement('h4');
// pikeCaption.textContent = "Hourly Bean Consumption Chart"
// document.body.appendChild(pikeCaption);
//
// var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
//
// var randomNum;
// var cupsSold;
// var lbsCups;
// var toGo;
// var totalLbs;
//
// for (var i = 0; i < hours.length; i++) {
//   var pikePlace = {
//     minCustomers: 14,
//     maxCustomers: 55,
//     avgCups: 1.2,
//     avgLbs: 3.7,
//     numCustomers: function() {
//       randomNum = Math.floor((Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
//       cupsSold = Math.floor(randomNum * this.avgCups);
//       lbsCups = Math.floor((randomNum * this.avgCups) / 20);
//       toGo = Math.floor(randomNum * this.avgLbs);
//       totalLbs = Math.floor(lbsCups + toGo);
//       //console.log(hours[i] + " " + randomNum + " Customers, " + totalLbs + " Total Lbs, " + cupsSold + " Cups Sold (" + lbsCups + " lbs), " + toGo + " To-Go Lbs, " );
//       }
//   }
//   pikePlace.numCustomers();
//   var pikeNumbers = document.createElement('li');
//   pikeNumbers.textContent = (hours[i] + " " + randomNum + " Customers, " + totalLbs + " Total Lbs, " + cupsSold + " Cups Sold (" + lbsCups + " lbs), " + toGo + " To-Go Lbs, ");
//   document.body.appendChild(pikeNumbers);
// }

// function renderMonths() {
//   var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
//   var sectEl = document.getElementById('test');
//   var tblEl = document.createElement('table');
//   var trEl = document.createElement('tr');
//   var thEl = document.createElement('th');
//   thEl.textContent = 'Months';
//   trEl.appendChild(thEl);
//
//   for (var j = 0; j < months.length; j++) {
//     var tdEl = document.createElement('td');
//     trEl.appendChild(tdEl);
//   }
//   tblEl.appendChild(trEl);
//   secEl.appendChild(tblEl);
// }
// renderMonths();
