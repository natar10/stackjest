import statement from '../video';

const customer = {
    name: 'Nataly',
    rentals: [
        {
            movieID: 0,
            days: 3
        }
    ]
}

const movies = [
    {
        code: 'new',
        title: 'Titanic'
    }
]


describe('Original Statement', () => {

    test('Type of return', () => {
        expect( typeof( statement(customer, movies) ) ).toBe('string');
    })

    
    test('Response of return', () => {
        expect( statement(customer, movies ) )
        .toContain(`Rental Record for Nataly\n\tTitanic\t9\nAmount owed is 9\nYou earned 2 frequent renter points`);
    })

});
