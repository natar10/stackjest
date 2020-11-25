import StatementCalculator from './statementCalculator';

class Movies extends StatementCalculator{

  constructor(customer, movies){
    super(customer, movies);
    this.customer = customer;
    this.movies = movies;
  }

  printStatement(){
    let result = `Rental Record for ${this.customer.name}\n`;
    result += this.printRentalFigures() ;
    result += `Amount owed is ${this.totalAmount()}\n`;
    result += `You earned ${this.addFrequentRenterPoints()} frequent renter points\n`;
    return result;
  }

  printRentalFigures(){
    var result = '';
    this.customer.rentals.forEach( rental => {
      result += `\t${this.movies[rental.movieID].title}\t` ;
      result += `${this.movieAmount(this.movies[rental.movieID].code, rental.days)}\n` ;
    })
    return result;
  }

}

export default Movies;
