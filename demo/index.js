import { h, render, Component, Text } from 'ink';
import { Tabs, Tab } from '../src';

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
    return (
      <div>
        <div>
          {this.state.activeTab === 'foo' && <Text>Selected tab is "foo"</Text>}
          {this.state.activeTab === 'bar' && <Text>Selected tab is "bar"</Text>}
          {this.state.activeTab === 'baz' && <Text>Selected tab is "baz"</Text>}
        </div>

        <Tabs onChange={this.handleTabChange}>
          <Tab name="foo">Foo</Tab>
          <Tab name="bar">Bar</Tab>
          <Tab name="baz">Baz</Tab>
        </Tabs>
      </div>
    );
  }
}

render(<TabExample />);
