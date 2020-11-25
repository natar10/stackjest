import AmountCalculator from './amountCalculator';

class StatementCalculator extends AmountCalculator{

    constructor(customer, movies){
      super(customer, movies)
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
        
        return this[(code || 'new')+'Calculator'](days);

    }

  
  }
  
  export default StatementCalculator;
  