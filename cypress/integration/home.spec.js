describe('Home page', () => {
  beforeEach(() => {
    // Assuming your application is running on localhost:3000
    cy.visit('http://localhost:5173/');
  });

  it('should render the layout with navbar, main content, and footer', () => {
    cy.get('header img').should('have.attr', 'src', '/images/NYtimes-logo.png');
    cy.get('main').should('exist');
    cy.get('footer').should('contain', '© 2024 NY Times App');
  });

  it('should have a clickable Home link in the navbar', () => {
    // Accessing elements with styled module classes:
    cy.get('header > ul > li > a').should('contain', 'Home');
    cy.get('header > ul > li > a').click();
    cy.url().should('eq', 'http://localhost:5173/');
  });

  it('should display the logo with correct dimensions', () => {
    cy.get('header img').should('have.attr', 'src', '/images/NYtimes-logo.png');
    // Adjust selector for specific width/height if needed
    cy.get('header img').should('have.attr', 'width', 300);
  });
});
