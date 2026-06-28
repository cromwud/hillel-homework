describe('Тестування TODO додатку', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:5173'); 
  });

  
  it('Що сторінка має заголовок TODO', () => {
    cy.get('[data-cy="heading"]').should('have.text', 'TODO Додаток');
  });

 
  it('Що у поле для тексту можна ввести як цифри, так і букви', () => {
    cy.get('[data-cy="todo-input"]')
      .type('Здати дз №5')
      .should('have.value', 'Здати дз №5');
  });

  
  it('Після натискання на кнопку "Додати" без тексту, ви отримаєте помилку', () => {
    cy.get('[data-cy="todo-submit"]').click();
    cy.get('[data-cy="error-message"]')
      .should('be.visible')
      .and('have.text', 'Назва таски не може бути порожньою!');
  });

 
  it('Після вписання тексту та натискання на "Додати" отримаєте новий елемент у списку з потрібним текстом', () => {
    cy.get('[data-cy="todo-input"]').type('Покрити код тестами');
    cy.get('[data-cy="todo-submit"]').click();

    cy.get('[data-cy="todo-list"]').should('contain', 'Покрити код тестами');
    cy.get('[data-cy="todo-input"]').should('have.value', '');
  });

  
  it('Помилка зникає, якщо після невдалої спроби ввести текст і натиснути "Додати"', () => {
    cy.get('[data-cy="todo-submit"]').click();
    cy.get('[data-cy="error-message"]').should('be.visible');

    cy.get('[data-cy="todo-input"]').type('Виправлена таска');
    cy.get('[data-cy="todo-submit"]').click();

    cy.get('[data-cy="error-message"]').should('not.exist');
    cy.get('[data-cy="todo-list"]').should('contain', 'Виправлена таска');
  });

});