/// <reference types="Cypress" />

const faker = require('faker');

describe('Create Issue', () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `issue-${faker.datatype.uuid()}`,
      description: faker.random.words(6),
    },
  };

  beforeEach(() => {
    cy.login();
    cy.gui_createProject(issue.project);
  });

  it('successfully', () => {
    cy.gui_createIssue(issue);

    cy.get('.issue-details')
      .should('contain', issue.title)
      .and('contain', issue.description);
  });
});
