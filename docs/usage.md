# Usage

### Installation

{% tabs %}
{% tab title="npm" %}
```bash
npm install ink-tab
```
{% endtab %}

{% tab title="yarn" %}
```bash
yarn add ink-tab
```
{% endtab %}
{% endtabs %}

### Usage

```javascript
import React, { Component } from 'react';
import { render, Box, Color } from 'ink';
import { Tabs, Tab } from 'ink-tab';

class TabExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabName: null,
    };

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(name, activeTab) {
    this.setState({
      activeTabName: name,
    });
  }

  render() {
    return (
      <Box flexDirection="column">
        <Box>
          {this.state.activeTab === 'foo' && 'Selected tab is "foo"'}
          {this.state.activeTab === 'bar' && 'Selected tab is "bar"'}
          {this.state.activeTab === 'baz' && 'Selected tab is "baz"'}
        </Box>

        <Tabs onChange={this.handleTabChange}>
          <Tab name="foo">Foo</Tab>
          <Tab name="bar">Bar</Tab>
          <Tab name="baz">Baz</Tab>
        </Tabs>
      </Box>
    );
  }
}

render(<TabExample />);
```

