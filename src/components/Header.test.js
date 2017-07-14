import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

import Header from './Header';

describe('The header', () => {
  beforeEach(jasmineEnzyme);
  function render(pageHeader='App Title', props = {}) {
    return shallow(<Header pageHeader={pageHeader}/>)
  } 
  it('should render', () => {
    let component = render();
    expect(component.find('header')).toBePresent()
  })
  it('should have a title', () => {
    let component = render();
    expect(component.find('h1')).toHaveText('App Title')
  })
});
