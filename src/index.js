import { h, Component, Text } from 'ink';

class Tab extends Component {
  render() {
    return <Text>{this.props.children}</Text>;
  }
}

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);

    this.state = {
      activeTab: 0,
    };
  }

  componentDidMount() {
    process.stdin.on('keypress', this.handleKeyPress);

    this.handleTabChange(this.props.children[0]);
  }

  componentWillUnmount() {
    process.stdin.removeListener('keypress', this.handleKeyPress);
  }

  handleKeyPress(ch, key) {
    let nextTabId;

    switch (key.name) {
      case 'left': {
        nextTabId = this.state.activeTab - 1;
        if (nextTabId < 0) {
          nextTabId = this.props.children.length - 1;
        }

        break;
      }

      case 'right': {
        nextTabId = this.state.activeTab + 1;
        if (nextTabId >= this.props.children.length) {
          nextTabId = 0;
        }

        break;
      }

      default:
        return;
    }

    this.handleTabChange(this.props.children[nextTabId]);

    this.setState({
      activeTab:  nextTabId,
    });
  }

  handleTabChange(tab) {
    this.props.onChange(tab.props.name, tab);
  }

  render() {
    return this.props.children.map((child, key) => (
      <Text>
        {key !== 0 && <Text dim> | </Text>}
        <Text bgGreen={this.state.activeTab === key}>{child}</Text>
      </Text>
    ));
  }
}

export { Tab, Tabs };
