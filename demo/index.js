import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { render, Box } from 'ink';
import { Tabs, Tab } from '../src';

const MainContent = ({ activeTab }) => (
  <Box>
    {activeTab === 'foo' && 'Selected tab is "foo"'}
    {activeTab === 'bar' && 'Selected tab is "bar"'}
    {activeTab === 'baz' && 'Selected tab is "baz"'}
  </Box>
);

class TabExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: null,
    };

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(name, child) {
    this.setState({
      activeTab: name,
    });
  }

  render() {
    const { direction } = this.props;

    return (
      <Box
        flexDirection={direction === 'column' ? 'row-reverse' : 'column'}
        justifyContent={direction === 'column' ? 'flex-end' : 'flex-start'}
      >
        <MainContent activeTab={this.state.activeTab} />

        {direction === 'column' && <Box> </Box>}

        <Tabs
          onChange={this.handleTabChange}
          flexDirection={direction}
          width={direction === 'column' ? 20 : '100%'}
          keyMap={{ useTab: false }}
        >
          <Tab name="foo">Foo</Tab>
          <Tab name="bar">Bar</Tab>
          <Tab name="baz">Baz</Tab>
        </Tabs>
      </Box>
    );
  }
}

TabExample.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']).isRequired,
};

render(
  <TabExample
    direction={process.argv.includes('--column') ? 'column' : 'row'}
  />,
  { debug: false }
);
