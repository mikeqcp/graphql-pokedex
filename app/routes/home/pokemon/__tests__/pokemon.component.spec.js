import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { fromJS } from 'immutable';

import { Pokemon } from '../pokemon.component';


describe('<Pokemon />', () => {
  const defaultProps = {
  };

  const component = (props) => (
    <Pokemon {...defaultProps} {...props} />
  );

  const render = (props = {}) => shallow(component(props));

  it('should render correctly', () => {
    const wrapper = render();
    global.expect(wrapper).toMatchSnapshot();
  });
});
