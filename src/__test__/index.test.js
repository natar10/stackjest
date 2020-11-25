import MovieManager from '../index';
import MoviesMock from '../__mocks__/MoviesMock';
import CustomerMock from '../__mocks__/CustomerMock';


const movie = new MovieManager(CustomerMock, MoviesMock);

describe('Type of response statement', () => {

    test('Type of return', () => {
        expect( typeof( movie.printStatement() ) ).toBe('string');
    })

    
    test('Response of return', () => {
        expect( movie.printStatement( ) )
        .toContain(`Rental Record for Nataly\n\tTitanic\t9\nAmount owed is 9\nYou earned 2 frequent renter points`);
    })

});


describe('Frequent client', () => {

    test('Total frequent point if new', () => {
        expect( movie.addFrequentRenterPoints() )
        .toBe(2);
    })

    test('Add bonus to frequent', () => {
        expect( movie.addBonus("new", 3, 0) )
        .toBe(1);
    })

    test('Dont add bonus', () => {
        expect( movie.addBonus("new", 1, 0) )
        .toBe(0);
    })

});


describe('Determine Movie Amount', () => {
    let less_two_days = 1;
    let plus_two_days = 4;

    test('When New', () => {
        expect( movie.movieAmount("new", less_two_days) )
        .toBe(3);
    })

    test('When regular before 2 days', () => {
        expect( movie.movieAmount("regular", less_two_days) )
        .toBe(2);
    })

    test('When regular greather than 2 days', () => {
        expect( movie.movieAmount("regular", plus_two_days) )
        .toBe( 2 + ((plus_two_days - 2) * 1.5) );
    })

    test('When children', () => {
        expect( movie.movieAmount("childrens", less_two_days) )
        .toBe(1.5);
    })

    test('When children greather than 3 days', () => {
        expect( movie.movieAmount("childrens", plus_two_days) )
        .toBe(1.5 + ((plus_two_days - 3) * 1.5) );
    })

});