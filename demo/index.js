import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render, Box, Text } from 'ink';
import { Tabs, Tab } from '../lib';

const MainContent = ({ activeTab }) => (
  <Text>
    {activeTab === 'foo' && 'Selected tab is "foo"'}
    {activeTab === 'bar' && 'Selected tab is "bar"'}
    {activeTab === 'baz' && 'Selected tab is "baz"'}
  </Text>
);

MainContent.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

class TabExample extends Component {
  static propTypes = {
    direction: PropTypes.oneOf(['row', 'column']).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: null,
    };

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(name /* , child */) {
    this.setState({
      activeTab: name,
    });
  }

  render() {
    const { direction } = this.props;
    const { activeTab } = this.state;

    return (
      <Box
        flexDirection={direction === 'column' ? 'row-reverse' : 'column'}
        justifyContent={direction === 'column' ? 'flex-end' : 'flex-start'}
      >
        {activeTab && <MainContent activeTab={activeTab} />}

        {/* eslint-disable-next-line react/self-closing-comp */}
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

render(
  <TabExample
    direction={process.argv.includes('--column') ? 'column' : 'row'}
  />,
  { debug: false }
);
