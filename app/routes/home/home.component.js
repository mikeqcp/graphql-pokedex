import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import envConfig from 'env-config';

import messages from './home.messages';
import { MaintainerList } from './maintainerList/maintainerList.component';
import { Container, Title, TitleLogo, EnvName } from './home.styles';
import { Pokemon } from './pokemon/pokemon.component';

export class Home extends PureComponent {
  static propTypes = {
    items: PropTypes.object,
    language: PropTypes.string.isRequired,
    fetchMaintainers: PropTypes.func.isRequired,
    fetchPokemon: PropTypes.func.isRequired,
    setLanguage: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    pokemon: PropTypes.any,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentWillMount() {
    this.props.fetchMaintainers(this.props.language);
  }

  componentDidMount() {
    this.props.fetchPokemon('Bulbasaur');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.language !== this.props.language) {
      this.props.fetchMaintainers(nextProps.language);
    }
  }

  render() {
    return (
      <Container>
        <Helmet title="Homepage" />

        <Title>
          <TitleLogo name="logo" />
          <FormattedMessage {...messages.welcome} />
        </Title>

        <input type="text" ref={el => (this.input = el)} />
        <button onClick={() => this.props.fetchPokemon(this.input.value)}>LOAD</button>

        {this.props.pokemon && <Pokemon data={this.props.pokemon} />}

        <EnvName>Environment: {envConfig.name}</EnvName>

        <MaintainerList items={this.props.items} />
      </Container>
    );
  }
}
