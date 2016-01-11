var pikePlace = {
  minCustomers: 14,
  maxCustomers: 55,
  avgCups: 1.2,
  avgLbs: 3.7,

  numCustomers: function(){
    return Math.floor((Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
  },
  cupsSold: function() {
    return (this.numCustomers() * 1.2) / 20;
  },
  toGo: function() {
    return (this.numCustomers() * 3.7);
  },
  totalLbs: function() {
    return (this.cupsSold() + this.toGo());
  }
}
