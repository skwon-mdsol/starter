import React from 'react';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

import App from './app';

describe('The App', () => {
  beforeEach(jasmineEnzyme);
  function render(props = {}) {
    return shallow(<App/>)
  } 
  it('should render', () => {
    let component = render();
    expect(component.find('div')).toBePresent()
  }) 
});