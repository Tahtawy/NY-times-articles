describe('Article details page', () => {
  beforeEach(() => {
    // Assuming your application is running on localhost:3000
    cy.visit(
      'http://localhost:5173/article/nyt%3A%2F%2Farticle%2Fc59255ff-d3db-5641-82bc-13d78dc9e9c7'
    );
  });

  it('should display the logo with correct dimensions', () => {
    cy.get('header img').should('have.attr', 'src', '/images/NYtimes-logo.png');
    // Adjust selector for specific width/height if needed
    cy.get('header img').should('have.attr', 'width', 300);
  });
});
