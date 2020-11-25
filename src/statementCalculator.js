class StatementCalculator{

    constructor(customer, movies){
      this.customer = customer;
      this.movies = movies;
    }
  
    addFrequentRenterPoints(){
      var points = 1;
      this.customer.rentals.forEach( rental => {
        points = this.addBonus(this.movies[rental.movieID].code, rental.days, points);
      })
      return points;
    }
  
    totalAmount(){
      var total = 0;
      this.customer.rentals.forEach( rental => {
        total = this.movieAmount(this.movies[rental.movieID].code, rental.days);
      })
      return total;
    }
  
    addBonus(code, days, frequentRenterPoints){
      if(code === "new" && days > 2) frequentRenterPoints++;
        return frequentRenterPoints;
    }

    movieAmount (code, days) {
        /*
        var types = {
          'regular': this.regularCalculator(days),
          'new': this.newCalculator(days),
          'childrens': this.childrensCalculator(days),
        };*/

        return this[code+'Calculator'](days);

        //return (types[code] || types['new']);
    }

    regularCalculator(days){
        let thisAmount = 2;
        if (days > 2) {
            thisAmount += (days - 2) * 1.5;
        }    
        return thisAmount;
    }

    newCalculator(days){
        return days * 3;
    }

    childrensCalculator(days){
        let thisAmount = 1.5;
        if (days > 3) {
          thisAmount += (days - 3) * 1.5;
        }
        return thisAmount;
    }

  
  }
  
  export default StatementCalculator;
  