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

{% tabs %}
{% tab title="JavaScript : Class component" %}

```jsx
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

  // the handleTabChange method get two arguments:
  // - the tab name
  // - the React tab element
  handleTabChange(name, activeTab) {
    // set the active tab name to do what you want with the content
    this.setState({
      activeTabName: name,
    });
  }

  render() {
    return (
      <Box flexDirection="column">
        <Box>
          <Text>
            {this.state.activeTab === 'foo' && 'Selected tab is "foo"'}
            {this.state.activeTab === 'bar' && 'Selected tab is "bar"'}
            {this.state.activeTab === 'baz' && 'Selected tab is "baz"'}
          </Text>
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

{% endtab %}

{% tab title="Javascript : Functional component" %}

```jsx
import React, { useState } from 'react';
import { render, Box, Color } from 'ink';
import { Tabs, Tab } from 'ink-tab';

function TabExample(props) {
  const [activeTabName, setActiveTabName] = useState(null);

  // the handleTabChange method get two arguments:
  // - the tab name
  // - the React tab element
  function handleTabChange(name, activeTab) {
    // set the active tab name to do what you want with the content
    setActiveTabName(name);
  }

  return (
    <Box flexDirection="column">
      <Box>
        <Text>
          {activeTab === 'foo' && 'Selected tab is "foo"'}
          {activeTab === 'bar' && 'Selected tab is "bar"'}
          {activeTab === 'baz' && 'Selected tab is "baz"'}
        </Text>
      </Box>

      <Tabs onChange={handleTabChange}>
        <Tab name="foo">Foo</Tab>
        <Tab name="bar">Bar</Tab>
        <Tab name="baz">Baz</Tab>
      </Tabs>
    </Box>
  );
}

render(<TabExample />);
```

{% endtab %}
{% endtabs %}
