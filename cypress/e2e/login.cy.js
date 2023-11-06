
describe('login page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should login with valid email and password', () => {
    
    cy.login('test@test.com', 'test')
    
    cy.contains('Добро пожаловать test@test.com').should('be.visible')
  })
  
  it('should not login with empty mail', () => {

    cy.login(null, 'test')

    cy.get('#mail').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })

  it('should not login with empty password', () => {

    cy.login('test@test.com', null)

    cy.get('#pass').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })

  it('should add a new book', () => {

    cy.login('test@test.com', 'test')

    cy.addBook('Кремулятор', 'В основе материалы следственного дела', 'Саша Филипенко')

    cy.contains("Кремулятор").as("selectedBook")

    cy.get("@selectedBook")
      .find("button")
      .invoke("text")
      .then((text) => {
        if (text === "Add to favorite") {

          cy.get("@selectedBook").find("button").click()

        }
      });
    cy.contains("Favorites").click()

    cy.contains('Саша Филипенко').should('be.visible')
  })

  it('should book delete with Favorites', () => {

    cy.login('test@test.com', 'test');
    cy.deleteBook('Кремулятор');
  
    cy.contains('Please add some book to favorit on home page!').should(
      'be.visible'
    );
  });

  it('should book add not title on page', () => {

    cy.login('bropet@mail.ru', '123')

    cy.addBook(
      null,
      'В основе материалы следственного дела',
      'Саша Филипенко'
    )

    cy.tagName("#title")

    cy.screenshot()
  })
})