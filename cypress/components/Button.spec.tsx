/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';
import Button from '../../src/components/Button';
import { ButtonTypes } from '../../src/enums/buttonEnums';

describe('Button', () => {
  it('should', () => {
    const mockedOnClick = cy.stub();

    mount(<Button type={ButtonTypes.BUTTON} text="hello from button" onClick={mockedOnClick} />);
    
    cy.get('button').contains('hello from button');

    cy.get('button').click();

    // mockedOnClick();

    cy.wait(1000);

    // expect(mockedOnClick).to.be.called;
  });
});
