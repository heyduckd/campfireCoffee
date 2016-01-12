var pikeHeader = document.createElement('h2');
pikeHeader.textContent = "Pike Place Market";
document.body.appendChild(pikeHeader);

var pikeCaption = document.createElement('h4');
pikeCaption.textContent = "Hourly Bean Consumption Chart"
document.body.appendChild(pikeCaption);

var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];

var randomNum;
var cupsSold;
var lbsCups;
var toGo;
var totalLbs;

for (var i = 0; i < hours.length; i++) {
  var pikePlace = {
    minCustomers: 14,
    maxCustomers: 55,
    avgCups: 1.2,
    avgLbs: 3.7,
    numCustomers: function() {
      randomNum = Math.floor((Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
      cupsSold = Math.floor(randomNum * this.avgCups);
      lbsCups = Math.floor((randomNum * this.avgCups) / 20);
      toGo = Math.floor(randomNum * this.avgLbs);
      totalLbs = Math.floor(lbsCups + toGo);
      //console.log(hours[i] + " " + randomNum + " Customers, " + totalLbs + " Total Lbs, " + cupsSold + " Cups Sold (" + lbsCups + " lbs), " + toGo + " To-Go Lbs, " );
      }
  }
  pikePlace.numCustomers();
  var pikeNumbers = document.createElement('li');
  pikeNumbers.textContent = (hours[i] + " " + randomNum + " Customers, " + totalLbs + " Total Lbs, " + cupsSold + " Cups Sold (" + lbsCups + " lbs), " + toGo + " To-Go Lbs, ");
  document.body.appendChild(pikeNumbers);
}
