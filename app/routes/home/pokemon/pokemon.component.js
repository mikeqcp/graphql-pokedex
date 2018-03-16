import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { prop } from 'ramda';
import { Container } from './pokemon.styles';

export class Pokemon extends PureComponent {
  static propTypes = {
    data: PropTypes.any,
  };

  render() {
    const { number, name, evolutions, image } = this.props.data.toJS();
    return (
      <Container>
        <img src={image} />

        <div>
          <h3>#{number}: {name}</h3>
          <div>Evolutions: {(evolutions || []).map(prop('name'))}</div>
        </div>
      </Container>
    );
  }
}
