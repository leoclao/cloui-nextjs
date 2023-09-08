import React from 'react';
import { Title } from '@/elements/Title';

describe('<Title />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Title title={'cypress: Test title'} />);
  });
});